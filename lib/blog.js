import { readClient, writeClient } from "./sanity";

// Get comment
export async function apiGetBlogComment(slug) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"] {
     "relatedComments": *[_type=='comment' && references(^._id)] | order(publishedAt asc) {
      _id,
      username,
      publishedAt,
      comment,
      userEmail,
      userImage
    }
  }
  `;
  const sanityResponse = await readClient.fetch(query);
  return sanityResponse;
}

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
// what ever is returned here will affect the "data" in swr
// since you returned nothing, it defaulted to undefined
// hence it made your app display "Loading..."
export async function apiCreateBlogComment(data, doc) {
  try {
    const resp = await writeClient.create(doc);
    return [...data, doc]
  } catch (error) {
    console.error(error);
  }
}

// Delete comment
export async function apiDeleteBlogComment(comments, id) {
  const query = `
*[_type == "comment" && _id === ${id}]`;

  try {
    const response = await writeClient.delete(id);
    return [...comments]
  } catch (error) {
    console.error(error);
  }
}
