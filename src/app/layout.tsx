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
  title: "My Vending Machine",
  description: "American-style vending machine UI",
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
