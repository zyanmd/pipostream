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
    <div className="min-h-screen bg-[#060608] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-3xl animate-pulse">
            🎬
          </div>
          <div className="absolute -inset-1 rounded-2xl bg-violet-500/20 blur-sm animate-ping" />
        </div>
        <div className="text-center">
          <p className="font-syne font-semibold text-white text-sm tracking-wider">PipoS</p>
          <p className="text-xs text-white/30">Memuat...</p>
        </div>
        <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-[loading_1s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}

/* ─── ERROR SCREEN ─── */
function ErrorScreen({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="min-h-screen bg-[#060608] flex items-center justify-center p-4">
      <div className="max-w-sm w-full text-center space-y-6">
        <div className="text-5xl">🔌</div>
        <div>
          <h2 className="font-syne font-bold text-white text-xl mb-2">Gagal Memuat</h2>
          <p className="text-white/40 text-sm">Tidak dapat terhubung ke server. Periksa koneksi internetmu.</p>
        </div>
        <button
          onClick={onRetry}
          className="px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:scale-105"
        >
          ↺ Coba Lagi
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
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#0f0f13] border border-white/10 rounded-3xl w-full max-w-md p-6 shadow-2xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center text-lg">📱</div>
            <h3 className="font-syne font-bold text-white text-lg">Panduan Install</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white text-xl"
          >
            ×
          </button>
        </div>
        <ol className="space-y-3 mb-6">
          {INSTALL_STEPS.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-xs font-bold text-white">
                {i + 1}
              </span>
              <p className="text-white/70 text-sm leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
        <button
          onClick={onClose}
          className="w-full py-3 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}

/* ─── HERO SECTION ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-600/20 via-transparent to-transparent" />
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
          <Zap className="w-3.5 h-3.5 text-violet-400" />
          <span className="text-xs font-medium text-violet-400 tracking-wider">STREAMING TANPA BATAS</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent mb-4">
          PipoS
        </h1>
        <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed">
          Streaming Anime, Donghua, Komik & Novel dalam satu aplikasi
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-2xl transition-all hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download Sekarang
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white font-semibold rounded-2xl border border-white/10 transition-all"
          >
            Lihat Fitur
          </a>
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
  violet: "from-violet-500/20 to-indigo-500/20 border-violet-500/30",
  amber: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
  emerald: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
  rose: "from-rose-500/20 to-pink-500/20 border-rose-500/30",
  blue: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  purple: "from-purple-500/20 to-fuchsia-500/20 border-purple-500/30",
};

const iconColorMap: Record<ColorKey, string> = {
  violet: "text-violet-400",
  amber: "text-amber-400",
  emerald: "text-emerald-400",
  rose: "text-rose-400",
  blue: "text-blue-400",
  purple: "text-purple-400",
};

function Features() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-xs font-medium text-violet-400 tracking-wider">FITUR</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-3">
            Lebih dari Sekadar Streaming
          </h2>
          <p className="text-white/40 text-lg">Nikmati pengalaman streaming terbaik dengan fitur canggih</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl bg-gradient-to-br ${colorMap[feature.color]} border border-white/10 hover:border-opacity-100 transition-all hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-5 h-5 ${iconColorMap[feature.color]}`} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
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

  // Gunakan hanya URL sfile.mobi
  const downloadUrl = "https://sfile.mobi/download/example-id";

  return (
    <section id="download" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
            <Download className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-xs font-medium text-violet-400 tracking-wider">DOWNLOAD</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-3">
            Download PipoS
          </h2>
          <p className="text-white/40 text-lg">Tersedia untuk Android. Download versi terbaru sekarang!</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { label: "Versi", value: appData.version },
            { label: "Ukuran", value: appData.file_size },
            { label: "Build", value: appData.build_date.split(" ")[0] },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-white/30 text-sm">{item.label}</span>
              <span className="text-white font-medium text-sm">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Single Download Button */}
        <div className="mb-6">
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 p-[1px] transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/25 block"
          >
            <div className="flex items-center justify-center gap-3 rounded-2xl bg-[#060608] p-5 group-hover:bg-transparent transition-colors">
              <span className="text-3xl">📥</span>
              <div>
                <p className="text-white/50 text-xs">Download via</p>
                <p className="text-white font-bold text-lg">Sfile.mobi</p>
              </div>
              <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
            </div>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 bg-white/5 rounded-2xl p-3 mb-6 border border-white/10">
          <input
            type="text"
            readOnly
            value={downloadUrl}
            className="flex-1 bg-black/40 text-white/50 text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-violet-500/50 transition-colors"
          />
          <button
            onClick={() => handleCopyLink(downloadUrl)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm font-medium transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            {copied ? "Tersalin!" : "Salin Link"}
          </button>
        </div>

        <div className="text-center">
          <button
            onClick={onShowGuide}
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors group"
          >
            <Smartphone className="w-4 h-4" />
            <span>Panduan Install APK</span>
            <span className="text-white/20 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {appData.release_notes && (
          <div className="mt-10 p-5 bg-white/5 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <FileDown className="w-4 h-4 text-violet-400" />
              <h3 className="text-white font-semibold text-sm">Release Notes</h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">{appData.release_notes}</p>
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
    <section id="changelog" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
            <History className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-xs font-medium text-violet-400 tracking-wider">CHANGELOG</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-3">
            Riwayat Update
          </h2>
          <p className="text-white/40 text-lg">Pantau perkembangan fitur baru di setiap versi</p>
        </div>

        {latest?.version === version && (
          <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-violet-600/10 to-indigo-600/10 border border-violet-500/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-violet-600/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <span className="text-violet-400 font-bold">v{latest.version}</span>
                <span className="text-white/30 text-sm ml-2">{latest.date}</span>
              </div>
              <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-violet-600/30 text-violet-300 border border-violet-500/30">
                Terbaru
              </span>
            </div>
            <p className="text-white/70 text-sm">{latest.changes}</p>
          </div>
        )}

        <div className="space-y-2">
          {displayedChangelog.map((item, index) => {
            if (item.version === version && index === 0) return null;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-violet-500/20 transition-all"
              >
                <div className="shrink-0 w-1 h-full min-h-[2rem] rounded-full bg-gradient-to-b from-violet-500 to-indigo-500 opacity-30" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-violet-400 font-bold text-sm">v{item.version}</span>
                    {item.version === version && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-violet-600/40 text-violet-300 border border-violet-500/30">
                        Current
                      </span>
                    )}
                    <span className="text-white/30 text-xs ml-auto">{item.date}</span>
                  </div>
                  <p className="text-white/50 text-sm">{item.changes}</p>
                </div>
              </div>
            );
          })}
        </div>

        {changelog.length > 5 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-sm font-medium transition-all border border-white/5 hover:border-violet-500/30"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Sembunyikan
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Lihat {changelog.length - 5} versi sebelumnya
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
    <footer className="border-t border-white/5 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">PipoS</span>
            <span className="text-white/20">|</span>
            <span className="text-white/30 text-sm">v2025.1</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-white/30 hover:text-white/60 transition-colors">
              <GithubIcon />
            </a>
            <a href="#" className="text-white/30 hover:text-white/60 transition-colors">
              <TwitterIcon />
            </a>
            <a href="#" className="text-white/30 hover:text-white/60 transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" className="text-white/30 hover:text-white/60 transition-colors">
              <YoutubeIcon />
            </a>
          </div>

          <p className="text-white/20 text-sm flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> • {year}
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
            { name: "Sfile.mobi", url: "https://sfile.mobi/download/example-id", icon: "📥" },
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
    <main className="min-h-screen bg-[#060608] overflow-x-hidden">
      <Hero />
      <Features />
      <DownloadSection appData={appData} onShowGuide={() => setShowInstallGuide(true)} />
      <Changelog changelog={appData.changelog} version={appData.version} />
      <Footer />

      {showInstallGuide && <InstallGuideModal onClose={() => setShowInstallGuide(false)} />}
    </main>
  );
}
