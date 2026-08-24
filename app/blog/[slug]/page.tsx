import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {PortableText, type PortableTextComponents} from "@portabletext/react";
import {getPost, getPostSlugs, imageUrl} from "../../lib/sanity";

type Props = {params: Promise<{slug: string}>};

export async function generateStaticParams() { return getPostSlugs(); }

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const image = post.mainImage?.asset ? imageUrl(post.mainImage).width(1200).height(630).fit("crop").auto("format").url() : undefined;
  const title = post.seo?.metaTitle ?? `${post.title} | Rise After Nest`;
  const description = post.seo?.metaDescription ?? post.excerpt;
  return {title, description, alternates: {canonical: post.seo?.canonicalUrl}, openGraph: {title, description, type: "article", publishedTime: post.publishedAt, images: image ? [{url: image, alt: post.mainImage?.alt ?? post.title}] : []}, twitter: {card: "summary_large_image", title, description, images: image ? [image] : []}};
}

const components: PortableTextComponents = {
  types: {
    image: ({value}) => value?.asset ? <figure><img src={imageUrl(value).width(1200).auto("format").url()} alt={value.alt ?? ""} />{value.caption && <figcaption>{value.caption}</figcaption>}</figure> : null,
  },
  marks: {link: ({children, value}) => <a href={value?.href} rel={value?.href?.startsWith("http") ? "noreferrer" : undefined}>{children}</a>},
};

export default async function BlogPost({params}: Props) {
  const {slug} = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const hero = post.mainImage?.asset ? imageUrl(post.mainImage).width(1800).height(1000).fit("crop").auto("format").url() : "/images/nassau-shark.jpg";
  return <main className="postPage">
    <nav className="nav"><Link className="brand" href="/"><span className="sunmark" aria-hidden="true"><i /></span><span>RISE <em>AFTER</em> NEST</span></Link><div className="links"><Link href="/#stories">Stories</Link><Link href="/#about">About</Link></div></nav>
    <article>
      <header className="postHeader"><p className="sectionLabel">{post.categories?.join(" · ") || "FIELD NOTE"}</p><h1>{post.title}</h1><p className="postDeck">{post.excerpt}</p><div className="postByline">By {post.author ?? "Doug & Tara Markott"} · {new Intl.DateTimeFormat("en-US", {month: "long", day: "numeric", year: "numeric", timeZone: "UTC"}).format(new Date(post.publishedAt))}</div></header>
      <figure className="postHero"><img src={hero} alt={post.mainImage?.alt ?? post.title} />{post.mainImage?.caption && <figcaption>{post.mainImage.caption}</figcaption>}</figure>
      <div className="postBody"><PortableText value={post.body ?? []} components={components} /></div>
    </article>
    <footer className="postFooter"><Link href="/">← Back to Rise After Nest</Link></footer>
  </main>;
}
