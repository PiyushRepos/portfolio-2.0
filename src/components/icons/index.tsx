import React from "react";
import Expressjs from "./Expressjs";
import Firebase from "./Firebase";
import Gemini from "./Gemini";
import Github from "./Github";
import JavaScript from "./JavaScript";
import JWT from "./JWT";
import Linkedin from "./Linkedin";
import MongoDB from "./MongoDB";
import Motion from "./Motion";
import Netlify from "./Netlify";
import Nextjs from "./Nextjs";
import Nodejs from "./Nodejs";
import Reactjs from "./Reactjs";
import Shadcn from "./Shadcn";
import Tailwindcss from "./Tailwindcss";
import Twitter from "./twitter";
import TypeScript from "./TypeScript";
import Vercel from "./Vercel";
import Zod from "./Zod";

export type TechIcon = {
  name: string;
  icon: React.ReactNode;
  classes: string;
};

export const techIcons: TechIcon[] = [
  {
    name: "React.js",
    icon: <Reactjs />,
    classes:
      "border-[#58C4DC] text-[#58C4DC] hover:border-[#58C4DC] hover:text-[#58C4DC]",
  },
  {
    name: "Next.js",
    icon: <Nextjs />,
    classes:
      "border-[#000000] dark:border-[#FFFFFF] text-[#000000] dark:text-[#FFFFFF] hover:border-[#000000] dark:hover:border-[#FFFFFF] hover:text-[#000000] dark:hover:text-[#FFFFFF]",
  },
  {
    name: "TypeScript",
    icon: <TypeScript />,
    classes:
      "border-[#007ACC] text-[#007ACC] hover:border-[#007ACC] hover:text-[#007ACC]",
  },
  {
    name: "JavaScript",
    icon: <JavaScript />,
    classes:
      "border-[#F0DB4F] text-[#F0DB4F] hover:border-[#F0DB4F] hover:text-[#F0DB4F]",
  },
  {
    name: "Node.js",
    icon: <Nodejs />,
    classes:
      "border-[#5FA04E] text-[#5FA04E] hover:border-[#5FA04E] hover:text-[#5FA04E]",
  },
  {
    name: "Express.js",
    icon: <Expressjs />,
    classes:
      "border-[#000000] dark:border-[#FFFFFF] text-[#000000] dark:text-[#FFFFFF] hover:border-[#000000] dark:hover:border-[#FFFFFF] hover:text-[#000000] dark:hover:text-[#FFFFFF]",
  },
  {
    name: "MongoDB",
    icon: <MongoDB />,
    classes:
      "border-[#439934] text-[#439934] hover:border-[#439934] hover:text-[#439934]",
  },
  {
    name: "TailwindCSS",
    icon: <Tailwindcss />,
    classes:
      "border-[#38BDF8] text-[#38BDF8] hover:border-[#38BDF8] hover:text-[#38BDF8]",
  },
  {
    name: "Firebase",
    icon: <Firebase />,
    classes:
      "border-[#FFCA28] text-[#FFCA28] hover:border-[#FFCA28] hover:text-[#FFCA28]",
  },
  {
    name: "Vercel",
    icon: <Vercel />,
    classes:
      "border-[#000000] dark:border-[#FFFFFF] text-[#000000] dark:text-[#FFFFFF] hover:border-[#000000] dark:hover:border-[#FFFFFF] hover:text-[#000000] dark:hover:text-[#FFFFFF]",
  },
  {
    name: "Netlify",
    icon: <Netlify />,
    classes:
      "border-[#00C7B7] text-[#00C7B7] hover:border-[#00C7B7] hover:text-[#00C7B7]",
  },
  {
    name: "Shadcn UI",
    icon: <Shadcn />,
    classes:
      "border-[#000000] dark:border-[#FFFFFF] text-[#000000] dark:text-[#FFFFFF] hover:border-[#000000] dark:hover:border-[#FFFFFF] hover:text-[#000000] dark:hover:text-[#FFFFFF]",
  },
  {
    name: "Framer Motion",
    icon: <Motion />,
    classes:
      "border-[#BB4B96] text-[#BB4B96] hover:border-[#BB4B96] hover:text-[#BB4B96]",
  },
  {
    name: "Gemini AI",
    icon: <Gemini />,
    classes:
      "border-[#8E75FF] text-[#8E75FF] hover:border-[#8E75FF] hover:text-[#8E75FF]",
  },
  {
    name: "JWT",
    icon: <JWT />,
    classes:
      "border-[#000000] dark:border-[#FFFFFF] text-[#000000] dark:text-[#FFFFFF] hover:border-[#000000] dark:hover:border-[#FFFFFF] hover:text-[#000000] dark:hover:text-[#FFFFFF]",
  },
  {
    name: "Zod",
    icon: <Zod />,
    classes:
      "border-[#3E67B1] text-[#3E67B1] hover:border-[#3E67B1] hover:text-[#3E67B1]",
  },
];

export {
  Expressjs,
  Firebase,
  Gemini,
  Github,
  JavaScript,
  JWT,
  Linkedin,
  MongoDB,
  Motion,
  Netlify,
  Nextjs,
  Nodejs,
  Reactjs,
  Shadcn,
  Tailwindcss,
  Twitter,
  TypeScript,
  Vercel,
  Zod,
};
