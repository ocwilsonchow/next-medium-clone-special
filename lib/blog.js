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
  const query = `
   *[_type == "post" && slug.current == "${slug}"] {
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
    "relatedComments": *[_type=='comment' && references(^._id)]{
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
export async function apiCreateBlogComment(doc) {
  console.log(doc);

  try {
    const sanityResponse = await writeClient.create(doc);
    console.log(sanityResponse);
  } catch (error) {
    console.error(error);
  }
}
