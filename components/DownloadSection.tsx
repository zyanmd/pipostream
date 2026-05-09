// components/DownloadSection.tsx
"use client";

import { useState } from "react";
import { AppData } from "@/lib/api";

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
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Download PipoStream
          </h2>
          <p className="text-gray-300 text-lg">
            Versi {appData.version} • {appData.file_size}
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Dibangun pada: {appData.build_date}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {appData.download_links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white font-semibold py-4 px-6 rounded-xl transition transform hover:scale-105"
            >
              <span className="text-2xl">{link.icon}</span>
              <span>Download via {link.name}</span>
            </a>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onShowGuide}
            className="text-purple-400 hover:text-purple-300 underline text-sm"
          >
            📱 Panduan Install APK
          </button>
        </div>

        <div className="mt-8 p-4 bg-white/5 rounded-lg">
          <p className="text-gray-300 text-sm text-center mb-2">
            💡 Atau salin link download:
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={appData.download_links[0]?.url || ''}
              className="flex-1 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg border border-gray-700 focus:outline-none"
            />
            <button
              onClick={() => handleCopyLink(appData.download_links[0]?.url || '')}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm font-medium transition"
            >
              {copied ? "Copied! ✓" : "Copy"}
            </button>
          </div>
        </div>

        {appData.release_notes && (
          <div className="mt-8 p-4 bg-white/5 rounded-lg">
            <h3 className="text-white font-semibold mb-2">📝 Release Notes</h3>
            <p className="text-gray-300 text-sm">{appData.release_notes}</p>
          </div>
        )}
      </div>
    </section>
  );
}