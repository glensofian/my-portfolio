import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glen Sofian Pardede — Software Engineer",
  description:
    "Personal portfolio of Glen Sofian Pardede, a Software Engineer specializing in web and mobile development. Based in Jakarta, Indonesia.",
  keywords: ["portfolio", "software engineer", "web developer", "mobile developer", "React", "Next.js"],
  authors: [{ name: "Glen Sofian Pardede" }],
  openGraph: {
    title: "Glen Sofian Pardede — Software Engineer",
    description:
      "Personal portfolio showcasing projects, experience, and skills in web & mobile development.",
    type: "website",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — loaded via link tag to avoid Tailwind v4 CSS parser conflict */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,700;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
