import {defineField, defineType} from "sanity";
export const authorType = defineType({name: "author", title: "Author", type: "document", fields: [
  defineField({name: "name", title: "Name", type: "string", validation: (rule) => rule.required()}),
  defineField({name: "slug", title: "Slug", type: "slug", options: {source: "name"}, validation: (rule) => rule.required()}),
  defineField({name: "image", title: "Photo", type: "image", options: {hotspot: true}, fields: [defineField({name: "alt", type: "string", title: "Alternative text", validation: (rule) => rule.required()})]}),
  defineField({name: "bio", title: "Bio", type: "array", of: [{type: "block"}]})
], preview: {select: {title: "name", media: "image"}}});
