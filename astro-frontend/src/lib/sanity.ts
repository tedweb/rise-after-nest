import {sanityClient} from "sanity:client";
import {createImageUrlBuilder} from "@sanity/image-url";
import type {TypedObject} from "astro-portabletext/types";
import {LATEST_POST_QUERY, POST_QUERY, POST_SLUGS_QUERY} from "./queries";

export type SanityImage = {
  asset?: {_ref?: string; _id?: string};
  alt?: string;
  caption?: string;
};

export type PostSummary = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  mainImage?: SanityImage;
};

export type Post = PostSummary & {
  author?: string;
  categories?: string[];
  body?: TypedObject[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
  };
};

const builder = createImageUrlBuilder(sanityClient);

export function imageUrl(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}

export async function getLatestPost(): Promise<PostSummary | null> {
  try {
    return await sanityClient.fetch(LATEST_POST_QUERY);
  } catch (error) {
    console.warn("Unable to load the latest Sanity post during the build.", error);
    return null;
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    return await sanityClient.fetch(POST_QUERY, {slug});
  } catch (error) {
    console.warn(`Unable to load Sanity post: ${slug}`, error);
    return null;
  }
}

export async function getPostSlugs(): Promise<Array<{slug: string}>> {
  try {
    return await sanityClient.fetch(POST_SLUGS_QUERY);
  } catch (error) {
    console.warn("Unable to load Sanity post slugs during the build.", error);
    return [];
  }
}
