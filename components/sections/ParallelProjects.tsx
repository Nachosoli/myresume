"use client";

import { profile } from "@/src/content/profile";
import { motion } from "framer-motion";
import { ExternalLink, Code, Globe } from "lucide-react";
import Link from "next/link";

export default function ParallelProjects() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Beta":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Building":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white"
          >
            Venture Studio / Projects in Parallel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-gray-600 dark:text-gray-400 mb-12"
          >
            Building products and platforms that apply quality engineering principles to real-world problems
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.parallelProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.name}
                    </h3>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                      {project.category}
                    </span>
                  </div>
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                    Why it matters:
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.whyItMatters}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.links.map((link, linkIndex) => {
                    const isPlaceholder = link.url.includes("(add-link)");
                    const Icon = link.label.toLowerCase().includes("github") ? Code : Globe;

                    return (
                      <Link
                        key={linkIndex}
                        href={isPlaceholder ? "#" : link.url}
                        target={isPlaceholder ? undefined : "_blank"}
                        rel={isPlaceholder ? undefined : "noopener noreferrer"}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                          isPlaceholder
                            ? "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                        aria-disabled={isPlaceholder}
                      >
                        <Icon className="w-4 h-4" />
                        {link.label}
                        {!isPlaceholder && <ExternalLink className="w-3 h-3" />}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

