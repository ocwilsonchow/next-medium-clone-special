import { readClient, writeClient } from "../lib/sanity";

// Get Public Chat Messages
export async function apiGetPublicChatMessages() {
  const query = `
    *[_type == "chatMessage" ] | order(createdAt desc) {
      chatroom->,
      chatroom,
      message,
      createdAt,
      _id,
      username,
      userEmail,
      userImage
    }
  `;

  try {
    const sanityResponse = await readClient.fetch(query);
    return sanityResponse;
  } catch (error) {
    console.error(error);
  }
}

// Create Public Chat Messages
export async function apiCreatePublicChatMessages(doc) {
  console.log(doc);
  try {
    await writeClient.create(doc);
  } catch (error) {
    console.error(error);
  }
}
