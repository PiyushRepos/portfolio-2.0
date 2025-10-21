"use client";
import { FolderKanban } from "lucide-react";
import { motion, Variants } from "motion/react";
import ProjectCard from "../project-card";

interface Project {
  title: string;
  imageSrc: string;
  description: string;
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: "HireMentis - AI Mock Interview Platform",
    imageSrc: "/hirementis.png",
    description:
      "HireMentis is a Generative AI-powered mock interview platform designed to help job seekers practice real interview scenarios with a human-like voice agent named Reva.",
    liveUrl: "https://hirementis.site",
    repoUrl: "/#",
  },
  {
    title: "Baatcheet - Persona Chat App",
    imageSrc: "/baatcheet.png",
    description:
      "Baatcheet is a fun AI persona-based chat app where users can talk to their favorite mentors and creators. It simulates real personalities and their unique speaking styles, making conversations feel natural, familiar, and enjoyable.",
    liveUrl: "https://baatcheet-ecru.vercel.app/",
    repoUrl: "/#",
  },
  {
    title: "Inscribes - Blog Management App",
    imageSrc: "/inscribes.png",
    description:
      "Inscribes is a full-stack blog platform where users can write, edit, publish, and manage blogs with full authentication and protected routes. It includes a blog listing page, individual blog pages, and a user dashboard with profile updates and CRUD functionality.",
    liveUrl: "https://inscribes.vercel.app",
    repoUrl: "/#",
  },
];

const variants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay: 0.5, staggerChildren: 0.2 },
  },
};

function Projects() {
  return (
    <motion.section initial="hidden" whileInView="visible" variants={variants}>
      <div className="mb-6 transition-transform duration-300 hover:translate-x-2">
        <p className="text-muted-foreground text-left text-sm font-semibold">
          Some Things I&lsquo;ve Built
        </p>
        <h2 className="text-primary mb-2 flex items-center gap-2 text-2xl font-extrabold">
          <span>
            <FolderKanban />
          </span>
          Projects
        </h2>
      </div>
      <div className="grid items-center justify-center gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            liveUrl={project.liveUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
