import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-gray-900"
        >
          DR
        </motion.div>

        <div className="flex items-center gap-8">
          <a
            href="#education"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Education
          </a>
          <a
            href="#experience"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Experience
          </a>
          <a
            href="#certifications"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Certifications
          </a>
          <a
            href="#projects"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Skills
          </a>
          <a
            href="#leadership"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Leadership
          </a>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
