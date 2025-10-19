import Linkedin from "@/icons/linkedin";
import Link from "next/link";
import React from "react";

function SociallBtn({
  icon,
  title = "",
  href = "#",
}: {
  icon?: React.ReactNode;
  title?: string;
  href?: string;
}) {
  return (
    <Link target="_blank" href={href}>
      <button
        aria-label={title}
        title={title}
        className="relative shadow-[4px_4px_0_0_var(--color-neutral-300)] hover:shadow-[3px_3px_0_0_var(--color-neutral-300)] active:shadow-[0px_0px_0_0_var(--color-neutral-300)] bg-neutral-200 max-w-fit cursor-pointer p-2 rounded-lg dark:bg-neutral-800 dark:shadow-[4px_4px_0_0_var(--color-neutral-700)] dark:hover:shadow-[3px_3px_0_0_var(--color-neutral-700)] dark:active:shadow-[0px_0px_0_0_var(--color-neutral-700)] transition-shadow duration-150"
      >
        <span className="text-neutral-500 hover:text-primary font-semibold transition-colors duration-200">
          {icon ? icon : <Linkedin />}
        </span>
      </button>
    </Link>
  );
}

export default SociallBtn;
