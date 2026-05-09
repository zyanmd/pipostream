// lib/api.js
const API_BASE_URL = 'https://api.pipinipon.site/api';

export const versionAPI = {
  /**
   * Get current app version information
   * @returns {Promise<Object>} Version data
   */
  getVersion: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/version`);
      const data = await response.json();
      
      if (data.success) {
        return {
          success: true,
          version: data.version,
          build_date: data.build_date,
          build_number: data.build_number,
          force_update: data.force_update,
          minimum_version: data.minimum_version,
          update_url: data.update_url,
          file_size: data.file_size,
          release_notes: data.release_notes,
          changelog: data.changelog || []
        };
      }
      throw new Error('Failed to fetch version');
    } catch (error) {
      console.error('Error fetching version:', error);
      return {
        success: false,
        error: error.message
      };
    }
  },

  /**
   * Check if update is needed
   * @param {string} currentVersion - Current app version
   * @returns {Promise<Object>}
   */
  checkUpdate: async (currentVersion) => {
    try {
      const response = await fetch(`${API_BASE_URL}/version/check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ client_version: currentVersion })
      });
      return await response.json();
    } catch (error) {
      console.error('Error checking update:', error);
      return { success: false, error: error.message };
    }
  },

  /**
   * Get direct download link
   * @returns {string} Download URL
   */
  getDownloadUrl: () => {
    return `${API_BASE_URL}/version/download`;
  }
};

// Default fallback data if API fails
export const DEFAULT_VERSION_DATA = {
  version: "2.0.9",
  build_date: "2026-05-08 00:00:00",
  build_number: 10,
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