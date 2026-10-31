import Navbar    from "@/components/Navbar";
import Hero       from "@/components/Hero";
import About      from "@/components/About";
import Experience from "@/components/Experience";
import Project    from "@/components/Project";
import CV         from "@/components/CV";
import Contact    from "@/components/Contact";
import Footer     from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Project />
        <CV />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
