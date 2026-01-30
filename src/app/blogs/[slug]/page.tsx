import { BlogCard } from "@/components/Blog/blog-card";
import { TableOfContents } from "@/components/Blog/table-of-contents";
import { CustomMDX } from "@/components/custom-mdx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  calculateReadingTime,
  getAllBlogSlugs,
  getBlogBySlug,
  getBlogTOCBySlug,
} from "@/lib/blog";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  User2,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
    authors: [{ name: blog.frontMatter.author }],
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
    twitter: {
      card: "summary_large_image",
      title: blog.frontMatter.title,
      description: blog.frontMatter.description,
      creator: blog.frontMatter.author,
      site: "@piyuscodes",
      images: blog.frontMatter.coverImage
        ? [blog.frontMatter.coverImage]
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
  const [blog, tocData] = await Promise.all([
    getBlogBySlug(slug),
    getBlogTOCBySlug(slug),
  ]);

  if (!blog) {
    return <div className="text-muted-foreground">Blog post not found.</div>;
  }

  const readingTime = calculateReadingTime(blog.content);

  return (
    <div className="relative w-full">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/blogs"
          className="text-muted-foreground hover:text-primary group inline-flex items-center text-sm font-medium transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Blogs
        </Link>
      </div>

      {/* Hero Section */}
      <header className="mb-10 flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-2">
          {blog.frontMatter.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="px-2.5 py-0.5">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-4xl leading-tight font-extrabold tracking-normal text-pretty lg:text-5xl">
          {blog.frontMatter.title}
        </h1>

        <div className="text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <div className="flex items-center gap-2">
            <User2 className="h-4 w-4" />
            <span className="text-foreground font-medium">
              {blog.frontMatter.author}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <time dateTime={blog.frontMatter.date}>
              {new Date(blog.frontMatter.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{readingTime} min read</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {blog.frontMatter.coverImage && (
        <div className="bg-muted mb-12 overflow-hidden rounded-xl border shadow-sm">
          <Image
            src={blog.frontMatter.coverImage}
            alt={blog.frontMatter.title}
            className="aspect-auto w-full object-cover"
            width={1280}
            height={600}
            priority
          />
        </div>
      )}

      <div className="mx-auto max-w-none">
        {/* TOC */}
        {tocData && tocData.toc.length > 0 && (
          <div className="mb-8 w-full">
            <Accordion
              type="single"
              collapsible
              className="bg-card rounded-lg border"
            >
              <AccordionItem value="toc" className="border-b-0">
                <AccordionTrigger className="px-6 py-4 text-sm font-semibold hover:no-underline">
                  Table of Contents
                </AccordionTrigger>
                <AccordionContent className="px-2 pb-2">
                  <nav aria-label="Table of contents">
                    <ul className="flex flex-col">
                      {tocData.toc
                        .filter((item) => item.level === 2 || item.level === 3)
                        .map((item) => (
                          <li key={item.id}>
                            <Link
                              href={`#${item.id}`}
                              className={cn(
                                "text-muted-foreground hover:text-foreground block rounded-md px-3 py-2 text-sm transition-colors",
                                "hover:bg-accent focus:bg-accent outline-none",
                              )}
                            >
                              {item.text}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </nav>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <div className="prose-headings:scroll-mt-20">
            <CustomMDX content={blog.content} />
          </div>
        </article>
      </div>
    </div>
  );
}
