import { motion } from "framer-motion";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";
import {
  leadershipTimeline,
  LeadershipEntry,
  LeadershipRole,
} from "../data/leadership";

export default function Leadership(): JSX.Element {
  return (
    <section
      id="leadership"
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
            Leadership Experience
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {leadershipTimeline.map((entry: LeadershipEntry, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-800/80"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-full bg-indigo-100 p-3">
                      <Briefcase className="text-indigo-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100">
                        {entry.organization}
                      </h3>
                      <p className="text-gray-600 dark:text-slate-300">
                        {entry.duration}
                      </p>
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:bg-slate-900 dark:text-slate-200">
                  <CalendarDays size={18} />
                  Active Roles
                </span>
              </div>

              <div className="space-y-6">
                {entry.roles.map((item: LeadershipRole, idx: number) => (
                  <div
                    key={idx}
                    className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-slate-100">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-slate-400">
                          {item.period}
                        </p>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
                        {item.subtitle}
                      </span>
                    </div>
                    {item.location ? (
                      <p className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={16} />
                        {item.location}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
