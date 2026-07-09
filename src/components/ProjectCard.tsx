import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string | null;
  live: string | null;
  category: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  category,
}: ProjectCardProps): JSX.Element {
  const accent = category === "ds" ? "border-teal-600" : "border-indigo-600";

  const accentBg = category === "ds" ? "bg-teal-50" : "bg-indigo-50";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className={`bg-white rounded-2xl shadow-sm border-l-4 ${accent} p-6 transition h-full flex flex-col`}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 flex-1">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t: string, i: number) => (
          <span
            key={i}
            className={`text-xs ${accentBg} px-3 py-1 rounded-full text-gray-700`}
          >
            {t}
          </span>
        ))}
      </div>

      {(github || live) && (
        <div className="flex gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm hover:bg-gray-50 transition"
            >
              <Github size={16} /> GitHub
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm hover:bg-gray-50 transition"
            >
              <ExternalLink size={16} /> Live
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
