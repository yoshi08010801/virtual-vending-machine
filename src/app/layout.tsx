import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google"; // ← 追加
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron", // ← 追加
  subsets: ["latin"],
  weight: ["500"],             // ← 太さ調整（数字表示風に）
});

export const metadata: Metadata = {
  title: "Virtual Japanese Vending Machine",
  description: "Try a realistic Japanese vending machine experience—interactive, fun, and free.",
  openGraph: {
    title: "Virtual Japanese Vending Machine",
    description: "Explore Japan’s unique vending culture through this virtual interactive machine.",
    url: "https://virtual-vending-machine.vercel.app",
    siteName: "Virtual Vending Machine",
    // images: [ ... ] ← ここをコメントアウトまたは削除
    type: "website",
  },
  twitter: {
    card: "summary", // 画像なしの場合は "summary" が自然
    title: "Virtual Japanese Vending Machine",
    description: "Try a realistic Japanese vending machine experience—interactive, fun, and free.",
    // images: [ ... ] ← ここも削除してOK
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
