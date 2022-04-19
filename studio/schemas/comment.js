import { CommentIcon } from "@sanity/icons";

export default {
  name: "comment",
  type: "document",
  title: "Comment",
  fields: [
    {
      name: "username",
      title: "Username",
      type: "string",
    },
      {
      name: "userEmail",
      title: "User Email",
      type: "email",
    },
    {
      name: 'userImage',
      title: 'User Image',
      type: 'url'
    },

    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "comment",
      type: "text",
    },
    {
      name: "post",
      type: "reference",
      to: [{ type: "post" }],
    },
  ]

};
