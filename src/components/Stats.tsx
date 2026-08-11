"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

type StatItem = { value: string; unit: string; label: string };

export default function Stats() {
  const t = useTranslations("stats");
  const items = t.raw("items") as StatItem[];

  return (
    <section className="section-alt py-14 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {items.map((item) => (
            <div key={item.label}>
              <p className="stat-value text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                {item.value}
                {item.unit && (
                  <span className="text-base font-medium text-zinc-500 dark:text-zinc-400 ml-1">
                    {item.unit}
                  </span>
                )}
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
