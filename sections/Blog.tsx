"use client";

import { motion } from "framer-motion";
import { BLOGS } from "@/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

const Blog = () => {
  return (
    <section id="blog" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            My Blog
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Thoughts on AI, development, and technology
          </p>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOGS.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <Calendar className="h-4 w-4" />
                    {blog.date}
                    <Clock className="ml-2 h-4 w-4" />
                    {blog.readTime}
                  </div>
                  <CardTitle className="mt-2 line-clamp-2">{blog.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground/80 line-clamp-3">{blog.description}</p>
                  <div className="mt-4">
                    <Badge variant="secondary">AI</Badge>
                    <Badge variant="secondary" className="ml-2">Development</Badge>
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                  <Link
                    href={blog.link}
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
