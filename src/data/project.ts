export interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  github: string;
  prototype: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "ToFa AI",
    description:
      "AI-based agricultural assistant website for local farmers in the Lake Toba region.",
    category: "AI / Web Developer",
    technologies: [
      "React",
      "JavaScript",
      "Python",
      "FastAPI",
      "LangChain",
      "PostgreSQL",
      "RAG",
      "Fine-tuning",
      "Docker",
    ],
    image: "/images/tofaAI-web.png",
    github: "https://github.com/william-napitupulu/ToFa_Deployment.git",
    prototype: "https://bit.ly/DesainFigmaTOFA-AI",
    demo: "",
  },
  {
    id: 2,
    name: "ToFa AI - Mobile",
    description:
      "AI-based agricultural assistant Mobile App for local farmers in the Lake Toba region.",
    category: "AI / Mobile Developer",
    technologies: [
      "ReactNative",
      "NetInfo",
      "SQLite",
      "Expo",
      "RAG",
      "Fine-tuning",
      "gguf",
      "Docker",
    ],
    image: "/images/tofaAI-mobile.png",
    github: "https://github.com/glensofian/TobaFarm-Mobile.git",
    prototype: "https://bit.ly/DesainFigmaTOFA-AI-Mobile",
    demo: "",
  },
  {
    id: 3,
    name: "Career Alumni Information System",
    description:
      "Managing the work of all UI/UX team members to create mockup designs for websites and mobile designs using figma.",
    category: "UI/UX Designer, UI/UX Team Lead",
    technologies: ["Figma", "Adobe Photoshop"],
    image: "/images/Cais.png",
    github: "-",
    prototype: "https://bit.ly/Prototype-CAIS",
    demo: "",
  },
  {
    id: 4,
    name: "Parent-Student Information System",
    description:
      "making mockup designs for the website using figma. An interactive and responsive design that can be used as a benchmark for website devel",
    category: "UI/UX Designer",
    technologies: ["Figma", "Adobe Photoshop"],
    image: "/images/SiS.png",
    github: "https://github.com/mitsuha19/SIS_Kel3.git",
    prototype: "https://bit.ly/Prototype-SiS",
    demo: "",
  },
  {
    id: 5,
    name: "Find Me In Pniel",
    description:
      "Creating a horror game and producing all the assets in either 3D or 2D.",
    category: "2D/3D Artits, Game Developer",
    technologies: ["Blender", "Notion", "Adobe Photoshop", "Unity"],
    image: "/images/FindMeInPniel.png",
    github: "https://github.com/mitsuha19/LYNCH-VIEX.git",
    prototype: "-",
    demo: "https://bit.ly/TrailerFindMeInPniel",
  },
  {
    id: 6,
    name: "By Course",
    description:
      "Course management platform integrated with Delcom APP RESTful APIs to manage courses, instructors, and participants with dynamic React interface and role-based admin controls.",
    category: "Web Developer",
    technologies: ["React", "JavaScript", "RESTful API", "Delcom API"],
    image: "/images/ByCourse.png",
    github: "Not Open Source",
    prototype: "-",
    demo: "-",
  },
  {
    id: 7,
    name: "PKM - SMAN 1 Balige",
    description:
      "The first project of the course, where I served as a full-stack developer and helped build a website for a high school.",
    category: "Web Developer",
    technologies: ["Laravel 11", "PHP", "MySQL", "Bootstrap"],
    image: "/images/PKM-SMAN1.png",
    github: "Not Open Source",
    prototype: "-",
    demo: "-",
  },
  {
    id: 8,
    name: "NBA Match Predictor",
    description: "",
    category: "Web Developer",
    technologies: ["pyhton", "Jupiter Notebook"],
    image: "/images/NBA-Predictor.png",
    github: "https://github.com/glensofian/NBA-Match-Predictor.git",
    prototype: "-",
    demo: "-",
  },
];
