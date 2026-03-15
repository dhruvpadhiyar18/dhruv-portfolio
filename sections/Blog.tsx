
"use client";

import { Section, SectionTitle } from "@/components/Section";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <Section id="blog">
      <SectionTitle>From My Blog</SectionTitle>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-text-secondary">
          I write about AI, automation, and software development. Stay tuned for
          future articles!
        </p>
      </motion.div>
    </Section>
  );
};

export default Blog;
