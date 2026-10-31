
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
      "Contribute to software development projects, specifically within the backend domain, and collaborate with other teams to build planned application features. The application in question is a management system designed for handling company and employee data.",
    responsibilities: [
      "building the application using AngularJS, Python, and Tailwind CSS.",
      "Contributed to building the API consumed by the Frontend team. The API includes a wide range of features, such as user management, user authentication, organization management, identity management, user menus, and messaging between users.",
      "Ensuring a smooth user flow, minimizing existing bugs, and maintaining the application.",
    ],
    technologies: ["Python", "AngularJS", "Tailwind Css", "Git", "Dbeaver", "Bottle.py", "ClientRest"],
  },
  {
    id: 2,
    role: "FullStack Developer Intern",
    company: "PT Telekomunikasi Indonesia (Telkom CorpU)",
    type: "Internship",
    location: "Jakarta Barat, Indonesia",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    current: false,
    description:
      "Contributed to the development of a daily dashboard website designed to monitor the health of employees, tracking four key metrics: blood pressure, oxygen levels, heart rate, and body temperature.",
    responsibilities: [
      "Contribute to building the website interface using Next.js, following the designs previously provided by the UI/UX team.",
      "Contribute to the development of APIs for the backend system using Laravel to support the requirements of the frontend interface.",
      "Ensure that all incoming data from the system can be effectively monitored via a dashboard, and reduce existing bugs.",
    ],
    technologies: ["Laravel", "NextJS", "Tailwind CSS", "Git", "MySQL", "Postman"],
  },
];
