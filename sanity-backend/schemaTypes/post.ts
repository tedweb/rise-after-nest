import {defineArrayMember, defineField, defineType} from "sanity";
export const postType = defineType({name: "post", title: "Blog post", type: "document", fields: [
  defineField({name: "title", title: "Title", type: "string", validation: (rule) => rule.required()}),
  defineField({name: "slug", title: "Slug", type: "slug", options: {source: "title", maxLength: 96}, validation: (rule) => rule.required()}),
  defineField({name: "excerpt", title: "Excerpt", type: "text", rows: 3, validation: (rule) => rule.required().max(240)}),
  defineField({name: "publishedAt", title: "Published at", type: "datetime", initialValue: () => new Date().toISOString(), validation: (rule) => rule.required()}),
  defineField({name: "author", title: "Author", type: "reference", to: [{type: "author"}], validation: (rule) => rule.required()}),
  defineField({name: "categories", title: "Categories", type: "array", of: [defineArrayMember({type: "reference", to: [{type: "category"}]})]}),
  defineField({name: "mainImage", title: "Main image", type: "image", options: {hotspot: true}, fields: [defineField({name: "alt", title: "Alternative text", type: "string", validation: (rule) => rule.required()}), defineField({name: "caption", title: "Caption", type: "string"})], validation: (rule) => rule.required()}),
  defineField({name: "body", title: "Body", type: "array", of: [
    defineArrayMember({type: "block", styles: [{title: "Normal", value: "normal"}, {title: "Heading 2", value: "h2"}, {title: "Heading 3", value: "h3"}, {title: "Quote", value: "blockquote"}], marks: {annotations: [{name: "link", type: "object", title: "Link", fields: [defineField({name: "href", type: "url", validation: (rule) => rule.uri({scheme: ["http", "https", "mailto", "tel"]})})]}]}}),
    defineArrayMember({type: "image", options: {hotspot: true}, fields: [defineField({name: "alt", title: "Alternative text", type: "string", validation: (rule) => rule.required()}), defineField({name: "caption", title: "Caption", type: "string"})]})
  ], validation: (rule) => rule.required()}),
  defineField({name: "seo", title: "Search and social", type: "seo"}),
  defineField({name: "migration", title: "Migration", type: "migrationMetadata", hidden: ({document}) => !document?.migration})
], orderings: [{title: "Published, newest", name: "publishedAtDesc", by: [{field: "publishedAt", direction: "desc"}]}], preview: {select: {title: "title", subtitle: "publishedAt", media: "mainImage"}}});
