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
  link: string | Record<string, string>;
  github?: string;
  type: string;
  period: string;
  location?: string;
  description: string[];
  technologies: string[];
};

export type Achievement = {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  description: string;
  link?: string;
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

export type Education = {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  grade: string;
  status: string;
};
