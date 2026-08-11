"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

type TimelineItem = { when: string; what: string; why: string };

export default function About() {
  const t = useTranslations("about");
  const timeline = t.raw("timeline") as TimelineItem[];

  return (
    <section id="about" className="section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <div className="rule mb-5" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {t("title")}
          </h2>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">{t("subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="space-y-5 text-base md:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl"
        >
          <p>{t("description1")}</p>
          <p>{t("description2")}</p>
          <p>{t("description3")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-14"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-6">
            {t("timelineTitle")}
          </h3>

          <ol className="border-l border-zinc-200 dark:border-zinc-800">
            {timeline.map((item) => (
              <li key={item.when} className="relative pl-6 pb-7 last:pb-0">
                <span className="absolute left-0 top-2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent" />
                <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400">{item.when}</p>
                <p className="mt-1 font-medium text-zinc-900 dark:text-zinc-100">{item.what}</p>
                <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">{item.why}</p>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
