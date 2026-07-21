// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { versionAPI, AppData, ChangelogItem } from "@/lib/api";
import {
  Download,
  Copy,
  Check,
  ExternalLink,
  Smartphone,
  FileDown,
  Film,
  Clock,
  Server,
  Tv,
  Languages,
  Sparkles,
  History,
  ChevronDown,
  ChevronUp,
  Heart,
  Zap,
  ArrowRight,
  Play,
} from "lucide-react";

// ─── CUSTOM SOCIAL ICONS ───
function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

/* ─── LOADING SCREEN ─── */
function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 bg-[#1a1a2e] border-2 border-[#8b5cf6] flex items-center justify-center text-3xl">
            🎬
          </div>
          <div className="absolute -inset-1 border-2 border-[#8b5cf6]/20" />
        </div>
        <div className="text-center">
          <p className="font-mono font-bold text-white text-sm tracking-widest">PIPOS</p>
          <p className="text-xs text-white/30 font-mono">LOADING...</p>
        </div>
        <div className="w-32 h-0.5 bg-[#1a1a2e]">
          <div className="h-full w-1/2 bg-[#8b5cf6] animate-[loading_1s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}

/* ─── ERROR SCREEN ─── */
function ErrorScreen({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4">
      <div className="max-w-sm w-full text-center space-y-6 border-2 border-red-500/30 p-8 bg-[#0f0f1a]">
        <div className="text-5xl">⛔</div>
        <div>
          <h2 className="font-mono font-bold text-white text-xl mb-2 tracking-wider">ERROR</h2>
          <p className="text-white/40 text-sm font-mono">GAGAL TERHUBUNG KE SERVER</p>
        </div>
        <button
          onClick={onRetry}
          className="w-full py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-sm font-mono font-bold tracking-wider transition-all border-2 border-[#6d28d9]"
        >
          ↻ RETRY
        </button>
      </div>
    </div>
  );
}

/* ─── INSTALL GUIDE MODAL ─── */
const INSTALL_STEPS = [
  "Download APK PipoS versi terbaru",
  "Buka file APK yang sudah didownload",
  'Izinkan "Install dari sumber tidak dikenal"',
  "Klik Install dan tunggu selesai",
  "Buka & nikmati Anime, Donghua, Komik & Novel!",
];

function InstallGuideModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#0f0f1a] border-2 border-[#8b5cf6]/30 w-full max-w-md p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#8b5cf6]/20 border-2 border-[#8b5cf6] flex items-center justify-center text-lg">📱</div>
            <h3 className="font-mono font-bold text-white text-lg tracking-wider">INSTALL GUIDE</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white text-xl border border-white/10"
          >
            ✕
          </button>
        </div>
        <ol className="space-y-3 mb-6">
          {INSTALL_STEPS.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 bg-[#8b5cf6] flex items-center justify-center text-xs font-mono font-bold text-white">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-white/70 text-sm font-mono leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
        <button
          onClick={onClose}
          className="w-full py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-mono font-bold text-sm tracking-wider border-2 border-[#6d28d9] transition-colors"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}

/* ─── HERO SECTION - NEO BRUTALISM STYLE ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-[#0a0a0f] overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#8b5cf6]/10 rotate-12" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-[#8b5cf6]/10 -rotate-6" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#8b5cf6]/5 rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#8b5cf6]/20" />
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-[#8b5cf6]/20" />
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Brutalist badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#8b5cf6]/30 bg-[#1a1a2e] mb-8">
          <Zap className="w-4 h-4 text-[#8b5cf6]" />
          <span className="font-mono text-xs font-bold text-[#8b5cf6] tracking-[0.2em]">STREAMING TANPA BATAS</span>
        </div>

        {/* Main title with brutalist style */}
        <h1 className="relative inline-block">
          <span className="text-6xl md:text-8xl font-mono font-black text-white tracking-tight">
            PIPOS
          </span>
          <span className="absolute -top-2 -right-6 text-3xl md:text-4xl text-[#8b5cf6]">✦</span>
        </h1>

        {/* Subtitle with brutalist block */}
        <div className="mt-6 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-white/60 font-mono leading-relaxed">
            Streaming Anime, Donghua, Komik & Novel
            <br />
            <span className="text-[#8b5cf6]/40 text-sm tracking-[0.3em]">DALAM SATU APLIKASI</span>
          </p>
        </div>

        {/* Brutalist action buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="#download"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-mono font-bold text-sm tracking-wider transition-all border-2 border-[#6d28d9] hover:border-[#5b21b6]"
          >
            <Download className="w-5 h-5" />
            DOWNLOAD
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent hover:bg-white/5 text-white/70 hover:text-white font-mono font-bold text-sm tracking-wider transition-all border-2 border-white/20 hover:border-[#8b5cf6]/50"
          >
            <Play className="w-4 h-4" />
            FITUR
          </a>
        </div>

        {/* Brutalist divider */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-12 h-0.5 bg-[#8b5cf6]/30" />
          <span className="text-white/20 font-mono text-xs tracking-[0.3em]">v3.0</span>
          <div className="w-12 h-0.5 bg-[#8b5cf6]/30" />
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURES SECTION ─── */
type ColorKey = "violet" | "amber" | "emerald" | "rose" | "blue" | "purple";

const features = [
  { icon: Film, title: "Koleksi Lengkap", desc: "Ribuan anime, donghua, komik & novel dari berbagai genre", color: "violet" as ColorKey },
  { icon: Clock, title: "Update Real-time", desc: "Episode terbaru langsung tersedia saat rilis", color: "amber" as ColorKey },
  { icon: Server, title: "Multi Server", desc: "Pilihan server untuk streaming tanpa buffering", color: "emerald" as ColorKey },
  { icon: Download, title: "Download & Bookmark", desc: "Simpan episode favorit untuk ditonton offline", color: "rose" as ColorKey },
  { icon: Tv, title: "Multi Platform", desc: "Nikmati streaming di smartphone Android", color: "blue" as ColorKey },
  { icon: Languages, title: "Subtitle Indonesia", desc: "Semua konten dengan subtitle Bahasa Indonesia", color: "purple" as ColorKey },
];

const colorMap: Record<ColorKey, string> = {
  violet: "border-[#8b5cf6]/30 bg-[#1a1a2e]",
  amber: "border-[#f59e0b]/30 bg-[#1a1a2e]",
  emerald: "border-[#10b981]/30 bg-[#1a1a2e]",
  rose: "border-[#f43f5e]/30 bg-[#1a1a2e]",
  blue: "border-[#3b82f6]/30 bg-[#1a1a2e]",
  purple: "border-[#a855f7]/30 bg-[#1a1a2e]",
};

const iconColorMap: Record<ColorKey, string> = {
  violet: "text-[#8b5cf6]",
  amber: "text-[#f59e0b]",
  emerald: "text-[#10b981]",
  rose: "text-[#f43f5e]",
  blue: "text-[#3b82f6]",
  purple: "text-[#a855f7]",
};

function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-[#0a0a0f] border-t border-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#8b5cf6]/20 bg-[#1a1a2e] mb-4">
            <Sparkles className="w-4 h-4 text-[#8b5cf6]" />
            <span className="font-mono text-xs font-bold text-[#8b5cf6] tracking-[0.2em]">FITUR</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-mono font-black text-white tracking-tight">
            LEBIH DARI <span className="text-[#8b5cf6]">SEKADAR</span> STREAMING
          </h2>
          <p className="text-white/40 font-mono text-lg mt-2">Nikmati pengalaman streaming terbaik dengan fitur canggih</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-6 border-2 ${colorMap[feature.color]} hover:border-opacity-100 transition-all hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 border-2 ${colorMap[feature.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-5 h-5 ${iconColorMap[feature.color]}`} />
              </div>
              <h3 className="text-white font-mono font-bold text-lg mb-1">{feature.title}</h3>
              <p className="text-white/40 font-mono text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── DOWNLOAD SECTION ─── */
interface DownloadSectionProps {
  appData: AppData;
  onShowGuide: () => void;
}

function DownloadSection({ appData, onShowGuide }: DownloadSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadUrl = appData.update_url || "";

  return (
    <section id="download" className="py-24 px-4 bg-[#0a0a0f] border-t border-white/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#8b5cf6]/20 bg-[#1a1a2e] mb-4">
            <Download className="w-4 h-4 text-[#8b5cf6]" />
            <span className="font-mono text-xs font-bold text-[#8b5cf6] tracking-[0.2em]">DOWNLOAD</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-mono font-black text-white tracking-tight">
            DOWNLOAD <span className="text-[#8b5cf6]">PIPOS</span>
          </h2>
          <p className="text-white/40 font-mono text-lg mt-2">Tersedia untuk Android. Download versi terbaru sekarang!</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { label: "VERSI", value: appData.version },
            { label: "UKURAN", value: appData.file_size },
            { label: "BUILD", value: appData.build_date.split(" ")[0] },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 border-2 border-white/10 bg-[#1a1a2e]">
              <span className="text-white/30 font-mono text-xs tracking-wider">{item.label}</span>
              <span className="text-white font-mono font-bold text-sm">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border-2 border-[#8b5cf6] bg-[#1a1a2e] hover:bg-[#8b5cf6]/10 transition-all hover:scale-[1.01]"
          >
            <div className="flex items-center justify-center gap-4 p-6">
              <span className="text-4xl">📥</span>
              <div className="text-left">
                <p className="text-white/50 font-mono text-xs tracking-wider">DOWNLOAD VIA</p>
                <p className="text-white font-mono font-bold text-xl tracking-wider">SFILE.MOBI</p>
              </div>
              <ExternalLink className="w-6 h-6 text-[#8b5cf6] group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 border-2 border-white/10 bg-[#1a1a2e] p-3 mb-6">
          <input
            type="text"
            readOnly
            value={downloadUrl}
            className="flex-1 bg-black/40 text-white/50 font-mono text-sm px-4 py-3 border-2 border-white/10 focus:border-[#8b5cf6]/50 transition-colors"
          />
          <button
            onClick={() => handleCopyLink(downloadUrl)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#8b5cf6]/20 hover:bg-[#8b5cf6]/30 text-white font-mono font-bold text-sm transition-all border-2 border-[#8b5cf6]/30"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            {copied ? "SALIN!" : "SALIN LINK"}
          </button>
        </div>

        <div className="text-center">
          <button
            onClick={onShowGuide}
            className="inline-flex items-center gap-2 text-white/40 hover:text-white font-mono text-sm transition-colors group border-b border-transparent hover:border-white/20"
          >
            <Smartphone className="w-4 h-4" />
            <span>PANDUAN INSTALL APK</span>
            <span className="text-white/20 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {appData.release_notes && (
          <div className="mt-10 p-5 border-2 border-white/10 bg-[#1a1a2e]">
            <div className="flex items-center gap-2 mb-2">
              <FileDown className="w-4 h-4 text-[#8b5cf6]" />
              <h3 className="text-white font-mono font-bold text-sm tracking-wider">RELEASE NOTES</h3>
            </div>
            <p className="text-white/50 font-mono text-sm leading-relaxed">{appData.release_notes}</p>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── CHANGELOG SECTION ─── */
interface ChangelogProps {
  changelog: ChangelogItem[];
  version: string;
}

function Changelog({ changelog, version }: ChangelogProps) {
  const [showAll, setShowAll] = useState(false);

  if (!changelog?.length) return null;

  const displayedChangelog = showAll ? changelog : changelog.slice(0, 5);
  const latest = changelog[0];

  return (
    <section id="changelog" className="py-24 px-4 bg-[#0a0a0f] border-t border-white/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#8b5cf6]/20 bg-[#1a1a2e] mb-4">
            <History className="w-4 h-4 text-[#8b5cf6]" />
            <span className="font-mono text-xs font-bold text-[#8b5cf6] tracking-[0.2em]">CHANGELOG</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-mono font-black text-white tracking-tight">
            RIWAYAT <span className="text-[#8b5cf6]">UPDATE</span>
          </h2>
          <p className="text-white/40 font-mono text-lg mt-2">Pantau perkembangan fitur baru di setiap versi</p>
        </div>

        {latest?.version === version && (
          <div className="mb-8 p-5 border-2 border-[#8b5cf6]/30 bg-[#1a1a2e]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 border-2 border-[#8b5cf6] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#8b5cf6]" />
              </div>
              <div>
                <span className="text-[#8b5cf6] font-mono font-bold">v{latest.version}</span>
                <span className="text-white/30 font-mono text-sm ml-2">{latest.date}</span>
              </div>
              <span className="ml-auto text-xs px-2 py-0.5 border-2 border-[#8b5cf6]/50 text-[#8b5cf6] font-mono tracking-wider">
                TERBARU
              </span>
            </div>
            <p className="text-white/70 font-mono text-sm">{latest.changes}</p>
          </div>
        )}

        <div className="space-y-2">
          {displayedChangelog.map((item, index) => {
            if (item.version === version && index === 0) return null;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 border-2 border-white/5 hover:border-[#8b5cf6]/30 bg-[#1a1a2e] hover:bg-[#1a1a2e]/80 transition-all"
              >
                <div className="shrink-0 w-1 h-full min-h-[2rem] bg-[#8b5cf6]/30" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#8b5cf6] font-mono font-bold text-sm">v{item.version}</span>
                    {item.version === version && (
                      <span className="text-[10px] px-1.5 py-0.5 border border-[#8b5cf6]/30 text-[#8b5cf6] font-mono">
                        CURRENT
                      </span>
                    )}
                    <span className="text-white/30 font-mono text-xs ml-auto">{item.date}</span>
                  </div>
                  <p className="text-white/50 font-mono text-sm">{item.changes}</p>
                </div>
              </div>
            );
          })}
        </div>

        {changelog.length > 5 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-white/10 hover:border-[#8b5cf6]/30 bg-[#1a1a2e] hover:bg-[#1a1a2e]/80 text-white/60 hover:text-white font-mono text-sm font-bold transition-all"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  SEMBUNYIKAN
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  LIHAT {changelog.length - 5} VERSI SEBELUMNYA
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-white/5 py-12 px-4 bg-[#0a0a0f]">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-white font-mono font-bold tracking-wider">PIPOS</span>
            <span className="text-white/20">|</span>
            <span className="text-white/30 font-mono text-sm">v2025.1</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-white/30 hover:text-white/60 transition-colors border-2 border-transparent hover:border-white/10 p-1">
              <GithubIcon />
            </a>
            <a href="#" className="text-white/30 hover:text-white/60 transition-colors border-2 border-transparent hover:border-white/10 p-1">
              <TwitterIcon />
            </a>
            <a href="#" className="text-white/30 hover:text-white/60 transition-colors border-2 border-transparent hover:border-white/10 p-1">
              <InstagramIcon />
            </a>
            <a href="#" className="text-white/30 hover:text-white/60 transition-colors border-2 border-transparent hover:border-white/10 p-1">
              <YoutubeIcon />
            </a>
          </div>

          <p className="text-white/20 font-mono text-sm flex items-center gap-1">
            MADE WITH <Heart className="w-3 h-3 text-[#8b5cf6] fill-[#8b5cf6]" /> • {year}
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── MAIN PAGE ─── */
export default function Home() {
  const [appData, setAppData] = useState<AppData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showInstallGuide, setShowInstallGuide] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(false);

    try {
      const result = await versionAPI.getVersion();

      if (result?.success && result.version) {
        setAppData({
          version: result.version,
          build_date: result.build_date,
          force_update: result.force_update,
          minimum_version: result.minimum_version,
          update_url: result.update_url,
          file_size: result.file_size,
          release_notes: result.release_notes,
          changelog: result.changelog,
          download_links: [
            { name: "Sfile.mobi", url: result.update_url, icon: "📥" },
          ],
        });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <LoadingScreen />;
  if (error || !appData) return <ErrorScreen onRetry={fetchData} />;

  return (
    <main className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      <Hero />
      <Features />
      <DownloadSection appData={appData} onShowGuide={() => setShowInstallGuide(true)} />
      <Changelog changelog={appData.changelog} version={appData.version} />
      <Footer />

      {showInstallGuide && <InstallGuideModal onClose={() => setShowInstallGuide(false)} />}
    </main>
  );
}
