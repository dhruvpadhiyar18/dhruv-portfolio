
import { socialLinks } from "@/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto flex items-center justify-between px-4">
        <p className="text-sm text-text-secondary">
          © {new Date().getFullYear()} Dhruv Padhiyar. All rights reserved.
        </p>
        <div className="flex gap-6">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-primary-accent"
            >
              <item.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

