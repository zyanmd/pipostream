// components/DownloadSection.tsx
"use client";

import { useState } from "react";
import { AppData } from "@/lib/api";
import { Download, Copy, Check, ExternalLink, Smartphone } from "lucide-react";

interface DownloadSectionProps {
  appData: AppData;
  onShowGuide: () => void;
}

export default function DownloadSection({ appData, onShowGuide }: DownloadSectionProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
            <Download className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-xs font-medium text-violet-400 tracking-wide">UNDUH SEKARANG</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent mb-4">
            Download PipoStream
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Tersedia untuk perangkat Android. Download versi terbaru dan nikmati streaming tanpa batas.
          </p>
        </div>

        {/* Version Info Chip */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="text-white/40 text-sm">Versi</span>
            <span className="text-white font-semibold">{appData.version}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="text-white/40 text-sm">Ukuran</span>
            <span className="text-white font-semibold">{appData.file_size}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="text-white/40 text-sm">Build</span>
            <span className="text-white font-semibold">{appData.build_date.split(' ')[0]}</span>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {appData.download_links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-0.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/25"
            >
              <div className="relative bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-4 flex items-center justify-center gap-3">
                <span className="text-2xl filter drop-shadow-lg">{link.icon}</span>
                <div className="text-left">
                  <p className="text-white/70 text-xs">Download via</p>
                  <p className="text-white font-bold text-lg">{link.name}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white transition-colors ml-2" />
              </div>
            </a>
          ))}
        </div>

        {/* Copy Link Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                readOnly
                value={appData.download_links[0]?.url || ''}
                className="w-full bg-black/40 text-white/60 text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-violet-500/50 transition-colors pr-10"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <span className="text-white/30 text-xs">🔒</span>
              </div>
            </div>
            <button
              onClick={() => handleCopyLink(appData.download_links[0]?.url || '')}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm font-medium transition-all duration-200"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              {copied ? "Tersalin!" : "Salin Link"}
            </button>
          </div>
        </div>

        {/* Install Guide Button */}
        <div className="text-center">
          <button
            onClick={onShowGuide}
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200 group"
          >
            <Smartphone className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>📱 Panduan Install APK</span>
            <span className="text-white/30">→</span>
          </button>
        </div>

        {/* Release Notes */}
        {appData.release_notes && (
          <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">📝</span>
              <h3 className="text-white font-semibold">Release Notes</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">{appData.release_notes}</p>
          </div>
        )}
      </div>
    </section>
  );
}