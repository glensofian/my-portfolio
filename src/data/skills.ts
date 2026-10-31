export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    iconName: "ComputerDesktopIcon",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Mobile",
    iconName: "DevicePhoneMobileIcon",
    skills: ["React Native", "Expo", "SQLite", "NetInfo"],
  },
  {
    category: "Backend",
    iconName: "CogIcon",
    skills: ["FastAPI", "Laravel", "Python", "PHP", "Node.js"],
  },
  {
    category: "Database",
    iconName: "CircleStackIcon",
    skills: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    category: "AI / ML",
    iconName: "CpuChipIcon",
    skills: ["LangChain", "RAG", "Fine-tuning", "GGUF", "Jupyter Notebook"],
  },
  {
    category: "DevOps & Tools",
    iconName: "WrenchScrewdriverIcon",
    skills: ["Docker", "Git", "GitHub", "Figma", "Adobe Photoshop", "Blender"],
  },
];
