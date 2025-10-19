"use client";
import Github from "@/icons/github";
import Linkedin from "@/icons/linkedin";
import Twitter from "@/icons/twitter";
import { motion, Variants } from "motion/react";
import SociallBtn from "../social-btn";

const variants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
};

export default function Hero() {
  return (
    <section className="py-10">
      <motion.div
        viewport={{ once: true }}
        variants={variants}
        initial="hidden"
        whileInView="visible"
      >
        <div>
          <motion.h4 variants={variants} className="font-semibold text-primary">
            👋 Hey, I&apos;m
          </motion.h4>
          <motion.h1
            variants={variants}
            className="text-primary font-extrabold text-4xl py-2 md:text-5xl lg:text-6xl"
          >
            Piyush Kumar
          </motion.h1>
          {/* &amp; */}
          <motion.h2
            variants={variants}
            className="text-accent font-semibold py-1"
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
        <motion.div variants={variants} className="mt-4 space-x-4">
          <SociallBtn
            icon={<Linkedin />}
            title="Linkedin"
            href="https://www.linkedin.com/in/piyushh04/"
          />
          <SociallBtn
            icon={<Github />}
            title="Github"
            href="https://github.com/piyushRepos"
          />
          <SociallBtn
            icon={<Twitter />}
            title="Twitter/X"
            href="https://x.com/_PiyushDev"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
