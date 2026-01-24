"use client";
import { VenetianMask } from "lucide-react";
import Subheading from "../subheading";
import { motion } from "motion/react";

function About() {
  return (
    <section id="about" className="scroll-mt-20 md:scroll-mt-10">
      <Subheading
        text="About Me"
        upperText="The Human Behind the Code"
        icon={<VenetianMask />}
      />
      <div className="mt-6 space-y-4 text-base text-neutral-600 dark:text-neutral-300">
        <motion.p
          initial={{ opacity: 0, x: -10, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
        >
          I&lsquo;m a <strong> MERN & Next.js developer</strong>, building
          clean, fast, and user-centric web apps. My journey started during my
          BCA, and ever since then, I have been consistently learning, building,
          and shipping projects.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -10, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I explored <strong>Generative AI</strong> through the Hitesh Choudhary
          & Piyush Garg <strong>GenAI cohort</strong>, where I built projects
          like <strong>AI mock interviews</strong>,{" "}
          <strong>persona-based chat systems</strong>, <strong>RAG apps</strong>
          , <strong>chat-with-PDF</strong>, <strong>terminal cursor</strong>,
          and <strong>browser agents</strong>. Working at the intersection of
          Web + AI has helped me think more about solving real problems, not
          just writing code.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -10, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Currently, I focused on backend architecture, building
          production-grade AI-powered experiences, and DSA learning. I&lsquo;m a
          curious learner, never to give up, actually—seeking a team where I can
          contribute and grow as a full-stack developer.
        </motion.p>
      </div>
    </section>
  );
}

export default About;
