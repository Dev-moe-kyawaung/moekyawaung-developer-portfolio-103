import { useCallback, useState } from "react";
import Boot from "./components/Boot";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Security from "./components/Security";
import Engineering from "./components/Engineering";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import Repos from "./components/Repos";
import Certs from "./components/Certs";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeCase, setActiveCase] = useState("performance");

  const openStudy = useCallback((id: string) => {
    setActiveCase(id);
    requestAnimationFrame(() => {
      document.getElementById("audits")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-void font-sans text-ink selection:bg-term">
      <Boot />
      <Navbar />
      <main>
        <Hero />
        <Security />
        <Engineering />
        <Projects onOpenStudy={openStudy} />
        <CaseStudies active={activeCase} onSelect={setActiveCase} />
        <Repos />
        <Certs />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
