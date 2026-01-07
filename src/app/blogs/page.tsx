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
        className="space-y-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {blogs.map((post) => {
          const readingTime = calculateReadingTime(post.content);

          return (
            <motion.div key={post.frontMatter.slug} variants={item}>
              <article className="group relative flex flex-col space-y-3">
                <div className="space-y-2">
                  <h3 className="text-foreground text-lg font-bold tracking-tight">
                    <Link href={`/blogs/${post.frontMatter.slug}`}>
                      <span className="after:bg-primary relative pb-1 transition-all duration-300 ease-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 group-hover:after:w-full">
                        <span>&#10132; </span>
                        {post.frontMatter.title}
                      </span>
                    </Link>
                  </h3>
                  <p className="text-muted-foreground line-clamp-3 text-base leading-relaxed">
                    {post.frontMatter.description}
                  </p>
                </div>
                <div className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                  <time dateTime={post.frontMatter.date}>
                    {new Date(post.frontMatter.date).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </time>
                  <span>•</span>
                  <span>{readingTime} min read</span>
                  {post.frontMatter.tags &&
                    post.frontMatter.tags.length > 0 && (
                      <>
                        <span className="@min-lg:hidden">•</span>
                        <div className="flex flex-wrap gap-2">
                          {post.frontMatter.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant={"secondary"}>
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        {post.frontMatter.tags.length > 3 && (
                          <span className="text-muted-foreground">
                            &#43; {post.frontMatter.tags.length - 3} more
                          </span>
                        )}
                      </>
                    )}
                </div>
              </article>
              <hr className="border-border mt-8 border-t" />
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div
        className="flex flex-col gap-8 pt-10 pb-5"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <footer className="text-muted-foreground py-6 text-center text-sm">
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
