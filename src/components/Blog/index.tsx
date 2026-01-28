import { Button } from "@/components/ui/button";
import { calculateReadingTime, getAllBlogs } from "@/lib/blog";
import { ArrowRight, Link2Icon, LucideLink, NotebookText } from "lucide-react";
import Link from "next/link";
import Subheading from "../subheading";
import { BlogCard } from "./blog-card";

export default async function Blogs() {
  const blogs = await getAllBlogs();

  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-muted-foreground">
        No blog posts available at the moment. Please check back later.
      </div>
    );
  }

  return (
    <div>
      <Subheading
        text="Blogs"
        icon={<NotebookText />}
        upperText="Latest Blogs"
        description="Stay updated with my latest articles, tutorials, and insights on web development."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {blogs.slice(0, 2).map((blog) => {
          const readingTime = calculateReadingTime(blog.content);
          return (
            <BlogCard
              key={blog.frontMatter.slug}
              blog={blog}
              readingTime={readingTime}
            />
          );
        })}
      </div>
      <div className="mt-8 flex justify-end">
        <Button asChild variant="ghost" className="group text-muted-foreground hover:text-primary">
          <Link href="/blogs">
            View All Blogs
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
