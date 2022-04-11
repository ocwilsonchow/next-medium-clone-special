import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "zmau43jq",
  dataset: "production",
  apiVersion: "v1",
  token: process.env.SANITY_API_TOKEN,
  useCdn: true,
});
