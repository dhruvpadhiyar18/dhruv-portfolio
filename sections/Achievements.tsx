"use client";

import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Achievements
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            A few of my accomplishments.
          </p>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
