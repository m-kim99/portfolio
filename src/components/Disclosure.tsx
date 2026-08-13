"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  /** 접힌 영역 안에 들어갈 항목들 */
  items: ReactNode[];
  moreLabel: string;
  lessLabel: string;
};

/**
 * 스캔용 요약 아래에 두는 펼치기 영역.
 * 리크루터는 몇 초 만에 훑고 지나가므로 기본은 접어두고,
 * 더 읽을 의사가 있는 사람만 펼치게 한다.
 */
export default function Disclosure({ items, moreLabel, lessLabel }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  if (items.length === 0) return null;

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-4"
      >
        {open ? lessLabel : `${moreLabel} (${items.length})`}
        <svg
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              {items.map((item, i) => (
                <li
                  key={i}
                  className="relative pl-5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed"
                >
                  <span className="absolute left-0 top-[0.55em] w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
