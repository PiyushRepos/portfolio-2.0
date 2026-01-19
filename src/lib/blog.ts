import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

export interface FrontMatter {
  title: string;
  date: string;
  description: string;
  slug: string;
  tags: string[];
  draft: boolean;
  author: string;
  coverImage: string;
}

export interface Post {
  frontMatter: FrontMatter;
  content: string;
}

const blogsDirectory = path.join(process.cwd(), "src", "contents");

export async function readDirectory(directoryName: string): Promise<string[]> {
  try {
    const fileNames = await fs.readdir(directoryName);
    return fileNames;
  } catch (error) {
    return [];
  }
}

export async function readFile(filePath: string): Promise<string> {
  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    return fileContents;
  } catch (error) {
    return "";
  }
}

export async function getAllBlogs(): Promise<Post[]> {
  try {
    const fileNames = await readDirectory(blogsDirectory);

    const posts: Post[] = [];

    await Promise.all(
      fileNames.map(async (fileName) => {
        const filePath = path.join(blogsDirectory, fileName);

        let fileContents = await readFile(filePath);

        // Normalize line endings to Unix format
        fileContents = fileContents.replace(/\r\n/g, "\n");

        const { data, content } = matter(fileContents);

        if (data.draft !== true) {
          posts.push({ frontMatter: data as FrontMatter, content });
        } else {
          console.log(`Skipping draft blog post: ${data.title}`);
        }
      }),
    );

    posts.sort((a, b) => {
      return (
        new Date(b.frontMatter.date).getTime() -
        new Date(a.frontMatter.date).getTime()
      );
    });

    return posts;
  } catch (error) {
    return [];
  }
}

export async function getBlogTOCBySlug(slug: string): Promise<{
  toc: Array<{ text: string; id: string; level: number }>;
} | null> {
  try {
    const filePath = path.join(blogsDirectory, `${slug}.mdx`);
    let fileContents = await readFile(filePath);

    if (!fileContents) {
      return null;
    }

    fileContents = fileContents.replace(/\r\n/g, "\n");
    const { data, content } = matter(fileContents);
    if (data.draft === true) {
      console.log(`Blog post "${data.title}" is marked as draft. Skipping.`);
      return null;
    }
    const toc: Array<{ text: string; id: string; level: number }> = [];
    const lines = content.split("\n");
    const headingRegex = /^(#{1,6})\s+(.*)$/; // Matches Markdown headings
    for (const line of lines) {
      const match = line.match(headingRegex);
      if (match) {
        const level = match[1].length;
        let text = match[2].trim();
        text = text.replace(/^\d+\\\.\s*/, "");
        const id = text.toLowerCase().replace(/\s+/g, "-");
        toc.push({ text, id, level });
      }
    }

    return { toc };
  } catch (error) {
    return null;
  }
}

export async function getBlogBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(blogsDirectory, `${slug}.mdx`);
    let fileContents = await readFile(filePath);

    if (!fileContents) {
      return null;
    }

    // Normalize line endings to Unix format
    fileContents = fileContents.replace(/\r\n/g, "\n");

    const { data, content } = matter(fileContents);

    if (data.draft === true) {
      console.log(`Blog post "${data.title}" is marked as draft. Skipping.`);
      return null;
    }

    return { frontMatter: data as FrontMatter, content };
  } catch (error) {
    return null;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const fileNames = await readDirectory(blogsDirectory);

    const slugs = fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => fileName.replace(/\.mdx$/, ""));

    return slugs;
  } catch (error) {
    return [];
  }
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;

  const words = content
    .trim()
    .split(" ")
    .filter((word) => word.length > 0).length;

  return Math.ceil(words / wordsPerMinute);
}
