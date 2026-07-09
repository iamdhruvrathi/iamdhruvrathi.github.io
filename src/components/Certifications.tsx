import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications, CertificationItem } from "../data/certifications.ts";

export default function Certifications(): JSX.Element {
  return (
    <section
      id="certifications"
      className="py-20 px-4 bg-[#F9FAFB] dark:bg-slate-950 sm:px-6"
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
            Certifications
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert: CertificationItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-full bg-indigo-100 p-3 dark:bg-indigo-500/20">
                  <Award className="text-indigo-600" size={24} />
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-900 dark:text-slate-100">
                    {cert.title}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              <p className="mb-4 text-gray-700 dark:text-slate-300">
                {cert.description}
              </p>
              <p className="text-gray-700 dark:text-slate-300">{cert.notes}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
