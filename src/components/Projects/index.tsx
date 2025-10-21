"use client";
import { FolderKanban } from "lucide-react";
import { motion, Variants } from "motion/react";
import Subheading from "../subheading";
import ProjectCard from "./project-card";
import { projects } from "./projects";

const variants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay: 0.3, staggerChildren: 0.2 },
  },
};

function Projects() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-6 transition-transform duration-300 hover:translate-x-2"
      >
        <p className="text-muted-foreground text-left text-sm font-semibold">
          Some Things I&lsquo;ve Built
        </p>
        <Subheading text="Projects" icon={<FolderKanban />} />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        className="grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2"
      >
        {projects.map((project) => (
          <div key={project.title} className="overflow-hidden">
            <ProjectCard
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
              technologies={project.technologies || []}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
