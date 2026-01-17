import { MDXRemoteProps } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { codeToHtml } from "shiki";
import remarkGfm from "remark-gfm";
import CopyButton from "./copy";

const components: MDXRemoteProps["components"] = {
  h1: (props) => (
    <h1
      className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="scroll-m-20 border-b pb-2 font-semibold tracking-tight transition-all duration-200 after:absolute after:ml-2 after:opacity-0 after:content-['#'] first:mt-0 hover:after:opacity-70"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="scroll-m-20 text-2xl font-semibold" {...props} />
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
          className="hover:text-primary/80 underline transition-colors"
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
          className="hover:text-primary/80 underline transition-colors after:content-['#']"
        />
      );
    }

    return (
      <a
        className="hover:text-primary/70 underline transition-colors"
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
          className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
          {...props}
        >
          {children}
        </code>
      );
    }

    let codeHTML = await codeToHtml(String(children), {
      lang: props.className?.replace("language-", "") || "text",
      theme: "github-dark",
      rootStyle:
        "background-color: var(--color-zinc-800); padding: 1rem; margin: 0; font-size: inherit; overflow: initial; line-height: inherit;",
    });
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
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
      <pre {...props} className="relative overflow-hidden">
        {props.children}
        <CopyButton textToCopy={getTextFromChildren(props.children)} />
      </pre>
    );
  },
  blockquote: (props) => (
    <blockquote className="my-6 border-l-2 pl-6 italic" {...props} />
  ),
  ul: (props) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
  table: (props) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full" {...props} />
    </div>
  ),
  thead: (props) => <thead {...props} />,
  tbody: (props) => <tbody {...props} />,
  tr: (props) => <tr className="even:bg-muted m-0 border-t p-0" {...props} />,
  th: (props) => (
    <th
      className="border px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right"
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
