"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          className="font-heading text-4xl font-bold md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm Dhruv
        </motion.h1>
        <motion.p
          className="mt-2 font-heading text-lg text-primary md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          AI Developer & Software Engineer
        </motion.p>
        <motion.p
          className="mt-4 max-w-2xl text-base text-foreground/80 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I build intelligent systems, AI-powered applications, and scalable
          SaaS products that solve real-world problems.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild size="lg">
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/resume.pdf" target="_blank">
              Download Resume
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </motion.div>
        <motion.div
          className="mt-8 flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="https://github.com/example" target="_blank">
            <Github className="h-6 w-6 text-foreground/80 transition-colors hover:text-primary" />
          </Link>
          <Link href="https://linkedin.com/in/example" target="_blank">
            <Linkedin className="h-6 w-6 text-foreground/80 transition-colors hover:text-primary" />
          </Link>
          <Link href="https://twitter.com/example" target="_blank">
            <Twitter className="h-6 w-6 text-foreground/80 transition-colors hover:text-primary" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
