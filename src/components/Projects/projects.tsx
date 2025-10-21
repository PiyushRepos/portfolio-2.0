import NodeJs from "@/components/icons/Nodejs";
import Expressjs from "@/components/icons/Expressjs";
import MongoDB from "@/components/icons/MongoDB";
import TailwindCss from "@/components/icons/Tailwindcss";
import JWT from "@/components/icons/JWT";
import Zod from "@/components/icons/Zod";
import NextJs from "@/components/icons/Nextjs";
import Gemini from "@/components/icons/Gemini";
import TypeScript from "@/components/icons/TypeScript";
import Shadcn from "@/components/icons/Shadcn";
import Vercel from "@/components/icons/Vercel";
import JavaScript from "@/components/icons/JavaScript";
import Firebase from "@/components/icons/Firebase";
import React from "@/components/icons/Reactjs";

type technology = {
  name: string;
  icon: React.ReactNode;
};

export interface Project {
  title: string;
  imageSrc: string;
  description: string;
  liveUrl?: string;
  repoUrl?: string;
  technologies?: technology[];
  className?: string;
}

export const projects: Project[] = [
  {
    title: "HireMentis - AI Mock Interview",
    imageSrc: "/hirementis.png",
    description:
      "HireMentis is a Generative AI-powered mock interview platform designed to help job seekers practice real interview scenarios with a human-like voice agent named Reva. After each session, users receive detailed performance feedback, including question-wise analysis, improvement suggestions, and a structured scorecard, all stored in the user@apos;s profile for future practice. This allows candidates to track progress and become interview-ready with consistent practice.",
    liveUrl: "https://hirementis.site",
    repoUrl: "/#",
    technologies: [
      { name: "Next.js", icon: <NextJs /> },
      { name: "React.js", icon: <React /> },
      { name: "TypeScript", icon: <TypeScript /> },
      { name: "TailwindCSS", icon: <TailwindCss /> },
      { name: "Vercel", icon: <Vercel /> },
      { name: "Shadcn UI", icon: <Shadcn /> },
      { name: "Firebase", icon: <Firebase /> },
    ],
  },
  {
    title: "Inscribes - Blog Platform",
    imageSrc: "/inscribes.png",
    description:
      "Inscribes is a full-stack blog platform where users can write, edit, publish, and manage blogs with full authentication and protected routes. It includes a blog listing page, individual blog pages, and a user dashboard with profile updates and CRUD functionality. This was my first major MERN project, where I learned end-to-end app development, auth flows, validation, and UI/UX basics.",
    liveUrl: "https://inscribes.vercel.app",
    repoUrl: "/#",
    technologies: [
      { name: "React.js", icon: <React /> },
      { name: "JavaScript", icon: <JavaScript /> },
      { name: "Node.js", icon: <NodeJs /> },
      { name: "Express.js", icon: <Expressjs /> },
      { name: "MongoDB", icon: <MongoDB /> },
      { name: "TailwindCSS", icon: <TailwindCss /> },
      { name: "Json Web Token", icon: <JWT /> },
      { name: "Zod", icon: <Zod /> },
      { name: "Vercel", icon: <Vercel /> },
    ],
  },
  {
    title: "Baatcheet - Persona Chat App",
    imageSrc: "/baatcheet.png",
    description:
      "Baatcheet is a fun AI persona-based chat app where users can talk to their favorite mentors and creators. It simulates real personalities and their unique speaking styles, making conversations feel natural, familiar, and enjoyable. Currently, users can chat with replicas of Hitesh Choudhary and Piyush Garg, with more personas coming soon.",
    liveUrl: "https://baatcheet-ecru.vercel.app/",
    repoUrl: "/#",
    technologies: [
      { name: "Next.js", icon: <NextJs /> },
      { name: "TypeScript", icon: <TypeScript /> },
      { name: "Gemini", icon: <Gemini /> },
      { name: "TailwindCSS", icon: <TailwindCss /> },
      { name: "Shadcn UI", icon: <Shadcn /> },
      { name: "Vercel", icon: <Vercel /> },
    ],
  },
];
