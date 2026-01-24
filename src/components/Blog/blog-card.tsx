import { Badge } from "@/components/ui/badge";
import { Post } from "@/lib/blog";
import Link from "next/link";

export const BlogCard = ({
  blog,
  readingTime,
}: {
  blog: Post;
  readingTime: number;
}) => {
  return (
    <article className="group relative flex flex-col space-y-3">
      <div className="space-y-2">
        <h3 className="text-foreground text-lg font-bold tracking-tight">
          <Link href={`/blogs/${blog.frontMatter.slug}`}>
            <span className="after:bg-primary relative pb-1 transition-all duration-300 ease-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 group-hover:after:w-full">
              <span>&#10132; </span>
              {blog.frontMatter.title}
            </span>
          </Link>
        </h3>
        <p className="text-muted-foreground line-clamp-3 text-base leading-relaxed">
          {blog.frontMatter.description}
        </p>
      </div>
      <div className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
        <time dateTime={blog.frontMatter.date}>
          {new Date(blog.frontMatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span>•</span>
        <span>{readingTime} min read</span>
        {blog.frontMatter.tags && blog.frontMatter.tags.length > 0 && (
          <>
            <span className="@min-lg:hidden">•</span>
            <div className="flex flex-wrap gap-2">
              {blog.frontMatter.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant={"secondary"}>
                  {tag}
                </Badge>
              ))}
            </div>
            {blog.frontMatter.tags.length > 3 && (
              <span className="text-muted-foreground">
                &#43; {blog.frontMatter.tags.length - 3} more
              </span>
            )}
          </>
        )}
      </div>
    </article>
  );
};
