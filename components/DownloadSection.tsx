import { Download, Smartphone, HardDrive, Info, Calendar, AlertCircle } from "lucide-react";

interface DownloadSectionProps {
  appData: any;
  onShowGuide: () => void;
}

export default function DownloadSection({ appData, onShowGuide }: DownloadSectionProps) {
  const handleDownload = () => {
    // Buat link download APK
    const downloadUrl = "/api/downloads/2.0.1.apk";
    window.location.href = downloadUrl;
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-purple-500/30 shadow-2xl animate-slide-up">
          <div className="text-center mb-8">
            <Smartphone className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">Download Sekarang</h2>
            <p className="text-gray-400">Tersedia khusus untuk Android</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-black/30 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <HardDrive className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Ukuran File</span>
              </div>
              <p className="text-white text-2xl font-bold">{appData.file_size}</p>
            </div>
            <div className="bg-black/30 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Versi Terbaru</span>
              </div>
              <p className="text-white text-2xl font-bold">{appData.version}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={handleDownload}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-lg"
            >
              <Download className="w-5 h-5" />
              Download PipoStream APK
            </button>
            
            <button
              onClick={onShowGuide}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2"
            >
              <Info className="w-4 h-4" />
              Panduan Install
            </button>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-yellow-200 text-sm">
              Aplikasi hanya tersedia untuk Android. Pastikan mengizinkan install dari sumber tidak dikenal di pengaturan keamanan device Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}   