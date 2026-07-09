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
  return (
    <div className="bg-[#F9FAFB] text-gray-900">
      <Navbar />
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
