import BlogContainer from "@/components/blog-container";
import CodeBlock from "@/components/code-block";
import type { MDXComponents } from "mdx/types";
import { compileMDX } from "next-mdx-remote/rsc";

const components: MDXComponents = {
  wrapper: ({ children }) => <BlogContainer>{children}</BlogContainer>,
  h1: (props) => (
    <h1
      className="my-4 scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="my-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="my-4 scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-primary/85 my-2 leading-7 [&:not(:first-child)]:mt-6"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-primary hover:text-primary/85 font-medium underline underline-offset-5"
      {...props}
    />
  ),
  ul: (props) => <ul className="my-6 ml-6 list-inside list-disc" {...props} />,
  ol: (props) => (
    <ol className="my-6 ml-6 list-inside list-decimal" {...props} />
  ),
  li: (props) => <li className="text-muted-foreground mt-2" {...props} />,
  blockquote: (props) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic opacity-75" {...props} />
  ),
  code: (props) => (
    <CodeBlock lang={(props.className || "").replace("language-", "")}>
      {props.children}
    </CodeBlock>
  ),
  strong: (props) => <strong className="text-primary font-bold" {...props} />,
  table: (props) => (
    <table
      className="my-6 w-full caption-bottom border-collapse text-sm md:text-base"
      {...props}
    />
  ),
  thead: (props) => <thead className="bg-muted" {...props} />,
  tbody: (props) => <tbody {...props} />,
  tr: (props) => (
    <tr className="hover:bg-muted/50 border-b transition-colors" {...props} />
  ),
  th: (props) => (
    <th
      className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="text-muted-foreground border px-4 py-2 [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  img: (props) => <img className="my-6 rounded-md" {...props} />,
  hr: (props) => <hr className="border-muted my-8" {...props} />,
  b: (props) => <b className="font-bold" {...props} />,
  small: (props) => (
    <small className="text-muted-foreground text-sm" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
