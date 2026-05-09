import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PipoStream — Anime & Donghua Streaming",
    template: "%s · PipoStream",
  },
  description:
    "Aplikasi streaming anime dan donghua terbaik untuk Android. Tonton ribuan episode dengan kualitas HD, subtitle Indonesia, dan update setiap hari!",
  keywords: ["anime", "donghua", "streaming", "nonton anime", "aplikasi anime", "pipostream"],
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "PipoStream — Anime & Donghua Streaming",
    description: "Tonton ribuan episode anime & donghua HD dengan subtitle Indonesia.",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-dm antialiased bg-[#060608] text-white selection:bg-violet-500/30 selection:text-violet-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}