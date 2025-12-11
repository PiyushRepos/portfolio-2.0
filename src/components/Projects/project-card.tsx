import Github from "@/components/icons/Github";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project as Props } from "./projects";
import { Badge } from "../ui/badge";

function ProjectCard({
  title,
  description,
  imageSrc,
  className = "",
  liveUrl = "",
  repoUrl = "",
  technologies = [],
  tags = [],
}: Props) {
  return (
    <div className="border-muted bg-background dark:bg-secondary/40 mb-4 flex h-full cursor-pointer flex-col overflow-hidden rounded-sm border shadow">
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
      <div className="px-2 pt-4 pb-2">
        <div className="mb-2 flex items-start justify-between gap-x-4">
          <h3 className="font-sans text-lg font-bold">{title}</h3>
          <div className="mt-2 flex gap-3">
            {liveUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="text-muted-foreground size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>View Website</TooltipContent>
              </Tooltip>
            )}
            {repoUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="text-muted-foreground size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Source Code</TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
        <p className="leading-tighter text-muted-foreground mt-2 line-clamp-4 text-sm">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant={"secondary"}>
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <div>
          {technologies && technologies.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Tooltip key={tech.name}>
                  <TooltipTrigger
                    asChild
                    className="saturate-150 transition-transform duration-150 hover:scale-[1.2] hover:-rotate-6"
                  >
                    <span>{tech.icon}</span>
                  </TooltipTrigger>
                  <TooltipContent>{tech.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
