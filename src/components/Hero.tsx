"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-[88vh] flex items-center px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm font-medium tracking-wide uppercase text-accent mb-5"
        >
          {t("role")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6"
        >
          {t("name")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xl md:text-2xl font-medium text-zinc-800 dark:text-zinc-200 mb-6 leading-snug"
        >
          {t("tagline")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-10"
        >
          {t("description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg font-medium bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 hover:opacity-90 transition-opacity"
          >
            {t("viewProjects")}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-zinc-500 dark:hover:border-zinc-500 transition-colors"
          >
            {t("contact")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
