
import type { LucideIcon } from "lucide-react";

export interface SocialProps {
  label: string;
  link: string;
  icon: LucideIcon;
}

export interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
  image: string;
}

export interface MobileAppProps {
  name: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
  download: string;
  image: string;
}

export interface SkillProps {
  label: string;
  category: string;
}

export interface EducationProps {
  degree: string;
  institution: string;
  date: string;
}
