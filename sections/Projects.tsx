
"use client";

import { mobileAppsData, projectsData } from "../data";
import { motion } from "framer-motion";
import { Section, SectionTitle } from "@/components/Section";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Download } from "lucide-react";

const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="glassmorphism h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold font-heading">
                  {project.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="rounded-lg mb-4"
                />
                <p className="text-text-secondary mb-4">
                  {project.description}
                </p>
                <ul className="list-disc list-inside space-y-1">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-text-secondary">
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button asChild>
                  <Link href={project.github} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                {project.live && (
                  <Button variant="outline" asChild>
                    <Link href={project.live} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold font-heading mb-6">
          Mobile &amp; Software Applications
        </h3>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {mobileAppsData.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="glassmorphism h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl font-bold font-heading">
                    {app.name}
                  </CardTitle>
                  <p className="text-text-secondary">{app.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {app.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Image
                    src={app.image}
                    alt={`${app.name} Screenshot`}
                    width={800}
                    height={450}
                    className="rounded-lg mb-4"
                  />
                  <ul className="list-disc list-inside space-y-1">
                    {app.highlights.map((highlight) => (
                      <li key={highlight} className="text-text-secondary">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex gap-4">
                  {app.github && (
                    <Button asChild>
                      <Link href={app.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                  )}
                  {app.download && (
                    <Button variant="outline" asChild>
                      <Link href={app.download} target="_blank">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
