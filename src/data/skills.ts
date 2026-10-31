export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "🖥️",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Mobile",
    icon: "📱",
    skills: ["React Native", "Expo", "SQLite", "NetInfo"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["FastAPI", "Laravel", "Python", "PHP", "Node.js"],
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    category: "AI / ML",
    icon: "🤖",
    skills: ["LangChain", "RAG", "Fine-tuning", "GGUF", "Jupyter Notebook"],
  },
  {
    category: "DevOps & Tools",
    icon: "🛠️",
    skills: ["Docker", "Git", "GitHub", "Figma", "Adobe Photoshop", "Blender"],
  },
];
