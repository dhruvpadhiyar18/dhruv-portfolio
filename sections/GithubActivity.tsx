"use client";

import { motion } from "framer-motion";

const GithubActivity = () => {
  return (
    <section id="github-activity" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            GitHub Activity
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            A look at my contribution history.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/80">
            GitHub activity integration is coming soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubActivity;
