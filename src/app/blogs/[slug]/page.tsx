import { CustomMDX } from "@/components/custom-mdx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  calculateReadingTime,
  getAllBlogSlugs,
  getBlogBySlug,
  getBlogTOCBySlug,
} from "@/lib/blog";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
  const [blog, tocData] = await Promise.all([
    getBlogBySlug(slug),
    getBlogTOCBySlug(slug),
  ]);

  if (!blog) {
    return <div className="text-muted-foreground">Blog post not found.</div>;
  }

  const readingTime = calculateReadingTime(blog.content);

  return (
    <div className="w-full">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/blogs" className="group">
            <ArrowLeft className="transition-transform duration-200 group-hover:-translate-x-1" />
            Back to Blogs
          </Link>
        </Button>
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
      <div className="mb-8">
        <div className="text-muted-foreground mb-4 flex items-center justify-start gap-2 text-sm">
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
        <h1 className="mb-4 text-4xl font-extrabold text-balance lg:text-5xl">
          {blog.frontMatter.title}
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl">
          {blog.frontMatter.description}
        </p>
        <div className="mt-4 flex flex-wrap justify-start gap-2">
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

      {tocData && tocData.toc.length > 0 && (
        <div className="mb-8 w-full">
          <Accordion type="single" collapsible className="bg-card rounded-lg border">
            <AccordionItem value="toc" className="border-b-0">
              <AccordionTrigger className="px-6 py-4 text-base font-semibold hover:no-underline">
                Table of Contents
              </AccordionTrigger>
              <AccordionContent className="px-2 pb-2">
                <nav aria-label="Table of contents">
                  <ul className="flex flex-col">
                    {tocData.toc
                      .filter((item) => item.level === 2)
                      .map((item) => (
                        <li key={item.id}>
                          <Link
                            href={`#${item.id}`}
                            className={cn(
                              "text-muted-foreground hover:text-foreground",
                              "group flex items-start gap-2 rounded-md px-3 py-2",
                              "transition-colors duration-200",
                              "hover:bg-accent focus-visible:bg-accent",
                              "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
                            )}
                          >
                            <ArrowRight
                              className="mt-0.5 size-4 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                              aria-hidden="true"
                            />
                            <span className="text-sm leading-relaxed">
                              {item.text}
                            </span>
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

      <article className="prose prose-neutral dark:prose-invert w-full max-w-none">
        <CustomMDX content={blog.content} />
      </article>
    </div>
  );
}
