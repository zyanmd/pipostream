import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PipoStream - Nonton Anime & Donghua Terbaru",
  description: "Aplikasi streaming anime dan donghua terbaik untuk Android. Tonton ribuan episode dengan kualitas HD, subtitle Indonesia, dan update setiap hari!",
  keywords: "anime, donghua, streaming, nonton anime, aplikasi anime, pipostream",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}