// lib/api.ts
const API_BASE_URL = 'https://api.pipinipon.site/api';

// Type definitions
export interface ChangelogItem {
  version: string;
  date: string;
  changes: string;
}

export interface DownloadLink {
  name: string;
  url: string;
  icon: string;
}

export interface VersionData {
  success: boolean;
  version: string;
  build_date: string;
  build_number: number;
  force_update: boolean;
  minimum_version: string;
  update_url: string;
  file_size: string;
  release_notes: string;
  changelog: ChangelogItem[];
}

export interface AppData {
  version: string;
  build_date: string;
  force_update: boolean;
  minimum_version: string;
  update_url: string;
  file_size: string;
  release_notes: string;
  changelog: ChangelogItem[];
  download_links: DownloadLink[];
}

export const versionAPI = {
  /**
   * Get current app version information
   */
  getVersion: async (): Promise<VersionData> => {
    try {
      const response = await fetch(`${API_BASE_URL}/version`);
      const data = await response.json();
      
      if (data && data.success === true) {
        return {
          success: true,
          version: data.version || '2.0.9',
          build_date: data.build_date || '',
          build_number: data.build_number || 10,
          force_update: data.force_update || false,
          minimum_version: data.minimum_version || '2.0.9',
          update_url: data.update_url || '',
          file_size: data.file_size || '4.5 MB',
          release_notes: data.release_notes || '',
          changelog: data.changelog || []
        };
      }
      
      // If API returns data without success property but has version
      if (data && data.version) {
        return {
          success: true,
          version: data.version,
          build_date: data.build_date || '',
          build_number: data.build_number || 1,
          force_update: data.force_update || false,
          minimum_version: data.minimum_version || data.version,
          update_url: data.update_url || '',
          file_size: data.file_size || '4.5 MB',
          release_notes: data.release_notes || '',
          changelog: data.changelog || []
        };
      }
      
      return { 
        success: false, 
        version: '2.0.9',
        build_date: '',
        build_number: 10,
        force_update: false,
        minimum_version: '2.0.9',
        update_url: '',
        file_size: '4.5 MB',
        release_notes: '',
        changelog: []
      };
    } catch (error) {
      console.error('Error fetching version:', error);
      return { 
        success: false, 
        version: '2.0.9',
        build_date: '',
        build_number: 10,
        force_update: false,
        minimum_version: '2.0.9',
        update_url: '',
        file_size: '4.5 MB',
        release_notes: '',
        changelog: []
      };
    }
  },

  /**
   * Check if update is needed
   */
  checkUpdate: async (currentVersion: string): Promise<{ success: boolean; needs_update?: boolean; is_obsolete?: boolean; current_version?: string; latest_version?: string; force_update?: boolean; update_url?: string; file_size?: string; changelog?: ChangelogItem[]; message?: string; error?: string }> => {
    try {
      const response = await fetch(`${API_BASE_URL}/version/check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ client_version: currentVersion })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error checking update:', error);
      return { success: false, error: (error as Error).message };
    }
  },

  /**
   * Get direct download link
   */
  getDownloadUrl: (): string => {
    return `${API_BASE_URL}/version/download`;
  }
};

// Default fallback data if API fails
export const DEFAULT_VERSION_DATA: AppData = {
  version: "2.0.9",
  build_date: "2026-05-08 00:00:00",
  force_update: false,
  minimum_version: "2.0.9",
  update_url: "https://www.mediafire.com/file/b1yhp72cnvotdt7/2.0.9.apk/file",
  file_size: "4.5 MB",
  release_notes: "Update versi 2.0.9: Menambahkan fitur Novel (Light Novel & Web Novel) dari Sakuranovel, lengkap dengan bookmark dan history baca, perbaikan tampilan poster novel dengan proxy Cloudflare, serta peningkatan performa aplikasi secara keseluruhan.",
  changelog: [
    {
      version: "2.0.9",
      date: "2026-05-08",
      changes: "📚 Menambahkan fitur Novel (Light Novel & Web Novel) | 🔖 Bookmark novel | 📖 History baca novel | 🎨 Perbaikan tampilan poster novel dengan proxy Cloudflare | 🐛 Fix berbagai bug dan peningkatan performa"
    },
    {
      version: "2.0.8",
      date: "2026-05-07",
      changes: "🎨 Modernisasi tampilan jadwal tayang | 📱 Perbaikan tampilan schedule untuk mobile | ⚡ Optimasi loading schedule | 🐛 Fix bug pada halaman schedule | ✨ Peningkatan performa aplikasi"
    },
    {
      version: "2.0.7",
      date: "2026-05-07",
      changes: "🏷️ Label NEW untuk episode 24 jam terakhir | 📅 Label TODAY untuk update hari ini | 🎨 Perbaikan tampilan history dan ongoing | 🐛 Fix berbagai bug dan peningkatan performa"
    },
    {
      version: "2.0.6",
      date: "2026-04-30",
      changes: "🎨 Modernisasi tampilan card anime | 📱 Optimasi fullscreen video (status bar auto hide) | 🐛 Fix berbagai bug | ⚡ Peningkatan performa aplikasi"
    },
    {
      version: "2.0.5",
      date: "2026-04-27",
      changes: "⚡ Perbaikan loading screen dengan loading bar | 🎨 Penambahan tema gelap/terang pada seluruh halaman | 📱 Optimasi tampilan mobile potrait | 🐛 Fix berbagai bug dan peningkatan performa"
    },
    {
      version: "2.0.4",
      date: "2026-04-27",
      changes: "📚 Menambahkan fitur Komik (Manga, Manhwa, Manhua) | 🔖 Bookmark komik | 📖 History baca komik | 🎨 Perbaikan tema gelap/terang | 🐛 Fix berbagai bug"
    }
  ],
  download_links: [
    {
      name: "MediaFire",
      url: "https://www.mediafire.com/file/b1yhp72cnvotdt7/2.0.9.apk/file",
      icon: "🔥"
    },
    {
      name: "Direct Download",
      url: "https://api.pipinipon.site/api/version/download",
      icon: "⚡"
    }
  ]
};