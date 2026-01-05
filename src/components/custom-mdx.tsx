import { MDXRemoteProps } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { codeToHtml } from "shiki";
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
      className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-all duration-200 after:absolute after:ml-2 after:opacity-0 after:content-['#'] first:mt-0 hover:after:opacity-70"
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
          className="bg-muted rounded px-1.5 py-1 font-mono font-semibold"
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
        "background-color: var(--color-zinc-900); padding: 1.25rem; margin: 0; font-size: inherit; overflow: initial; line-height: inherit;",
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
};

export function CustomMDX(props: { content: string; components?: any }) {
  return (
    <MDXRemote
      source={props.content}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
