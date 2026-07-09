import { motion } from "framer-motion";
import { experience, ExperienceItem } from "../data/experience";

export default function Experience(): JSX.Element {
  return (
    <section id="experience" className="py-20 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experience.map((item: ExperienceItem, index: number) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-xl font-semibold text-gray-900">
                    {item.role}
                  </p>
                  <p className="text-sm text-gray-500">{item.company}</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
                  {item.duration}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                {item.bullets.map((bullet: string, bulletIndex: number) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
