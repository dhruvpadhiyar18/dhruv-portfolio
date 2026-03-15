
"use client";

import { experienceData } from "../data";
import { motion } from "framer-motion";
import { Section, SectionTitle } from "@/components/Section";

const Experience = () => {
  return (
    <Section id="experience">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-primary-accent/30"></div>
        {experienceData.map((exp, index) => (
          <div
            key={exp.company}
            className={`flex items-center w-full mb-8 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`w-full md:w-5/12 p-6 rounded-lg glassmorphism ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              <h3 className="text-lg font-bold font-heading">{exp.title}</h3>
              <p className="text-primary-accent">{exp.company}</p>
              <p className="text-sm text-text-secondary mt-1 mb-4">{exp.date}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((res) => (
                  <li key={res} className="text-text-secondary">
                    {res}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
