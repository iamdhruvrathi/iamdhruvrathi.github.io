import { motion } from "framer-motion";
import { Github, Linkedin, Download, Mail, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Dhruv Rathi
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 mb-4">
            Think. Build. Scale.
          </h2>

          <div className="flex items-center justify-center gap-6 text-gray-600 mb-8">
            <a
              href="mailto:dhruv2005rathi@gmail.com"
              className="flex items-center gap-2 hover:text-indigo-600 transition"
            >
              <Mail size={18} />
              dhruv2005rathi@gmail.com
            </a>
            <a
              href="tel:+918310337114"
              className="flex items-center gap-2 hover:text-indigo-600 transition"
            >
              <Phone size={18} />
              +91 83103 37114
            </a>
          </div>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            3rd year B.Tech Computer Science student with hands-on experience in
            Data Science, Machine Learning, and full-stack web development
            (MERN). Skilled in building end-to-end ML pipelines, RAG-based AI
            systems, and scalable web applications, with a strong interest in
            hackathons and team-driven projects
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/iamdhruvrathi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition"
            >
              <Github size={20} />
              GitHub
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/dhruv-rathi-399378282/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
            >
              <Linkedin size={20} />
              LinkedIn
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition"
            >
              <Download size={20} />
              Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16"
        >
          <div className="inline-block animate-bounce">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
