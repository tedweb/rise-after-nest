import {createClient} from "@sanity/client";
import {createImageUrlBuilder} from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "fmwd9w5x",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2026-08-24",
  useCdn: true,
  perspective: "published",
});

const builder = createImageUrlBuilder(sanityClient);
export const imageUrl = (source: Parameters<typeof builder.image>[0]) => builder.image(source);

export type PostSummary = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  mainImage?: {asset?: {_ref?: string}; alt?: string; caption?: string};
};

export type Post = PostSummary & {
  author?: string;
  categories?: string[];
  body?: Array<Record<string, unknown>>;
  seo?: {metaTitle?: string; metaDescription?: string; canonicalUrl?: string};
};

const latestPostQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0]{title, "slug": slug.current, excerpt, publishedAt, mainImage}`;
const postQuery = `*[_type == "post" && slug.current == $slug][0]{title, "slug": slug.current, excerpt, publishedAt, mainImage, "author": author->name, "categories": categories[]->title, body[]{..., _type == "image" => {..., asset->}}, seo}`;
const postSlugsQuery = `*[_type == "post" && defined(slug.current)]{"slug": slug.current}`;

export async function getLatestPost(): Promise<PostSummary | null> {
  try { return await sanityClient.fetch(latestPostQuery, {}, {next: {revalidate: 60}}); } catch { return null; }
}

export async function getPost(slug: string): Promise<Post | null> {
  try { return await sanityClient.fetch(postQuery, {slug}, {next: {revalidate: 60}}); } catch { return null; }
}

export async function getPostSlugs(): Promise<Array<{slug: string}>> {
  try { return await sanityClient.fetch(postSlugsQuery); } catch { return []; }
}
