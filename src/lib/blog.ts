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

        const fileContents = await readFile(filePath);

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

export async function getBlogBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(blogsDirectory, `${slug}.mdx`);
    const fileContents = await readFile(filePath);

    if (!fileContents) {
      return null;
    }

    const { data, content } = matter(fileContents);

    return { frontMatter: data as FrontMatter, content };
  } catch (error) {
    return null;
  }
}
