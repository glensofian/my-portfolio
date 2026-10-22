
export interface Experience {
  id: number;
  role: string;
  company: string;
  type: "Full-time" | "Internship" | "Part-time" | "Organization" | "Freelance";
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Nama Perusahaan",
    type: "Internship",
    location: "Indonesia",
    startDate: "Jan 2026",
    endDate: "Mar 2026",
    current: false,
    description:
      "Contributed to software development projects and collaborated with the team to build application features.",
    responsibilities: [
      "Developed and maintained application features.",
      "Collaborated with team members to solve technical problems.",
      "Improved code quality and application usability.",
    ],
    technologies: ["TypeScript", "React", "Git"],
  },
];
