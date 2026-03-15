
"use client";

import { aboutData } from "../data";
import { motion } from "framer-motion";
import Image from "next/image";
import { Section, SectionTitle } from "@/components/Section";

const About = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-sm mx-auto aspect-square overflow-hidden rounded-full ring-2 ring-primary-accent/30"
        >
          <Image
            src={aboutData.image}
            alt="Dhruv Padhiyar"
            fill
            sizes="(max-width: 768px) 80vw, 400px"
            className="object-cover object-[center_18%]"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-text-secondary leading-relaxed">
            {aboutData.description}
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
