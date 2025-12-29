"use client";

import { profile } from "@/src/content/profile";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-gray-900 dark:text-white"
          >
            Leadership Experience
          </motion.h2>

          <div className="space-y-12">
            {profile.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 dark:bg-white rounded-full border-2 border-white dark:border-gray-900" />

                <div className="mb-4">
                  <div className="flex flex-wrap items-center gap-4 mb-2">
                    <Building2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {exp.role}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 mt-4">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-900 dark:before:text-white"
                    >
                      {highlight}
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

