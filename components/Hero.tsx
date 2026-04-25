    import { Play, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 px-4">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-600 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow" />
      
      <div className="container mx-auto relative z-10 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-purple-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30 mb-6">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Version 2.0.1</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Pipo<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Stream</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Streaming Anime & Donghua Terbaru dengan Kualitas HD, Subtitle Indonesia, 
            dan Update Setiap Hari!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Play className="w-4 h-4 text-blue-400" />
              <span className="text-white text-sm">HD Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}