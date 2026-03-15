
"use client";

import { educationData } from "../data";
import { motion } from "framer-motion";
import { Section, SectionTitle } from "@/components/Section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
    <Section id="education">
      <SectionTitle>Education</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="glassmorphism h-full">
              <CardHeader>
                <CardTitle className="font-heading text-xl">{edu.degree}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-accent">{edu.institution}</p>
                <p className="text-text-secondary mt-1">{edu.date}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
