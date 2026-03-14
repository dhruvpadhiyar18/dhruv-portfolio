"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/data";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            My Skills
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            A look at the technologies I work with.
          </p>
        </motion.div>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2"
            >
              <div className="relative h-20 w-20">
                <Image
                  src={skill.icon}
                  alt={skill.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="text-center font-medium">{skill.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
