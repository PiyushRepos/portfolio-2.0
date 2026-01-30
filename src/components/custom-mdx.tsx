import { MDXRemoteProps } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { codeToHtml } from "shiki";
import remarkGfm from "remark-gfm";
import CopyButton from "./copy";
import { Card } from "./ui/card";

const components: MDXRemoteProps["components"] = {
  p: (props) => <p className="leading-7 text-pretty" {...props} />,
  h1: (props) => (
    <h1
      className="scroll-m-20 text-center text-4xl font-extrabold text-balance"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className="group relative scroll-m-24 border-b pb-2 font-semibold after:absolute after:ml-2 after:opacity-0 after:transition-opacity after:duration-200 after:ease-out after:content-['#'] first:mt-0 hover:after:opacity-70"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="scroll-m-24 text-xl font-semibold text-balance" {...props} />
  ),
  img: (props) => (
    <Image
      className="my-6 rounded-md border object-cover shadow-sm"
      loading="lazy"
      width={800}
      height={450}
      {...props}
    />
  ),
  a: (props) => {
    let href = props.href;

    if (href.startsWith("/")) {
      return (
        <Link
          className="text-primary decoration-primary/30 hover:decoration-primary/60 underline underline-offset-4 transition-colors duration-200"
          href={href}
          {...props}
        >
          {props.children}
        </Link>
      );
    }

    if (href.startsWith("#")) {
      return (
        <a
          {...props}
          className="text-primary decoration-primary/30 hover:decoration-primary/60 underline underline-offset-4 transition-colors duration-200"
        />
      );
    }

    return (
      <a
        className="text-primary decoration-primary/50 hover:decoration-primary/95 underline underline-offset-4 transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    );
  },
  code: async ({ children, ...props }) => {
    if (typeof children !== "string") {
      return <code {...props}>{children}</code>;
    }

    const isInline = !props.className;

    if (isInline) {
      return (
        <code
          className="bg-muted text-foreground relative mx-1 rounded-sm border-2 px-1.5 py-0.5 font-mono text-sm font-semibold"
          {...props}
        >
          {children}
        </code>
      );
    }

    let codeHTML = await codeToHtml(String(children).trim(), {
      lang: props.className?.replace("language-", "") || "plaintext",
      theme: "github-dark",
      rootStyle:
        "background-color: transparent; padding: 1rem; margin: 0; font-size: inherit; overflow: initial; line-height: 2;",
    });
    return (
      <Card className="rounded-sm bg-[#171717] p-0">
        <code
          className="block"
          dangerouslySetInnerHTML={{ __html: codeHTML }}
          {...props}
        />
      </Card>
    );
  },
  pre: (props) => {
    const getTextFromChildren = (children: React.ReactNode): string => {
      if (typeof children === "string") {
        return children;
      } else if (Array.isArray(children)) {
        return children.map(getTextFromChildren).join("");
      } else if (typeof children === "object" && children !== null) {
        return getTextFromChildren((children as any).props.children);
      }
      return "";
    };

    return (
      <pre {...props} className="group relative overflow-hidden">
        {props.children}
        <CopyButton
          className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          textToCopy={getTextFromChildren(props.children)}
        />
      </pre>
    );
  },
  blockquote: (props) => (
    <blockquote
      className="border-primary/30 bg-muted/30 text-muted-foreground my-6 border-l-4 py-2 pr-4 pl-6 italic"
      {...props}
    />
  ),
  ul: (props) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
  table: (props) => (
    <div className="my-6 w-full overflow-x-auto rounded-lg border">
      <table className="w-full" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-muted/50" {...props} />,
  tbody: (props) => <tbody {...props} />,
  tr: (props) => (
    <tr
      className="border-border even:bg-muted/30 m-0 border-b p-0 last:border-b-0"
      {...props}
    />
  ),
  th: (props) => (
    <th
      className="border-border px-4 py-3 text-left font-semibold [[align=center]]:text-center [[align=right]]:text-right"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border-border px-4 py-3 text-left [[align=center]]:text-center [[align=right]]:text-right"
      {...props}
    />
  ),
};

export function CustomMDX(props: { content: string; components?: any }) {
  return (
    <MDXRemote
      source={props.content}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  );
}
