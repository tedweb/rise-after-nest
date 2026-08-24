import {authorType} from "./author";
import {categoryType} from "./category";
import {postType} from "./post";
import {seoType} from "./objects/seo";
import {migrationMetadataType} from "./objects/migrationMetadata";
export const schemaTypes = [postType, authorType, categoryType, seoType, migrationMetadataType];
