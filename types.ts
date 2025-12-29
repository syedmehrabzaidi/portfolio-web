
export interface Project {
  title: string;
  description: string;
  points: string[];
  tech: string[];
  image?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
