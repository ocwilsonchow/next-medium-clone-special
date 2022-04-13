import { client } from "../../lib/sanity";

// Get Public Chat Messages
export const apiGetPublicChatMessages = async (req, res) => {
  const query = `
    *[_type == "chatMessage" ] | order(createdAt desc){
      chatroom->,
      userReference->,
      message,
      createdAt,
      _id
    }
  `;

  try {
    const sanityResponse = await client.fetch(query);
    res.status(200).send(sanityResponse);
  } catch (error) {
    console.error(error);
    res.status(500).send("⚠️", error);
  }
};
