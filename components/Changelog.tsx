import { GitBranch, Calendar, Code } from "lucide-react";

interface ChangelogProps {
  changelog: Array<{
    version: string;
    date: string;
    changes: string;
  }>;
  version: string;
}

export default function Changelog({ changelog, version }: ChangelogProps) {
  return (
    <section className="py-20 px-4 bg-black/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <GitBranch className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-2">Riwayat Update</h2>
          <p className="text-gray-400">Perubahan terbaru pada aplikasi PipoStream</p>
        </div>
        
        <div className="space-y-4">
          {changelog.map((item, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-purple-500/20 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-bold text-lg">v{item.version}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{item.date}</span>
                </div>
              </div>
              <p className="text-gray-300">{item.changes}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center text-gray-500 text-sm">
          Update terakhir: {changelog[0].date}
        </div>
      </div>
    </section>
  );
}