
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
    company: "PT Asix Indonesia Cerdas",
    type: "Internship",
    location: "Jakarta Pusat, Indonesia",
    startDate: "Aug 2025",
    endDate: "Jan 2026",
    current: false,
    description:
      "Contributed to software development projects and collaborated with the team to build application features.",
    responsibilities: [
      "Developed and maintained application features.",
      "Collaborated with team members to solve technical problems.",
      "Improved code quality and application usability.",
    ],
    technologies: ["Python", "AngularJS", "Tailwind Css", "Git", "Dbeaver", "Bottle.py", "ClientRest"],
  },
];
