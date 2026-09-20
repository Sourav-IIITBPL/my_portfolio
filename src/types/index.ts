export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  architecture?: string[];
  github?: string;
  demo?: string;
  image?: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
};

export type Achievement = {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  description: string;
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  image: string;
  date?: string;
  url?: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};
