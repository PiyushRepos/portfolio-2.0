import { FolderKanban } from "lucide-react";
import React from "react";

type Props = {
  icon?: React.ReactNode;
  text: string;
};

function Subheading({ text, icon }: Props) {
  return (
    <h2 className="text-primary mb-2 flex items-center gap-2 text-2xl font-extrabold">
      <span>{icon ? icon : <FolderKanban />}</span>
      {text}
    </h2>
  );
}

export default Subheading;
