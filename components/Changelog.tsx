// components/Changelog.tsx
"use client";

import { useState } from "react";
import { ChangelogItem } from "@/lib/api";
import { History, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

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

  // Get latest version info
  const latestVersion = changelog[0];

  return (
    <section className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-violet-500/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
            <History className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-xs font-medium text-violet-400 tracking-wide">PERUBAHAN TERBARU</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent mb-4">
            Riwayat Update
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Pantau perkembangan dan fitur-fitur baru yang hadir di setiap versi PipoStream
          </p>
        </div>

        {/* Latest Version Highlight */}
        {latestVersion && latestVersion.version === version && (
          <div className="mb-8 p-5 bg-gradient-to-r from-violet-600/10 to-indigo-600/10 rounded-2xl border border-violet-500/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-xl bg-violet-600/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <span className="text-violet-400 font-bold">v{latestVersion.version}</span>
                <span className="text-white/40 text-sm ml-2">{latestVersion.date}</span>
              </div>
              <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-violet-600/30 text-violet-300 border border-violet-500/30">
                Terbaru
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">{latestVersion.changes}</p>
          </div>
        )}

        {/* Changelog List */}
        <div className="space-y-3">
          {displayedChangelog.map((item, index) => {
            const isLatest = item.version === version;
            if (isLatest && index === 0) return null; // Skip if already shown above
            
            return (
              <div
                key={index}
                className="group relative p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-violet-500/30 transition-all duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-8 bg-gradient-to-b from-violet-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-wrap items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-violet-400 font-bold text-sm">v{item.version}</span>
                    {item.version === version && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-violet-600/40 text-violet-300 border border-violet-500/30">
                        Current
                      </span>
                    )}
                  </div>
                  <span className="text-white/40 text-xs">{item.date}</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {item.changes}
                </p>
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        {changelog.length > 5 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-sm font-medium transition-all duration-200 border border-white/5 hover:border-violet-500/30"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Tampilkan lebih sedikit
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