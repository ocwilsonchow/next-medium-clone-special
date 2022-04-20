
import { readClient, writeClient } from "./sanity";

// Get All Posts
export async function apiGetGalleryImages() {
  const query = `
    *[_type == "gallery"] | order(publishedAt desc)
  `;

  const sanityResponse = await readClient.fetch(query);
  return sanityResponse;
}
