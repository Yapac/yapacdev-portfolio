export const work = {
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Business website", value: "Business website" },
          { title: "Portfolio website", value: "Portfolio website" },
          { title: "Ecommerce website", value: "Ecommerce website" },
          { title: "Nonprofil website", value: "Nonprofil website" },
          { title: "Webgl experience", value: "Webgl experience" },
          { title: "Video game", value: "Video game" },
        ],
      },
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
      options: {
        list: [
          { title: "View website", value: "View website" },
          { title: "View app", value: "View app" },
        ],
      },
    },

    {
      name: "color",
      title: "Color",
      type: "string",
    },
    {
      name: "link",
      title: "Project Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
};
