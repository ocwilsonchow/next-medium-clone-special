import { readClient, writeClient } from "../lib/sanity";

// Get Public Chat Messages
export async function apiGetPublicChatMessages() {
  const query = `
    *[_type == "chatMessage" ] | order(createdAt asc) {
      chatroom->,
      chatroom,
      message,
      createdAt,
      _id,
      username,
      userEmail,
      userImage,
      likes
    }
  `;

  try {
    const sanityResponse = await readClient.fetch(query);
    return sanityResponse;
  } catch (error) {
    console.error(error);
  }
}

// Push new online user to the Chatroom
export async function apiPushOnlineUser(session) {
  if (!session) return;
  const userDoc = {
    _type: "onlineUsers",
    _id: session?.user?.id,
    username: session?.user?.name,
    userImage: session?.user?.image,
    userId: session?.user?.id,
  };
  try {
    const sanityResponse = await writeClient.createIfNotExists(userDoc);
    return sanityResponse;
  } catch (error) {
    console.log(error);
  }
}

// Remove online user
export async function apiRemoveOnlineUser(session) {
  if (!session) return;

  try {
    const sanityResponse = await writeClient.delete(session.user.id);
    return sanityResponse;
  } catch (error) {
    console.log(error);
  }
}

// Create Public Chat Messages
export async function apiCreatePublicChatMessages(doc) {
  try {
    await writeClient.create(doc);
  } catch (error) {
    console.error(error);
  }
}

// Like a message
export async function apiLikeAMessage(session, anonymousId, msgId) {
  console.log(session, anonymousId, msgId)
  try {
    const response = await writeClient.patch(msgId).insert('after', 'likes', [{userId: session?.user?.id || anonymousId }]).commit()

  } catch (error) {
    console.error(error);
  }
}
