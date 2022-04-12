import { CommentIcon } from "@sanity/icons";

export default {
  name: "comment",
  type: "document",
  title: "Comment",
  icon: CommentIcon,
  fields: [
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      title: "Approved",
      name: "approved",
      type: "boolean",
      description: "Comments won't show on the site without approval",
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
  ],
  preview: {
    select: {
      name: "name",
      comment: "comment",
      post: "post.title",
    },
    prepare({ name, comment, post }) {
      return {
        title: `${name} on ${post}`,
        subtitle: comment,
      };
    },
  },
};
