import { BlogCard } from "@/components/Blog/blog-card";
import { socialLinks } from "@/components/Hero/links";
import Subheading from "@/components/subheading";
import { Badge } from "@/components/ui/badge";
import { getAllBlogs, calculateReadingTime } from "@/lib/blog";
import { NotebookText } from "lucide-react";
import { Variants } from "motion";
import * as motion from "motion/react-client";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Posts - Piyush Kumar",
  description:
    "Insights, tutorials, and stories from my journey as a full-stack developer.",
  keywords: [
    "blog",
    "full-stack development",
    "programming",
    "web development",
    "tutorials",
    "coding",
    "software engineering",
    "javascript",
    "react",
    "next.js",
    "typescript",
    "developer insights",
  ],
  authors: { name: "Piyush Kumar" },
  creator: "Piyush Kumar",
  referrer: "origin",
  metadataBase: new URL("https://piyus.me"),
};

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-muted-foreground">
        No blog posts available at the moment. Please check back later.
      </div>
    );
  }

  console.log(blogs);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delay: 0.35,
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <div className="mb-4 flex flex-col gap-2">
        <Subheading
          icon={<NotebookText />}
          text="Blog Posts"
          upperText="My Thoughts"
          description="Insights, tutorials, and stories from my journey as a full-stack developer."
        />
      </div>

      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {blogs.map((blog) => {
          const readingTime = calculateReadingTime(blog.content);

          return (
            <motion.div
              key={blog.frontMatter.slug}
              variants={item}
              className="h-full"
            >
              <BlogCard blog={blog} readingTime={readingTime} />
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div
        className="flex flex-col gap-8 pt-8"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <footer className="text-muted-foreground py-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Piyush Kumar. All rights reserved.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </Link>
            ))}
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
