"use client";
import { FolderKanban } from "lucide-react";
import { motion } from "motion/react";
import Subheading from "../subheading";
import ProjectCard from "./project-card";
import { projects } from "./projects";

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <Subheading
        text="Projects"
        upperText="Things I&lsquo;ve Built"
        icon={<FolderKanban />}
      />
      <div className="grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.35, delay: 0.2 * index }}
            key={project.title}
            className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
              technologies={project.technologies || []}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
