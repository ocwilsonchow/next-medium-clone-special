export default {
  name: "chatMessage",
  type: "document",
  title: "ChatMessage",
  fields: [
    {
      name: "createdAt",
      title: "Created at",
      type: "datetime",
    },
    {
      name: "message",
      type: "text",
    },
    {
      name: "chatroom",
      type: "reference",
      to: [{ type: "chatroom" }],
    },
    {
      name: "userEmail",
      title: "User Email",
      type: "email",
    },
    {
      name: "userImage",
      title: "User Image",
      type: "url",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },

  ],
};
