
"use client";
import { motion } from "framer-motion";

export const Section = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <section id={id} className="py-24">
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
};

export const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-3xl md:text-4xl font-heading font-bold text-center mb-12"
    >
      {children}
    </motion.h2>
  );
};
