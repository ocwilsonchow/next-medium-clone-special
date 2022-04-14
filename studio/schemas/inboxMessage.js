export default {
  name: "inboxMessage",
  type: "document",
  title: "InboxMessage",
  fields: [
    {
      name: "createdAt",
      title: "Created at",
      type: "datetime",
    },
    {
      name: "message",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .max(500)
          .error("A title of max. 500 characters is permitted"),
    },
    {
      name: "email",
      title: "Email",
      type: "email",
       validation: (Rule) =>
        Rule.required()
          .max(500)
          .error("Your email is required"),
    },
    {
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .max(20)
          .error("A first name of max. 20 characters is permitted"),
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .max(20)
          .error("A last name of max. 20 characters is permitted"),
    },
    {
      name: "topic",
      title: "Topic",
      type: "string",
    },
    {
      name: "contact",
      title: "Contact",
      type: "string",
    },
  ],
};
