
"use client";

import { Section, SectionTitle } from "@/components/Section";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

const GithubActivity = () => {
  return (
    <Section id="github-activity">
      <SectionTitle>GitHub Activity</SectionTitle>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-6 rounded-lg glassmorphism"
      >
        <GitHubCalendar
          username="dhruvpadhiyar18"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          theme={{
            light: ["#111827", "#22C55E40", "#22C55E80", "#22C55EBF", "#22C55E"],
            dark: ["#111827", "#22C55E40", "#22C55E80", "#22C55EBF", "#22C55E"],
          }}
        />
      </motion.div>
    </Section>
  );
};

export default GithubActivity;
