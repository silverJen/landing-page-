import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "바이브라이팅 - 말한 내용을 바로 써먹을 수 있는 문서로 바꾸는 AI 코파일럿",
  description: "전사/요약이 아닌, 도메인별 구조화된 초안을 자동 생성합니다. 두 번 일하지 않게 해주는 AI 코파일럿",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

