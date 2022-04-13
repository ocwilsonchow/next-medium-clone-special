import { CommentIcon } from "@sanity/icons";

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
      name: "sender",
      title: 'Sender',
      type: "reference",
      to: { type: "user" },
    },
    {
      name: "chatroom",
      type: "reference",
      to: {type: "chatroom"}
    }
  ],

};
