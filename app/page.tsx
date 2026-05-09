// app/page.tsx atau pages/index.tsx
"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadSection from "@/components/DownloadSection";
import Changelog from "@/components/Changelog";
import Footer from "@/components/Footer";
import { versionAPI, AppData } from "@/lib/api";

/* ─── Loading Screen ─── */
function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#060608] flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        {/* Animated logo mark */}
        <div className="relative w-14 h-14">
          <span className="absolute inset-0 rounded-2xl bg-violet-500/20 animate-ping" />
          <span className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-600/30 border border-violet-500/40 text-2xl">
            🎬
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="font-syne font-semibold text-white text-sm tracking-widest uppercase">
            PipoStream
          </p>
          <p className="text-xs text-white/40">Memuat informasi versi…</p>
        </div>
        {/* Subtle progress bar */}
        <div className="w-32 h-0.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full bg-violet-500 rounded-full animate-[loading_1.4s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}

/* ─── Error Screen ─── */
function ErrorScreen({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="min-h-screen bg-[#060608] flex items-center justify-center p-6">
      <div className="max-w-sm w-full text-center space-y-6">
        <div className="text-4xl">⚡</div>
        <div className="space-y-2">
          <h2 className="font-syne font-bold text-white text-xl">Gagal Memuat Data</h2>
          <p className="text-white/50 text-sm leading-relaxed">
            Tidak dapat terhubung ke server. Periksa koneksi internet kamu dan coba lagi.
          </p>
        </div>
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-xl transition-colors duration-200"
        >
          <span>↺</span> Coba Lagi
        </button>
      </div>
    </div>
  );
}

/* ─── Offline Banner ─── */
function OfflineBanner({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm">
      <div className="flex items-center gap-3 bg-amber-500/10 border border-amber-500/25 backdrop-blur-xl rounded-2xl px-4 py-3 shadow-xl">
        <span className="text-amber-400 text-base shrink-0">⚠</span>
        <p className="text-amber-200/80 text-xs leading-snug flex-1">
          Koneksi server bermasalah. Silakan coba lagi nanti.
        </p>
        <button
          onClick={onDismiss}
          className="text-amber-400/60 hover:text-amber-400 transition-colors text-lg leading-none shrink-0"
          aria-label="Tutup"
        >
          ×
        </button>
      </div>
    </div>
  );
}

/* ─── Install Guide Modal ─── */
const INSTALL_STEPS = [
  "Download APK PipoStream versi terbaru",
  "Buka file APK yang sudah didownload",
  'Izinkan "Install dari sumber tidak dikenal" jika muncul peringatan',
  "Klik Install dan tunggu selesai",
  "Buka & nikmati Anime, Donghua, Komik & Novel!",
];

function InstallGuideModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-end sm:items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#0f0f13] border border-white/10 rounded-3xl w-full max-w-md p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-violet-600/20 flex items-center justify-center text-base">
              📱
            </div>
            <h3 className="font-syne font-bold text-white text-lg">Panduan Install</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200 text-xl leading-none"
            aria-label="Tutup modal"
          >
            ×
          </button>
        </div>

        {/* Steps */}
        <ol className="space-y-3 mb-6">
          {INSTALL_STEPS.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-xs font-bold text-white">
                {i + 1}
              </span>
              <p className="text-white/70 text-sm leading-relaxed pt-0.5">{step}</p>
            </li>
          ))}
        </ol>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-4" />

        <button
          onClick={onClose}
          className="w-full py-3 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-syne font-semibold text-sm tracking-wide transition-colors duration-200"
        >
          Mengerti, Tutup
        </button>
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function Home() {
  const [showInstallGuide, setShowInstallGuide] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [appData, setAppData] = useState<AppData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchVersionData = async () => {
    setLoading(true);
    setError(false);
    
    try {
      const result = await versionAPI.getVersion();

      if (result?.success === true && result.version) {
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
            {
              name: "MediaFire",
              url: result.update_url,
              icon: "🔥",
            },
            {
              name: "Direct Download",
              url: versionAPI.getDownloadUrl(),
              icon: "⚡",
            },
          ],
        });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Error fetching version:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVersionData();
  }, []);

  const handleRetry = () => {
    fetchVersionData();
  };

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen onRetry={handleRetry} />;
  if (!appData) return <ErrorScreen onRetry={handleRetry} />;

  return (
    <main className="min-h-screen bg-[#060608] overflow-x-hidden">
      <Hero />
      <Features />
      <DownloadSection appData={appData} onShowGuide={() => setShowInstallGuide(true)} />
      <Changelog changelog={appData.changelog} version={appData.version} />
      <Footer />

      {showBanner && <OfflineBanner onDismiss={() => setShowBanner(false)} />}
      {showInstallGuide && <InstallGuideModal onClose={() => setShowInstallGuide(false)} />}
    </main>
  );
}