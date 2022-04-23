export default {
  name: "chatroom",
  type: "document",
  title: "Chatroom",
  fields: [
    {
      name: "createdAt",
      title: "Created at",
      type: "datetime",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "public",
      type: "boolean",
      initialValue: false
    },


  ],
};
