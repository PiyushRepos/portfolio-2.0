import { codeToHtml, type BundledLanguage } from "shiki";
import CodeContent from "./code-content";

interface Props {
  children: string;
  lang: BundledLanguage;
}

async function CodeBlock(props: Props) {
  console.log("Rendering code block with lang:", {
    lang: props.lang,
    content: props.children,
  });
  const out = await codeToHtml(props.children, {
    lang: props.lang,
    theme: "github-dark",
  });

  return <CodeContent content={props.children} out={out} />;
}

export default CodeBlock;
