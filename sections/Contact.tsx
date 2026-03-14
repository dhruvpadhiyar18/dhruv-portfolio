"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
          </p>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Message" className="min-h-[150px]" />
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4"
          >
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <a href="mailto:dhruvpadhiyar18@gmail.com" className="text-lg hover:text-primary transition-colors">
                dhruvpadhiyar18@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Github className="h-6 w-6 text-primary" />
              <Link href="https://github.com/dhruvpadhiyar18" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">
                github.com/dhruvpadhiyar18
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin className="h-6 w-6 text-primary" />
              <Link href="https://linkedin.com/in/dhruv-padhiyar" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">
                linkedin.com/in/dhruv-padhiyar
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
