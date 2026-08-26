import {defineQuery} from "groq";

export const LATEST_POST_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0]{
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage
  }
`);

export const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    "author": author->name,
    "categories": categories[]->title,
    body[]{..., _type == "image" => {..., asset->}},
    seo
  }
`);

export const POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)]{
    "slug": slug.current
  }
`);
