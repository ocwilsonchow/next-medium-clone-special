import { client } from "../lib/sanity";

// Get Public Chat Messages
export async function apiGetPublicChatMessages() {
  const query = `
    *[_type == "chatMessage" ] | order(createdAt desc) {
      chatroom->,
      message,
      createdAt,
      _id,
      username,
      userEmail,
      userImage
    }
  `;

  const sanityResponse = await client.fetch(query);
  return sanityResponse;
}
