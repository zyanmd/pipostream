// app/page.js atau pages/index.js
"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadSection from "@/components/DownloadSection";
import Changelog from "@/components/Changelog";
import Footer from "@/components/Footer";
import { versionAPI, DEFAULT_VERSION_DATA } from "@/lib/api";

export default function Home() {
  const [showInstallGuide, setShowInstallGuide] = useState(false);
  const [appData, setAppData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchVersionData = async () => {
      try {
        const result = await versionAPI.getVersion();
        
        if (result.success) {
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
                url: result.update_url || DEFAULT_VERSION_DATA.download_links[0].url,
                icon: "🔥"
              },
              {
                name: "Direct Download",
                url: versionAPI.getDownloadUrl(),
                icon: "⚡"
              }
            ]
          });
        } else {
          // Use fallback data if API fails
          setAppData(DEFAULT_VERSION_DATA);
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching version:", err);
        setAppData(DEFAULT_VERSION_DATA);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchVersionData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto"></div>
          <p className="text-white mt-4">Memuat informasi versi...</p>
        </div>
      </div>
    );
  }

  if (!appData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-lg">Gagal memuat data. Silakan refresh halaman.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-6 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <Features />
      <DownloadSection appData={appData} onShowGuide={() => setShowInstallGuide(true)} />
      <Changelog changelog={appData.changelog} version={appData.version} />
      <Footer />
      
      {/* Error banner if using fallback data */}
      {error && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:max-w-sm bg-yellow-500/90 backdrop-blur-sm text-white p-3 rounded-lg text-sm z-50">
          <p className="flex items-center gap-2">
            <span>⚠️</span> 
            Menggunakan data offline. Koneksi ke server bermasalah.
          </p>
        </div>
      )}
      
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
                "Buka & Nikmati Streaming Anime, Donghua, Komik & Novel!"
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