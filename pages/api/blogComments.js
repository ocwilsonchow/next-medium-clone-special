import { readClient, writeClient } from "../../lib/sanity";

// Get comments on specific post
export default async function apiGetBlogComment(req, res) {
  const query = `
   *[_type == "post"]

  `;
  try {
    const sanityResponse = await readClient.fetch(query);
    res.send(sanityResponse)
  } catch (error) {
    console.log(error);
  }
}
