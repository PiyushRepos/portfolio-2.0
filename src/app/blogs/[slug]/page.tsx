import { CustomMDX } from "@/components/custom-mdx";
import {
  calculateReadingTime,
  getAllBlogSlugs,
  getBlogBySlug,
} from "@/lib/blog";
import { Metadata } from "next";
import Image from "next/image";

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {};
  }

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
    authors: { name: blog.frontMatter.author },
    keywords: blog.frontMatter.tags,
    creator: blog.frontMatter.author,
    referrer: "origin",
    metadataBase: new URL("https://piyus.me"),
    openGraph: {
      title: blog.frontMatter.title,
      description: blog.frontMatter.description,
      url: `https://piyus.me/blogs/${slug}`,
      type: "article",
      article: {
        publishedTime: blog.frontMatter.date,
        authors: [blog.frontMatter.author],
        tags: blog.frontMatter.tags,
      },
      images: blog.frontMatter.coverImage
        ? [
            {
              url: blog.frontMatter.coverImage,
              width: 1280,
              height: 720,
              alt: blog.frontMatter.title,
            },
          ]
        : undefined,
    },
  } as Metadata;
}

export default async function BlogContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return <div className="text-muted-foreground">Blog post not found.</div>;
  }

  const readingTime = calculateReadingTime(blog.content);

  return (
    <div>
      <div className="mb-8 text-center">
        <div className="text-muted-foreground mb-4 flex items-center justify-center gap-2 text-sm">
          <time dateTime={blog.frontMatter.date}>
            {new Date(blog.frontMatter.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>•</span>
          <span>{readingTime} min read</span>
          <span>•</span>
          <span>{blog.frontMatter.author}</span>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {blog.frontMatter.title}
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl">
          {blog.frontMatter.description}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {blog.frontMatter.tags.map((tag) => (
            <span
              key={tag}
              className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {blog.frontMatter.coverImage && (
        <div className="bg-muted mb-10 overflow-hidden rounded-lg border shadow-sm">
          <Image
            src={blog.frontMatter.coverImage}
            alt={blog.frontMatter.title}
            className="aspect-video w-full object-cover"
            width={1280}
            height={720}
            priority
          />
        </div>
      )}

      <article className="prose dark:prose-invert w-full max-w-none">
        <CustomMDX content={blog.content} />
      </article>
    </div>
  );
}
