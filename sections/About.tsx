"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 items-center gap-12 md:grid-cols-3"
        >
          <div className="md:col-span-2">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              I'm a passionate and driven software engineer with a strong interest in artificial intelligence, machine learning, and building innovative SaaS products. My journey in technology started with a fascination for how software can solve complex problems and create value in the world.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              I thrive on challenges and am constantly learning new technologies and exploring new ideas. I'm dedicated to writing clean, efficient, and scalable code. My goal is to leverage my skills to build applications that are not only powerful but also provide a great user experience.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-64 w-64 justify-self-center md:h-80 md:w-80"
          >
            <Image
              src="/profile-placeholder.svg"
              alt="Profile Picture"
              fill
              className="rounded-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
