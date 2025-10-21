import Github from "@/icons/github";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  imageSrc: string;
  liveUrl?: string;
  repoUrl?: string;
  className?: string;
};

function ProjectCard({
  title,
  description,
  imageSrc,
  className = "",
  liveUrl = "",
  repoUrl = "",
}: Props) {
  return (
    <div className="border-muted bg-background relative mb-4 flex cursor-pointer flex-col overflow-hidden rounded-lg border transition-transform duration-300 hover:scale-[1.02]">
      <div className="object-cover">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={400}
          className={cn("h-full w-full", className)}
          priority
        />
      </div>
      <div className="px-2 py-4">
        <div className="mb-2 flex items-start justify-between gap-x-4">
          <h3 className="font-sans text-lg font-bold">{title}</h3>
          <div className="mt-2 flex gap-2">
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Globe className="text-muted-foreground size-4" />
            </Link>
            <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="text-muted-foreground size-4" />
            </Link>
          </div>
        </div>
        <p className="leading-tighter text-muted-foreground mt-2 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
