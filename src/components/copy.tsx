"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      aria-label="Copy to clipboard"
      size={"icon"}
      variant={"link"}
      // light and dark mode support
      className="absolute top-2 right-2 rounded-md bg-zinc-800/30 p-1 text-zinc-200 hover:bg-zinc-800/50"
    >
      {copied ? (
        <Check className="size-3.5 text-green-500" />
      ) : (
        <Copy className="size-3.5" />
      )}
    </Button>
  );
};

export default CopyButton;
