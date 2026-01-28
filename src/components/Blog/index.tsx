import { Button } from "@/components/ui/button";
import { calculateReadingTime, getAllBlogs } from "@/lib/blog";
import { Link2Icon, LucideLink } from "lucide-react";
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
        icon={<LucideLink className="h-5 w-5" />}
        upperText="Latest Posts"
        description="Stay updated with my latest articles, tutorials, and insights on web development."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      <Button className="mt-6 w-fit text-right" asChild variant="outline">
        <Link href="/blogs">View All Blogs</Link>
      </Button>
    </div>
  );
}
