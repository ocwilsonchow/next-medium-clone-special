import { client } from "../lib/sanity";

// Get Public Chat Messages
export async function apiGetPublicChatMessages() {
  const query = `
    *[_type == "chatMessage"] {
      message,
      createdAt,
      sender->{name}
  }
  `;

  const sanityResponse = await client.fetch(query);
  return sanityResponse;
}
