"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadSection from "@/components/DownloadSection";
import Changelog from "@/components/Changelog";
import Footer from "@/components/Footer";

const appData = {
  version: "2.0.6",
  build_date: "2026-04-30 00:00:00",
  force_update: true,
  minimum_version: "2.0.4",
  update_url: "https://www.mediafire.com/file/n2pj37wpsjlaw6x/2.0.6.apk/file",
  file_size: "4.5 MB",
  release_notes: "Update versi 2.0.6: Modernisasi tampilan card anime dan donghua, optimasi fullscreen video, serta berbagai perbaikan bug dan peningkatan performa aplikasi.",
  changelog: [
    {
      version: "2.0.6",
      date: "2026-04-30",
      changes: "🎨 Modernisasi tampilan card anime | 📱 Optimasi fullscreen video (status bar auto hide) | 🐛 Fix berbagai bug | ⚡ Peningkatan performa aplikasi"
    },
    {
      version: "2.0.5",
      date: "2026-04-27",
      changes: "⚡ Perbaikan loading screen dengan loading bar | 🎨 Penambahan tema gelap/terang pada seluruh halaman | 📱 Optimasi tampilan mobile potrait | 🐛 Fix berbagai bug dan peningkatan performa"
    },
    {
      version: "2.0.4",
      date: "2026-04-27",
      changes: "📚 Menambahkan fitur Komik (Manga, Manhwa, Manhua) | 🔖 Bookmark komik | 📖 History baca komik | 🎨 Perbaikan tema gelap/terang | 🐛 Fix berbagai bug"
    },
    {
      version: "2.0.3",
      date: "2026-04-26",
      changes: "📚 Fitur Komik (Manga/Manhwa/Manhua) | 🔖 Bookmark Komik | 📖 History Baca Komik | 🎨 Perbaikan Tema Gelap/Terang | 🐛 Fix Berbagai Bug"
    },
    {
      version: "2.0.2",
      date: "2026-04-25",
      changes: "🔧 Fullscreen Sembunyikan Status Bar & Navbar | 🎬 Perbaikan Prev/Next Episode | 📡 Server Selector"
    },
    {
      version: "2.0.1",
      date: "2026-04-25",
      changes: "🎬 Fullscreen Auto-Rotate ke Landscape | ⭐ Hapus Like/Dislike | 📱 Navbar Floating"
    },
    {
      version: "2.0.0",
      date: "2026-04-24",
      changes: "👋 Halaman Welcome untuk User Baru | 🔄 Sistem Update Otomatis"
    },
    {
      version: "1.0.1",
      date: "2026-04-23",
      changes: "🚀 Initial Release | Streaming Anime & Donghua Subtitle Indonesia"
    }
  ],
  download_links: [
    {
      name: "MediaFire",
      url: "https://www.mediafire.com/file/n2pj37wpsjlaw6x/2.0.6.apk/file",
      icon: "🔥"
    },
    {
      name: "Direct Download",
      url: "https://api.pipinipon.site/downloads/2.0.6.apk",
      icon: "⚡"
    }
  ]
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
              <h3 className="text-xl font-bold text-white">📱 Panduan Install</h3>
              <button onClick={() => setShowInstallGuide(false)} className="text-gray-400 hover:text-white text-2xl leading-none">×</button>
            </div>
            <div className="space-y-3 text-gray-300">
              {[
                "Download APK PipoStream versi terbaru",
                "Buka file APK yang sudah didownload",
                "Izinkan install dari sumber tidak dikenal (Jika muncul peringatan)",
                "Klik Install",
                "Buka & Nikmati Streaming Anime, Donghua, & Komik!"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
            <button onClick={() => setShowInstallGuide(false)} className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white font-semibold py-2.5 rounded-xl transition">
              Tutup
            </button>
          </div>
        </div>
      )}
    </main>
  );
}