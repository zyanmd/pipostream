// components/Features.tsx
"use client";

import { Film, Clock, Server, Download, Tv, Languages, Sparkles, Shield } from "lucide-react";

const features = [
  {
    icon: Film,
    title: "Koleksi Lengkap",
    description: "Ribuan judul anime, donghua, komik, dan novel dari berbagai genre, dari klasik hingga terbaru",
    gradient: "from-violet-500/20 to-indigo-500/20",
    iconGradient: "from-violet-400 to-indigo-400"
  },
  {
    icon: Clock,
    title: "Update Real-time",
    description: "Episode terbaru langsung tersedia saat rilis di Jepang, China, dan Korea",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconGradient: "from-amber-400 to-orange-400"
  },
  {
    icon: Server,
    title: "Multi Server",
    description: "Pilihan server untuk pengalaman streaming tanpa buffering dan kualitas terbaik",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconGradient: "from-emerald-400 to-teal-400"
  },
  {
    icon: Download,
    title: "Download & Bookmark",
    description: "Simpan episode favorit untuk ditonton offline dan tandai konten kesukaanmu",
    gradient: "from-rose-500/20 to-pink-500/20",
    iconGradient: "from-rose-400 to-pink-400"
  },
  {
    icon: Tv,
    title: "Multi Platform",
    description: "Nikmati streaming di smartphone Android dengan tampilan yang optimal",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconGradient: "from-blue-400 to-cyan-400"
  },
  {
    icon: Languages,
    title: "Subtitle Indonesia",
    description: "Semua konten dilengkapi subtitle bahasa Indonesia yang mudah dipahami",
    gradient: "from-purple-500/20 to-fuchsia-500/20",
    iconGradient: "from-purple-400 to-fuchsia-400"
  }
];

export default function Features() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-xs font-medium text-violet-400 tracking-wide">FITUR UNGGULAN</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent mb-4">
            Lebih dari Sekadar Streaming
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Nikmati pengalaman streaming terbaik dengan berbagai fitur canggih yang kami sediakan
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
              
              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.iconGradient} p-0.5 mb-5`}>
                <div className="w-full h-full rounded-xl bg-[#060608] flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}