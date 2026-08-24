import {defineField, defineType} from "sanity";
export const seoType = defineType({name: "seo", title: "Search and social", type: "object", fields: [
  defineField({name: "metaTitle", title: "Meta title", type: "string", validation: (rule) => rule.max(60).warning("Search results may truncate titles over 60 characters.")}),
  defineField({name: "metaDescription", title: "Meta description", type: "text", rows: 3, validation: (rule) => rule.max(160).warning("Search results may truncate descriptions over 160 characters.")}),
  defineField({name: "canonicalUrl", title: "Canonical URL", type: "url"})
]});
