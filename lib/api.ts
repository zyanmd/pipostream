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
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Check if API returned valid data
      if (data && data.success === true && data.version) {
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
      
      // If API response format is different (without success property)
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
      
      // If no valid data, throw error to trigger error state
      throw new Error('Invalid response from server');
      
    } catch (error) {
      console.error('Error fetching version:', error);
      // Return error state without fallback data
      return { 
        success: false, 
        version: '',
        build_date: '',
        build_number: 0,
        force_update: false,
        minimum_version: '',
        update_url: '',
        file_size: '',
        release_notes: '',
        changelog: []
      };
    }
  },

  /**
   * Check if update is needed
   */
  checkUpdate: async (currentVersion: string): Promise<{ 
    success: boolean; 
    needs_update?: boolean; 
    is_obsolete?: boolean; 
    current_version?: string; 
    latest_version?: string; 
    force_update?: boolean; 
    update_url?: string; 
    file_size?: string; 
    changelog?: ChangelogItem[]; 
    message?: string; 
    error?: string 
  }> => {
    try {
      const response = await fetch(`${API_BASE_URL}/version/check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ client_version: currentVersion })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
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