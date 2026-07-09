import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "University Visvesvaraya College of Engineering, Bengaluru",
    degree: "B.Tech – Computer Science Engineering",
    period: "2023 – Present",
    score: "CGPA: 9.10",
  },
  {
    institution: "Mangalore Independent PU College, Hubballi",
    degree: "II PUC – PCMC",
    period: "2021 – 2023",
    score: "93.5%",
  },
  {
    institution: "Basaveshwara International Public School, Bagalkot",
    degree: "Class X (CBSE)",
    period: "2008 – 2021",
    score: "94.6%",
  },
];

export default function EducationTimeline() {
  return (
    <section
      id="education"
      className="py-20 px-4 bg-white dark:bg-slate-900 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-slate-100">
            Education
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-slate-700"></div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              <div className="absolute left-5 top-1 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-lg dark:border-slate-900"></div>

              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition dark:bg-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-lg dark:bg-indigo-500/20">
                    <GraduationCap className="text-indigo-600" size={24} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-slate-100">
                      {edu.institution}
                    </h3>
                    <p className="text-indigo-600 font-medium mb-1">
                      {edu.degree}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-slate-300">
                      <span>{edu.period}</span>
                      <span className="font-semibold text-gray-900 dark:text-slate-100">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
