export interface Skill {
  name: string;
  category: "Marketing" | "Design & Tech" | "Strategy & Analytics";
  level: number; // 0 to 100 for visual stats
  iconName: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  deliverables: string[];
}

export interface Project {
  id: string;
  category: "Web Design" | "SEO" | "Digital Marketing" | "E-commerce" | "Social Media" | "Branding";
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tools: string[];
  role: string;
  results: string[];
  link?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: "Internship" | "Freelance" | "Leadership" | "Project";
  location: string;
  description: string[];
  skillsAquired: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skillsVerified: string[];
  badgeColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  feedback: string;
  avatarSeed: string; // for consistent dicebear avatar or initials
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  timestamp: string;
  status: "new" | "reviewed" | "archived";
}
