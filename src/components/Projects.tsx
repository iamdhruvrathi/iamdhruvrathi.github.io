import { motion } from "framer-motion";
import { Code, Brain } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects, ProjectEntry } from "../data/projects";

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className="py-20 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Code className="text-indigo-600" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Web Development
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.webDev.map((project: ProjectEntry, index: number) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-3 bg-teal-100 rounded-lg">
              <Brain className="text-teal-600" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Data Science & Machine Learning
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.dataScience.map(
              (project: ProjectEntry, index: number) => (
                <ProjectCard key={index} {...project} />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
