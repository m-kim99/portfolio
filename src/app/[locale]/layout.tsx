import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import MotionProvider from "@/components/MotionProvider";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Min Kim — Full-stack Developer",
  description:
    "앱 기획자로 입사해 사내 1호 개발자가 되었습니다. 웹·iOS·Android B2B SaaS를 단독으로 설계·개발·운영하고, 외주가 중단된 네이티브 앱을 인수해 자체 개발로 전환했습니다.",
  openGraph: {
    title: "Min Kim — Full-stack Developer",
    description:
      "웹·iOS·Android B2B SaaS 단독 구축. 구독 결제, 멀티테넌트 보안, NFC 네이티브 연동.",
    type: "website",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ko" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* JS가 로드되지 않아도 본문이 보이도록 — 등장 애니메이션의 opacity:0 무력화 */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <MotionProvider>{children}</MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
