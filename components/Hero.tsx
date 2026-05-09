// components/Hero.tsx
"use client";

import { Play, Shield, Zap, Sparkles, ArrowRight, Download, Tv, Film } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 px-4 min-h-[90vh] flex items-center">
      {/* Background Effect - Enhanced */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-violet-950/20 to-[#060608]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-600 rounded-full filter blur-[120px] opacity-30 animate-pulse-slow" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-indigo-600 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow animation-delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full filter blur-[150px] animate-pulse-slow" />
      
      {/* Grid pattern overlay - menggunakan inline style atau className */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C27B0' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />
      
      <div className="container mx-auto relative z-10 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-violet-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-violet-500/30 mb-6 group hover:border-violet-400/50 transition-all duration-300">
            <Zap className="w-4 h-4 text-violet-400 group-hover:rotate-12 transition-transform" />
            <span className="text-violet-300 text-sm font-medium">Now Streaming • Updated Daily</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-white">Pipo</span>
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Stream
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8 leading-relaxed">
            Streaming Anime, Donghua, Komik & Novel Terbaru dengan Kualitas HD, 
            Subtitle Indonesia, dan Update Setiap Hari!
          </p>
          
          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <Play className="w-4 h-4 text-violet-400" />
              <span>1000+ Anime</span>
            </div>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <Tv className="w-4 h-4 text-violet-400" />
              <span>500+ Donghua</span>
            </div>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <Film className="w-4 h-4 text-violet-400" />
              <span>200+ Movies</span>
            </div>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <Shield className="w-4 h-4 text-violet-400" />
              <span>No Ads</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02]"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Download Sekarang
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl text-white/80 hover:text-white font-semibold transition-all duration-300 border border-white/10 hover:border-violet-500/30"
            >
              <Sparkles className="w-4 h-4" />
              Lihat Fitur
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center">
              <div className="w-1 h-2 bg-white/40 rounded-full mt-2 animate-scroll-dot" />
            </div>
          </div>
        </div>
      </div>

      {/* Add global styles to tailwind.config.js or globals.css instead */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes scroll-dot {
          0%, 100% {
            opacity: 0.4;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(4px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-scroll-dot {
          animation: scroll-dot 1.5s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}