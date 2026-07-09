import { motion } from "framer-motion";
import { Palette, Video } from "lucide-react";

export default function CreativeStudio() {
  return (
    <section className="py-20 px-4 bg-[#F9FAFB] dark:bg-slate-950 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-slate-100">
            Creative Studio
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-pink-100 rounded-lg">
                <Palette className="text-pink-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100">
                Graphic Design
              </h3>
            </div>

            <p className="text-gray-600 mb-4">
              Creating visually stunning designs for various purposes
            </p>

            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                Event Posters & Banners
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                UI/UX Layouts & Mockups
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                Technical Fest Creatives
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                Social Media Graphics
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Video className="text-orange-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100">
                Video Editing
              </h3>
            </div>

            <p className="text-gray-600 mb-4">
              Crafting engaging video content for events and social media
            </p>

            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                Technical Fest Trailers
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                Event Highlight Reels
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                Social Media Reels
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                Promotional Videos
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
