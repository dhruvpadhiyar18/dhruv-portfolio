
"use client";

import { skillsData } from "../data";
import { motion } from "framer-motion";
import { Section, SectionTitle } from "@/components/Section";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const categories = [
    ...new Set(skillsData.map((skill) => skill.category)),
  ];

  return (
    <Section id="skills">
      <SectionTitle>My Skills</SectionTitle>
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-xl font-bold mb-4 text-primary-accent">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skillsData
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Badge variant="secondary" className="w-full justify-center py-2 text-base glassmorphism hover:bg-primary-accent/20 transition-colors">
                      {skill.label}
                    </Badge>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
