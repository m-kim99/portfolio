"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Disclosure from "./Disclosure";

const projectMeta = [
  {
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL RLS", "Deno", "Cloudflare R2", "Capacitor"],
    links: [{ label: "traystorageconnect.com", href: "https://traystorageconnect.com" }],
  },
  {
    tech: ["Swift", "Objective-C", "Java", "Android SDK", "Supabase", "Kakao / Naver SDK"],
    // 인수·재개발한 4종 전부 스토어 게시 중 (iOS 최종 2026-05, 본인 작업분 반영)
    links: [
      { label: "App Store (KR)", href: "https://apps.apple.com/kr/app/traystorage-view/id1608315959" },
      { label: "App Store (EN)", href: "https://apps.apple.com/us/app/traystorage-view-en/id6474948759" },
      { label: "Google Play (KR)", href: "https://play.google.com/store/apps/details?id=com.kyad.traystorage" },
      { label: "Google Play (EN)", href: "https://play.google.com/store/apps/details?id=com.us.traystorage" },
    ],
  },
  {
    tech: ["Capacitor", "Swift", "Java", "Core NFC", "FCM"],
    links: [],
  },
];

type ProjectContent = {
  title: string;
  kind: string;
  period: string;
  summary: string;
  highlights: string[];
  details?: string[];
  storeNote?: string;
};

export default function Projects() {
  const t = useTranslations("projects");
  const items = t.raw("items") as ProjectContent[];

  return (
    <section id="projects" className="section">
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

        <div className="space-y-6">
          {items.map((project, index) => {
            const meta = projectMeta[index];
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card p-7 md:p-9"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {project.kind}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {project.period}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
                  {project.title}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {project.summary}
                </p>

                <ul className="space-y-2.5">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="relative pl-5 text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed"
                    >
                      <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mb-7">
                  <Disclosure
                    items={project.details ?? []}
                    moreLabel={t("more")}
                    lessLabel={t("less")}
                  />
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {meta.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="px-2.5 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {project.storeNote && (
                  <p className="mb-3 text-xs text-zinc-500 dark:text-zinc-400">{project.storeNote}</p>
                )}

                {meta.links.length > 0 && (
                  <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
                    {meta.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-4"
                      >
                        {link.label}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
