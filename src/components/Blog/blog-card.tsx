import { Badge } from "@/components/ui/badge";
import { Post } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({
  blog,
  readingTime,
}: {
  blog: Post;
  readingTime: number;
}) => {
  return (
    <Link
      href={`/blogs/${blog.frontMatter.slug}`}
      className="group block h-full"
    >
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-md border border-zinc-100 dark:border-zinc-800 bg-card text-card-foreground",
          "transition-all duration-200 ease-out",
          "hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
        )}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
          {blog.frontMatter.coverImage && (
            <Image
              src={blog.frontMatter.coverImage}
              alt={blog.frontMatter.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {blog.frontMatter.tags &&
              blog.frontMatter.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors group-hover:bg-secondary/80"
                >
                  {tag}
                </Badge>
              ))}
          </div>
          <h3 className="mb-3 text-xl font-bold leading-tight tracking-tight text-balance group-hover:text-primary transition-colors duration-200">
            {blog.frontMatter.title}
          </h3>
          <p className="mb-6 flex-1 text-sm text-muted-foreground text-pretty line-clamp-2">
            {blog.frontMatter.description}
          </p>
          <div className="mt-auto flex items-center justify-between border-t pt-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 tabular-nums">
                <CalendarDays className="h-3.5 w-3.5" />
                <time dateTime={blog.frontMatter.date}>
                  {new Date(blog.frontMatter.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1.5 tabular-nums">
                <Clock className="h-3.5 w-3.5" />
                <span>{readingTime} min</span>
              </div>
            </div>
            <div className="flex items-center text-primary opacity-0 -translate-x-2 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0">
              <span className="mr-1 font-semibold">Read</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
