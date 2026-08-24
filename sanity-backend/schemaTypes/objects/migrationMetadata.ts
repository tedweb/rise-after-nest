import {defineField, defineType} from "sanity";
export const migrationMetadataType = defineType({name: "migrationMetadata", title: "Migration metadata", type: "object", fields: [
  defineField({name: "source", type: "string", readOnly: true}), defineField({name: "sourceId", type: "string", readOnly: true}),
  defineField({name: "legacyUrl", type: "string", readOnly: true}), defineField({name: "migratedAt", type: "datetime", readOnly: true})
]});
