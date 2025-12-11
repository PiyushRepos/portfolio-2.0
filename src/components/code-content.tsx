"use client";

import { useState } from "react";

const CodeContent = ({ content, out }: { content: string; out: string }) => {
  const [copyStatus, setCopyStatus] = useState<"COPY" | "COPIED">("COPY");

  function copyToClipboard() {
    navigator.clipboard.writeText(content).then(
      () => {
        setCopyStatus("COPIED");
        setTimeout(() => setCopyStatus("COPY"), 2000);
      },
      (err) => {
        alert("Failed to copy code: " + err);
      },
    );
  }

  return (
    <div className="group relative">
      <div
        id="code"
        className="break-after-all overflow-x-auto rounded-sm bg-[#24292e] p-6"
        dangerouslySetInnerHTML={{ __html: out }}
      />
      <button
        onClick={copyToClipboard}
        className="bg-muted-foreground/50 absolute top-2 right-2 cursor-pointer rounded px-3 py-1 text-xs font-semibold text-white opacity-0 transition duration-200 group-hover:opacity-100 hover:bg-gray-700"
      >
        {copyStatus}
      </button>
    </div>
  );
};

export default CodeContent;
