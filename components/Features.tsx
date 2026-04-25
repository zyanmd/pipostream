import { Film, Clock, Server, Download, Tv, Languages } from "lucide-react";

const features = [
  {
    icon: Film,
    title: "Koleksi Lengkap",
    description: "Ribuan judul anime dan donghua dari berbagai genre, dari klasik hingga terbaru"
  },
  {
    icon: Clock,
    title: "Update Real-time",
    description: "Episode terbaru langsung tersedia saat rilis di Jepang & China"
  },
  {
    icon: Server,
    title: "Multi Server",
    description: "Pilihan server untuk pengalaman streaming tanpa buffering"
  },
  {
    icon: Download,
    title: "Download Episode",
    description: "Tonton offline dengan fitur download episode favoritmu"
  },
  {
    icon: Tv,
    title: "Dukungan Chromecast",
    description: "Tonton di layar TV dengan mudah"
  },
  {
    icon: Languages,
    title: "Multi Subtitle",
    description: "Subtitle Indonesia, Inggris, dan pilihan bahasa lainnya"
  }
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-black/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 animate-fade-in">
          Fitur Unggulan
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Nikmati pengalaman streaming terbaik dengan berbagai fitur canggih
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 animate-slide-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}