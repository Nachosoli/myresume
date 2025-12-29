"use client";

import { profile } from "@/src/content/profile";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function ThoughtLeadership() {
  return (
    <section id="thought-leadership" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-12"
          >
            <Lightbulb className="w-8 h-8 text-gray-900 dark:text-white" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Point of View
            </h2>
          </motion.div>

          <div className="space-y-6">
            {profile.thoughtLeadership.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-gray-900 dark:border-white"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {principle.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

