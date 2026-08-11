"use client";

import { Fragment, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

type Stat = { value: string; label: string };

/** `**강조**` 구간만 굵게 렌더링 — 하이라이트 앞부분 라벨용 */
function renderEmphasis(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-zinc-900 dark:text-zinc-100">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export default function Personal() {
  const t = useTranslations("personal");
  const stats = t.raw("stats") as Stat[];
  const highlights = t.raw("highlights") as string[];
  const tech = t.raw("tech") as string[];

  return (
    <section id="personal" className="section">
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

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="card p-7 md:p-9"
        >
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              {t("label")}
            </span>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              {t("period")}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            {t("name")}
          </h3>
          <p className="mt-1 text-zinc-700 dark:text-zinc-300">{t("tagline")}</p>

          <p className="mt-5 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t("summary")}
          </p>

          {/* 스크린샷이 없어도 무게가 실리도록 수치를 앞세운다 */}
          <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 py-6 border-y border-zinc-200 dark:border-zinc-800">
            {stats.map((stat) => (
              // flex-col-reverse: 값을 위에 보이게 하면서 dt(라벨)–dd(값) 순서를 유지
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1.5 text-xs text-zinc-600 dark:text-zinc-400 leading-snug">
                  {stat.label}
                </dt>
                <dd className="stat-value text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-7 space-y-3">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="relative pl-5 text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed"
              >
                <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                {renderEmphasis(highlight)}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-1.5">
            {tech.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-400">{t("note")}</p>
        </motion.article>
      </div>
    </section>
  );
}
