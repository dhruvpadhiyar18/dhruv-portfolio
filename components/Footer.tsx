import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        <p className="text-sm text-foreground/80">
          © {new Date().getFullYear()} Dhruv. All rights reserved.
        </p>
        <div className="mt-4 flex gap-6 md:mt-0">
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div className="mt-4 flex gap-6 md:mt-0">
          <Link href="https://github.com/example" target="_blank">
            <Github className="h-6 w-6 text-foreground/80 transition-colors hover:text-primary" />
          </Link>
          <Link href="https://linkedin.com/in/example" target="_blank">
            <Linkedin className="h-6 w-6 text-foreground/80 transition-colors hover:text-primary" />
          </Link>
          <Link href="https://twitter.com/example" target="_blank">
            <Twitter className="h-6 w-6 text-foreground/80 transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
