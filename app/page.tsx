"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadSection from "@/components/DownloadSection";
import Changelog from "@/components/Changelog";
import Footer from "@/components/Footer";

const appData = {
  version: "2.0.1",
  build_date: "2026-04-25 10:00:00",
  force_update: true,
  minimum_version: "2.0.1",
  update_url: "https://www.mediafire.com/file/2e6l8lmy2brwjxy/2.0.1.apk/file",
  changelog: [
    {
      version: "2.0.1",
      date: "2026-04-25",
      changes: "🎬 Fullscreen Auto-Rotate | ⭐ Hapus Like/Dislike | 📱 Navbar Floating"
    },
    {
      version: "2.0.0",
      date: "2026-04-24",
      changes: "👋 Halaman Welcome | 🔄 Auto Update System"
    },
    {
      version: "1.0.1",
      date: "2026-04-23",
      changes: "🚀 Initial Release | Streaming Anime & Donghua"
    }
  ],
  file_size: "52 MB",
  release_notes: "Update performa & fitur terbaru!"
};

export default function Home() {
  const [showInstallGuide, setShowInstallGuide] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <Features />
      <DownloadSection appData={appData} onShowGuide={() => setShowInstallGuide(true)} />
      <Changelog changelog={appData.changelog} version={appData.version} />
      <Footer />
      
      {/* Modal Install Guide */}
      {showInstallGuide && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowInstallGuide(false)}>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl max-w-md w-full p-6 border border-purple-500/30" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Panduan Install</h3>
              <button onClick={() => setShowInstallGuide(false)} className="text-gray-400 hover:text-white text-2xl leading-none">×</button>
            </div>
            <div className="space-y-3 text-gray-300">
              {[
                "Download APK PipoStream",
                "Buka file APK yang sudah didownload",
                "Izinkan install dari sumber tidak dikenal",
                "Klik Install",
                "Buka & Nikmati Streaming!"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
            <button onClick={() => setShowInstallGuide(false)} className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 rounded-xl transition">
              Tutup
            </button>
          </div>
        </div>
      )}
    </main>
  );
}