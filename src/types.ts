export type PageId =
  | 'home'
  | 'about'
  | 'projects'
  | 'experience'
  | 'skills'
  | 'achievements'
  | 'journey'
  | 'contact';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: 'BUILD' | 'CONCEPT' | 'EXPERIMENT';
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Conceptualized' | 'Iterating';
  year: string;
  highlights: string[];
  githubUrl?: string;
  demoUrl?: string;
  peekTags: string[];
}

export interface PersonalityTrait {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  tagline: string;
  description: string;
  type: 'community' | 'event' | 'initiative';
  storySteps?: { step: string; detail: string }[];
  bulletPoints: string[];
  badges: string[];
  peekTags: string[];
}

export type SkillLevel = 'CORE' | 'ACTIVE' | 'EXPLORING';

export interface TechnicalSkill {
  name: string;
  category: string;
  status: SkillLevel;
  usageContext: string;
  focusArea: string;
}

export interface NonTechnicalSkill {
  name: string;
  domain: string;
  description: string;
  appliedIn: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  organization: string;
  narrative: string;
  category: string;
  keyTakeaway: string;
}

export interface TimelineNode {
  id: string;
  index: string;
  title: string;
  period: string;
  stage: string;
  narrative: string;
  learnings: string[];
  peekTags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  submissionId?: string;
}
