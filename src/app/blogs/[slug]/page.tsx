import { CustomMDX } from "@/components/custom-mdx";
import { getBlogBySlug } from "@/lib/blog";
import Image from "next/image";
import React from "react";

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
          <span>{blog.frontMatter.author}</span>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {blog.frontMatter.title}
        </h1>
        <p className="text-muted-foreground text-xl">
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
