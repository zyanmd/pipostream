// components/Changelog.tsx
"use client";

import { useState } from "react";
import { ChangelogItem } from "@/lib/api";

interface ChangelogProps {
  changelog: ChangelogItem[];
  version: string;
}

export default function Changelog({ changelog, version }: ChangelogProps) {
  const [showAll, setShowAll] = useState<boolean>(false);
  
  const displayedChangelog = showAll ? changelog : changelog.slice(0, 5);

  if (!changelog || changelog.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 bg-white/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Riwayat Update
          </h2>
          <p className="text-gray-300">
            Perubahan dan peningkatan pada setiap versi PipoStream
          </p>
        </div>

        <div className="space-y-4">
          {displayedChangelog.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${
                item.version === version
                  ? "bg-purple-600/20 border border-purple-500/50"
                  : "bg-white/5"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400 font-bold">v{item.version}</span>
                  {item.version === version && (
                    <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">
                      Terbaru
                    </span>
                  )}
                </div>
                <span className="text-gray-400 text-sm">{item.date}</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{item.changes}</p>
            </div>
          ))}
        </div>

        {changelog.length > 5 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-purple-400 hover:text-purple-300 text-sm"
            >
              {showAll ? "Tampilkan lebih sedikit ↑" : `Lihat ${changelog.length - 5} versi sebelumnya ↓`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}