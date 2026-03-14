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
              I&apos;m a passionate AI Developer and Software Engineer specializing in building intelligent systems and scalable applications. With expertise in machine learning, computer vision, and full-stack development, I create solutions that solve real-world problems.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              Currently pursuing my studies while working on innovative projects, I thrive on challenges and continuously learn new technologies. My goal is to leverage AI and software engineering to build applications that not only perform exceptionally but also provide outstanding user experiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="rounded-lg bg-primary/10 px-4 py-2">
                <span className="font-semibold text-primary">3+ Years</span>
                <p className="text-sm text-foreground/80">Experience</p>
              </div>
              <div className="rounded-lg bg-primary/10 px-4 py-2">
                <span className="font-semibold text-primary">50+ Projects</span>
                <p className="text-sm text-foreground/80">Completed</p>
              </div>
              <div className="rounded-lg bg-primary/10 px-4 py-2">
                <span className="font-semibold text-primary">15+ Technologies</span>
                <p className="text-sm text-foreground/80">Mastered</p>
              </div>
            </div>
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
