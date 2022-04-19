import { writeClient } from "../../../lib/sanity";

// Create inbox message

export const apiCreateInboxMessage = async (req, res) => {
  console.log(req, res);
  try {
    const response = await writeClient.create(req);
    return { status: "OK", response };
  } catch (error) {
    console.error(error);
    return {status: 'ERROR', error}
  }
};
