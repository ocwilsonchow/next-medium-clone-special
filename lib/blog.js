import { readClient, writeClient } from "./sanity";

// Get All Posts
export async function apiGetBlogPosts() {
  const query = `
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      tags,
      publishedAt,
      body,
      "author" : author->name,
      "authorImage" : author->image,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
    }
  }
  `;

  const sanityResponse = await readClient.fetch(query);
  return sanityResponse;
}

// Get Specific Blog Post
export async function apiGetBlogPost(slug) {
  console.log("get blog")
  const query = `
   *[_type == "post" && slug.current == "${slug}"] {
      _id,
      _rev,
      title,
      slug,
      publishedAt,
      body,
      "author" : author->name,
      "authorImage" : author->image,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
    },
    "relatedComments": *[_type=='comment' && references(^._id)] | order(publishedAt asc) {
      username,
      approved,
      publishedAt,
      comment,
    }
  }

  `;

  const sanityResponse = await readClient.fetch(query);
  return sanityResponse[0];
}

// Get Blog Post Ids for Static Paths
export async function apiGetBlogPostIds() {
  const query = `
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
  }
  `;

  const sanityResponse = await readClient.fetch(query);
  return sanityResponse.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
}

// Create comment on specific post
export async function apiCreateBlogComment(doc, slug) {
  console.log(doc)
   try {
    await writeClient.create(doc);
    apiGetBlogPost(slug)
  } catch (error) {
    console.error(error);
  }

}
