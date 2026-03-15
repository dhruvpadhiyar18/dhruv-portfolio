
"use client";

import { FormEvent, useState } from "react";
import { contactData } from "../data";
import { Section, SectionTitle } from "@/components/Section";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in name, email, and message before sending.");
      return;
    }

    const subject = form.subject.trim()
      ? form.subject.trim()
      : `Portfolio Inquiry from ${form.name.trim()}`;

    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      "",
      "Message:",
      form.message.trim(),
    ].join("\n");

    const mailto = `mailto:${contactData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setError("");
  };

  return (
    <Section id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-6 md:p-8 glassmorphism">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, name: event.target.value }))
                }
                className="bg-surface/50 border-white/20"
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, email: event.target.value }))
                }
                className="bg-surface/50 border-white/20"
                required
              />
              <Input
                type="text"
                placeholder="Subject (optional)"
                value={form.subject}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, subject: event.target.value }))
                }
                className="bg-surface/50 border-white/20"
              />
              <Textarea
                placeholder="Message"
                value={form.message}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, message: event.target.value }))
                }
                className="bg-surface/50 border-white/20"
                required
              />
              {error && <p className="text-sm text-red-400">{error}</p>}
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-text-secondary">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of an ambitious vision. Feel free to reach
            out.
          </p>
          <div>
            <h4 className="font-bold text-lg">Email</h4>
            <a
              href={`mailto:${contactData.email}`}
              className="text-primary-accent hover:underline"
            >
              {contactData.email}
            </a>
          </div>
          <div>
            <h4 className="font-bold text-lg">Socials</h4>
            <div className="flex gap-4 mt-2">
              {contactData.social.map((item) => (
                <Link
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-text-secondary hover:text-primary-accent transition-colors"
                >
                  <item.icon className="h-8 w-8" />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
