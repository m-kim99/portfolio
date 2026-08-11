"use client";

import { MotionConfig } from "framer-motion";

/**
 * reducedMotion="user" — 사용자가 OS에서 '동작 줄이기'를 켜두면
 * 등장 애니메이션을 건너뛰고 최종 상태로 바로 렌더링한다.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
