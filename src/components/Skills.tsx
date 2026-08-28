"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const groups = [
  {
    key: "frontend",
    items: ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui", "Zustand", "i18next"],
  },
  {
    key: "backend",
    items: ["Supabase", "PostgreSQL", "Row Level Security", "Deno Edge Functions", "Prisma", "Cloudflare R2"],
  },
  {
    key: "mobile",
    items: ["Capacitor", "Swift", "Java", "Core NFC", "Android NFC", "FCM Push", "Native STT"],
  },
  {
    key: "domain",
    items: [] as string[],
  },
];

export default function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="section section-alt">
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

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-9">
          {groups.map((group, index) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-4">
                {t(`groups.${group.key}`)}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {(group.key === "domain" ? (t.raw("domainItems") as string[]) : group.items).map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-950"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
