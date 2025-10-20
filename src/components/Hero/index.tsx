"use client";
import Github from "@/icons/github";
import Linkedin from "@/icons/linkedin";
import Twitter from "@/icons/twitter";
import { motion, Variants } from "motion/react";
import SociallBtn from "@/components/social-btn";
import ThemeToggleer from "../theme-toggle";

const variants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, staggerChildren: 0.15 },
  },
};

const socialLinks = [
  {
    icon: <Linkedin />,
    title: "Linkedin",
    href: "https://www.linkedin.com/in/piyushh04/",
  },
  {
    icon: <Github />,
    title: "Github",
    href: "https://github.com/piyushRepos",
  },
  {
    icon: <Twitter />,
    title: "Twitter/X",
    href: "https://x.com/_PiyushDev",
  },
];

export default function Hero() {
  return (
    <section className="pt-10">
      <motion.div
        viewport={{ once: true }}
        variants={variants}
        initial="hidden"
        whileInView="visible"
      >
        <div>
          <div className="flex justify-between items-center w-full">
            <motion.h4
              variants={variants}
              className="font-semibold text-primary"
            >
              👋 Hi there, I&apos;m
            </motion.h4>
            <ThemeToggleer />
          </div>
          <motion.h1
            variants={variants}
            className="text-primary font-extrabold text-4xl py-2 md:text-5xl lg:text-6xl relative"
          >
            Piyush Kumar
          </motion.h1>
          <motion.h2
            variants={variants}
            className="text-muted-foreground font-semibold py-1"
          >
            Full-Stack Developer (MERN, Next.js), GenAI Engineer
          </motion.h2>
        </div>
        <motion.p variants={variants} className="text-primary py-2 max-w-2xl">
          I&apos;m a <strong>final-year BCA student</strong> and{" "}
          <strong>Full-Stack Developer</strong> who loves building clean,
          scalable web apps using <strong>MERN</strong> &{" "}
          <strong>Next.js</strong>. I&apos;ve{" "}
          <strong>delivered 3 freelancing projects</strong> and I enjoy turning
          ideas into real, working products. Currently, I&apos;m exploring{" "}
          <strong>Generative AI</strong> to build smarter web experiences.
        </motion.p>
        <motion.div variants={variants} className="mt-4 space-x-5">
          {socialLinks.map(({ title, icon, href }) => (
            <SociallBtn key={title} icon={icon} title={title} href={href} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
