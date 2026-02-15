"use client";
import SociallBtn from "@/components/social-btn";
import { FileText, Mail } from "lucide-react";
import { motion, Variants } from "motion/react";
import { Button } from "../ui/button";
import { socialLinks } from "./links";
import Link from "next/link";

const variants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, staggerChildren: 0.15 },
  },
};

const texts = [
  "✨ Learning. Building. Shipping.",
  "📌 Open to Internships & SDE Roles.",
];

export default function Hero() {
  return (
    <section className="pt-20">
      <motion.div
        viewport={{ once: true }}
        variants={variants}
        initial="hidden"
        whileInView="visible"
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <motion.h4
              variants={variants}
              className="text-primary font-semibold"
            >
              👋 Hi there, I&apos;m
            </motion.h4>
          </div>
          <motion.h1
            variants={variants}
            className="text-primary py-2 text-4xl font-extrabold md:text-5xl lg:text-6xl"
          >
            Piyush Kumar
          </motion.h1>
          <motion.h2
            variants={variants}
            className="text-muted-foreground py-1 font-semibold"
          >
            Full-Stack Developer (MERN, Next.js), GenAI Engineer
          </motion.h2>
        </div>
        <motion.p
          variants={variants}
          className="font- max-w-2xl py-2 leading-relaxed text-pretty text-neutral-600 dark:text-neutral-300"
        >
          I&apos;m a <strong>final-year BCA student</strong> and{" "}
          <strong>Full-Stack Developer</strong> who loves building clean,
          scalable web apps using <strong>MERN</strong> &{" "}
          <strong>Next.js</strong>. I&apos;ve{" "}
          <strong>delivered 3 freelancing projects</strong> and I enjoy turning
          ideas into real, working products. Currently, I&apos;m exploring{" "}
          <strong>Generative AI</strong> to build smarter web experiences.
        </motion.p>
        <motion.div variants={variants} className="mt-3 space-x-5">
          {socialLinks.map(({ name, icon, href }) => (
            <SociallBtn key={name} icon={icon} name={name} href={href} />
          ))}
        </motion.div>

        <motion.div
          variants={variants}
          className="mt-8 flex items-center space-x-5"
        >
          <Link href="mailto:piyush2004.dev@gmail.com">
            <Button
              variant="default"
              className="cursor-pointer shadow-md transition-transform hover:scale-105"
            >
              <span>
                <Mail />
              </span>
              Email Me
            </Button>
          </Link>
          <Link href="/Piyush_Kumar_Resume.pdf" target="_blank">
            <Button
              variant="outline"
              className="cursor-pointer shadow-md transition-transform hover:scale-105 hover:rotate-1"
            >
              <span>
                <FileText className="size-4 rotate-6" />
              </span>
              Download Resume
            </Button>
          </Link>
        </motion.div>

        <div className="text-muted-foreground my-4 text-sm leading-relaxed font-semibold">
          <p>
            {texts[0].split("").map((char, index) => {
              if (char === " ") {
                return <span key={index}>&nbsp;</span>;
              }
              return (
                <motion.span
                  initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.03,
                  }}
                  viewport={{ once: true }}
                  key={index}
                >
                  {char}
                </motion.span>
              );
            })}
          </p>
          <p>
            {texts[1].split("").map((char, index) => {
              if (char === " ") {
                return <span key={index}>&nbsp;</span>;
              }
              return (
                <motion.span
                  initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.03,
                  }}
                  viewport={{ once: true }}
                  key={index}
                >
                  {char}
                </motion.span>
              );
            })}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
