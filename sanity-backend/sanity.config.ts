import {defineConfig} from "sanity";
import {structureTool} from "sanity/structure";
import {visionTool} from "@sanity/vision";
import {schemaTypes} from "./schemaTypes";
export default defineConfig({name: "default", title: "Rise After Nest", projectId: "fmwd9w5x", dataset: "production", plugins: [structureTool(), visionTool()], schema: {types: schemaTypes}});
