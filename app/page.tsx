"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadSection from "@/components/DownloadSection";
import Changelog from "@/components/Changelog";
import Footer from "@/components/Footer";

const appData = {
  version: "1.0.1",
  build_date: "2026-04-25 10:00:00",
  force_update: false,
  minimum_version: "1.0.0",
  update_url: "",
  changelog: [
    {
      version: "1.0.1",
      date: "2026-04-25",
      changes: "Initial release dengan fitur streaming anime dan donghua"
    }
  ],
  file_size: "52 MB",
  release_notes: "Versi awal aplikasi dengan koleksi lengkap anime dan donghua terbaru!"
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
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowInstallGuide(false)}>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl max-w-md w-full p-6 border border-purple-500/30 animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Panduan Install</h3>
              <button onClick={() => setShowInstallGuide(false)} className="text-gray-400 hover:text-white">✕</button>
            </div>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <span className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <p>Download file APK PipoStream</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <p>Buka file APK yang sudah di download</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <p>Izinkan install dari sumber tidak dikenal (Settings → Security)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <p>Klik Install dan tunggu proses selesai</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                <p>Buka aplikasi dan nikmati streaming anime & donghua!</p>
              </div>
            </div>
            <button onClick={() => setShowInstallGuide(false)} className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl transition">
              Tutup
            </button>
          </div>
        </div>
      )}
    </main>
  );
}