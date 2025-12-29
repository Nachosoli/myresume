"use client";

import { profile } from "@/src/content/profile";
import { motion } from "framer-motion";

export default function SkillsStack() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          >
            Skills & Stack
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.skills.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-gray-700 dark:text-gray-300 text-sm pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-900 dark:before:text-white"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

