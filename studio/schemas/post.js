export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "tags",
      title: "Tags",
      type: "tags",
      options: {
        //Locks menu from creating new tags (defaults to false)
        frozen: true,
        //Preset of tags (defaults to empty)
        preload: [
          { label: "Web Development", value: "web Development" },
          { label: "Blender", value: "blender" },
          { label: "Technologies", value: "technologies" },
          { label: "Javascript", value: "javascript" },
          { label: "React.js", value: "react.js" },
          { label: "Next.js", value: "next.js" },
        ],
        //Closes menu after tag selected (defaults to true)
        closeMenuOnSelect: true,
      },
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
