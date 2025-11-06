import React from "react";
import BetterAuth from "./BetterAuth";
import BootStrap from "./Bootstrap";
import CLanguage from "./CLanguage";
import CSS from "./CSS";
import Expressjs from "./Expressjs";
import Firebase from "./Firebase";
import Gemini from "./Gemini";
import Github from "./Github";
import Html from "./Html";
import JavaScript from "./JavaScript";
import JWT from "./JWT";
import Linkedin from "./Linkedin";
import MongoDB from "./MongoDB";
import Motion from "./Motion";
import Netlify from "./Netlify";
import Nextjs from "./Nextjs";
import Nodejs from "./Nodejs";
import NPM from "./NPM";
import OpenAI from "./OpenAI";
import PlayWright from "./PlayWright";
import Reactjs from "./Reactjs";
import Shadcn from "./Shadcn";
import Tailwindcss from "./Tailwindcss";
import Twitter from "./twitter";
import TypeScript from "./TypeScript";
import Vercel from "./Vercel";
import Vite from "./Vite";
import Zod from "./Zod";

export type TechIcon = {
  name: string;
  icon?: React.ReactNode;
  classes: string;
};

export const techIcons: TechIcon[] = [
  {
    name: "React.js",
    icon: <Reactjs />,
    classes:
      "text-sm border-[#58C4DC] text-[#58C4DC] hover:border-[#58C4DC] hover:text-[#58C4DC]",
  },
  {
    name: "Next.js",
    icon: <Nextjs />,
    classes:
      "text-sm border-[#000000] dark:border-[#FFFFFF] text-[#000000] dark:text-[#FFFFFF] hover:border-[#000000] dark:hover:border-[#FFFFFF] hover:text-[#000000] dark:hover:text-[#FFFFFF]",
  },
  {
    name: "TypeScript",
    icon: <TypeScript />,
    classes:
      "text-sm border-[#007ACC] text-[#007ACC] hover:border-[#007ACC] hover:text-[#007ACC]",
  },
  {
    name: "JavaScript",
    icon: <JavaScript />,
    classes:
      "text-sm border-[#F0DB4F] text-[#F0DB4F] hover:border-[#F0DB4F] hover:text-[#F0DB4F]",
  },
  {
    name: "Node.js",
    icon: <Nodejs />,
    classes:
      "text-sm border-[#5FA04E] text-[#5FA04E] hover:border-[#5FA04E] hover:text-[#5FA04E]",
  },
  {
    name: "Express.js",
    icon: <Expressjs />,
    classes:
      "text-sm border-[#000000] dark:border-[#FFFFFF] text-[#000000] dark:text-[#FFFFFF] hover:border-[#000000] dark:hover:border-[#FFFFFF] hover:text-[#000000] dark:hover:text-[#FFFFFF]",
  },
  {
    name: "MongoDB",
    icon: <MongoDB />,
    classes:
      "text-sm border-[#439934] text-[#439934] hover:border-[#439934] hover:text-[#439934]",
  },
  {
    name: "TailwindCSS",
    icon: <Tailwindcss />,
    classes:
      "text-sm border-[#38BDF8] text-[#38BDF8] hover:border-[#38BDF8] hover:text-[#38BDF8]",
  },
  {
    name: "Firebase",
    icon: <Firebase />,
    classes:
      "text-sm border-[#FFCA28] text-[#FFCA28] hover:border-[#FFCA28] hover:text-[#FFCA28]",
  },
  {
    name: "Vercel",
    icon: <Vercel />,
    classes:
      "text-sm border-[#000000] dark:border-[#FFFFFF] text-[#000000] dark:text-[#FFFFFF] hover:border-[#000000] dark:hover:border-[#FFFFFF] hover:text-[#000000] dark:hover:text-[#FFFFFF]",
  },
  {
    name: "Netlify",
    icon: <Netlify />,
    classes:
      "text-sm border-[#00C7B7] text-[#00C7B7] hover:border-[#00C7B7] hover:text-[#00C7B7]",
  },
  {
    name: "C Language",
    classes:
      "text-sm border-[#00599C] text-[#00599C] hover:border-[#00599C] hover:text-[#00599C]",
    icon: <CLanguage />,
  },
  {
    name: "Shadcn UI",
    icon: <Shadcn />,
    classes:
      "text-sm border-[#000000] dark:border-[#FFFFFF] text-[#000000] dark:text-[#FFFFFF] hover:border-[#000000] dark:hover:border-[#FFFFFF] hover:text-[#000000] dark:hover:text-[#FFFFFF]",
  },
  {
    name: "Generative AI",
    classes:
      "text-sm border-[#FF6B6B] text-[#FF6B6B] hover:border-[#FF6B6B] hover:text-[#FF6B6B]",
  },
  {
    name: "Framer Motion",
    icon: <Motion />,
    classes:
      "text-sm border-[#BB4B96] text-[#BB4B96] hover:border-[#BB4B96] hover:text-[#BB4B96]",
  },
  {
    name: "Gemini AI",
    icon: <Gemini />,
    classes:
      "text-sm border-[#8E75FF] text-[#8E75FF] hover:border-[#8E75FF] hover:text-[#8E75FF]",
  },
  {
    name: "JWT",
    icon: <JWT />,
    classes:
      "text-sm border-[#000000] dark:border-[#FFFFFF] text-[#000000] dark:text-[#FFFFFF] hover:border-[#000000] dark:hover:border-[#FFFFFF] hover:text-[#000000] dark:hover:text-[#FFFFFF]",
  },
  {
    name: "HTML5",
    classes:
      "text-sm border-[#E34F26] text-[#E34F26] hover:border-[#E34F26] hover:text-[#E34F26]",
    icon: <Html />,
  },
  {
    name: "CSS3",
    classes:
      "text-sm border-[#1572B6] text-[#1572B6] hover:border-[#1572B6] hover:text-[#1572B6]",
    icon: <CSS />,
  },
  {
    name: "OpenAI",
    classes: "text-sm",
    icon: <OpenAI />,
  },
  {
    name: "Bootstrap",
    classes:
      "text-sm border-[#6f1aef] text-[#6f1aef] hover:border-[#6f1aef] hover:text-[#6f1aef]",
    icon: <BootStrap />,
  },
  {
    name: "Zod",
    icon: <Zod />,
    classes:
      "text-sm border-[#3E67B1] text-[#3E67B1] hover:border-[#3E67B1] hover:text-[#3E67B1]",
  },
  {
    name: "NPM",
    icon: <NPM />,
    classes:
      "text-sm border-[#C4302B] text-[#C4302B] hover:border-[#C4302B] hover:text-[#C4302B]",
  },
  {
    name: "Better Auth",
    icon: <BetterAuth />,
    classes:
      "text-sm border-[#000000] dark:border-[#FFFFFF] text-[#000000] dark:text-[#FFFFFF] hover:border-[#000000] dark:hover:border-[#FFFFFF] hover:text-[#000000] dark:hover:text-[#FFFFFF]",
  },
  {
    name: "Vite",
    icon: <Vite />,
    classes:
      "text-sm border-[#646CFF] text-[#646CFF] hover:border-[#646CFF] hover:text-[#646CFF]",
  },
  {
    name: "Playwright",
    icon: <PlayWright />,
    classes:
      "text-sm border-[#E2574C] text-[#E2574C] hover:border-[#E2574C] hover:text-[#E2574C]",
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
