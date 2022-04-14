import { writeClient } from "../../lib/sanity";

// Create inbox message

export const apiCreateInboxMessage = async (doc) => {
  try {
    const response = await writeClient.create(doc);
    return response
  } catch (error) {
    console.error(error);
  }
};
