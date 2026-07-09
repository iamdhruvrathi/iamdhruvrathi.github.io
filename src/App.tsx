import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EducationTimeline from "./components/EducationTimeline";
import Projects from "./components/Projects";
import SkillsCloud from "./components/SkillsCloud";
import CreativeStudio from "./components/CreativeStudio";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Leadership from "./components/Leadership";
import Footer from "./components/Footer";

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;

    const storedTheme = window.localStorage.getItem("portfolio-theme");
    if (storedTheme) {
      return storedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    root.style.colorScheme = isDark ? "dark" : "light";
    window.localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div
      id="home"
      className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100"
    >
      <Navbar isDark={isDark} toggleTheme={() => setIsDark((prev) => !prev)} />
      <Hero />
      <EducationTimeline />
      <Experience />
      <Certifications />
      <Projects />
      <SkillsCloud />
      <CreativeStudio />
      <Leadership />
      <Footer />
    </div>
  );
}

export default App;
