export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'ai' | 'fullstack' | 'web';
  technologies: string[];
  description: string;
  keyFeatures?: string[];
  supportedBranches?: string[];
  githubUrl: string;
  featured?: boolean;
  accentColor: string;
  iconName: string;
}

export interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  university?: string;
  score: string;
  scoreType: 'CGPA' | 'Percentage';
  year: string;
  status: 'Pursuing' | 'Completed';
  location: string;
  details?: string[];
}

export interface InternshipItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  focusAreas: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  skills: {
    name: string;
    levelDescription: string;
    highlight?: boolean;
    icon?: string;
  }[];
}

export interface AchievementItem {
  rank: string;
  competition: string;
  event: string;
  venue: string;
  date: string;
  academicYear: string;
  details: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  skillsCovered: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
