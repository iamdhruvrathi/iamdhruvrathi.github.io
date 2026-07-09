import { motion } from "framer-motion";
import { Code2, Database, Cpu } from "lucide-react";
import { skills } from "../data/skills";

export default function SkillsCloud(): JSX.Element {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-white dark:bg-slate-900 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-slate-100">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-gradient-to-br from-indigo-50 to-white p-8 shadow-sm dark:from-indigo-950/60 dark:to-slate-900"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-indigo-600 rounded-lg">
                <Code2 className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100">
                Development
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.development.map((skill: string, index: number) => (
                <span
                  key={index}
                  className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900 dark:bg-indigo-500/20 dark:text-indigo-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-gradient-to-br from-teal-50 to-white p-8 shadow-sm dark:from-teal-950/60 dark:to-slate-900"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-teal-600 rounded-lg">
                <Database className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100">
                Data Science
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.dataScience.map((skill: string, index: number) => (
                <span
                  key={index}
                  className="rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-900 dark:bg-teal-500/20 dark:text-teal-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm dark:from-slate-800 dark:to-slate-900"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gray-900 rounded-lg">
                <Cpu className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100">
                Core CS
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.coreCS.map((skill: string, index: number) => (
                <span
                  key={index}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 dark:bg-slate-700 dark:text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
