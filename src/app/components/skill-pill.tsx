import React from "react";

type Props = {
  text: string;
  icon?: React.ReactNode;
};

function SkillPill({ text, icon }: Props) {
  return (
    <span className="flex items-center gap-1 shadow-[inset_0_0_5px_0_var(--color-neutral-700)] w-fit px-2 py-1 bg-neutral-200 rounded-md border-dashed border-2 border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800">
      <span>{icon}</span>
      <span className="text-sm font-semibold dark:text-neutral-200">
        {text}
      </span>
    </span>
  );
}

export default SkillPill;
