import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// API Response Types
export interface ApiLocationData {
  location: string;
  count: number;
}

export interface ApiGuestMentionsSummary {
  totalMentions: number;
  topLocation: string;
  averageMentionsPerLocation: number;
}

export interface ApiGuestMentionsFilters {
  dateRange: string;
  location: string;
  category: string;
}

export interface ApiGuestMentionsResponse {
  success: boolean;
  timestamp: string;
  path: string;
  data: {
    categories: string[];
    selectedCategory: string;
    locationData: ApiLocationData[];
    summary: ApiGuestMentionsSummary;
    filters: ApiGuestMentionsFilters;
  };
}

// Component Data Types
export interface GuestMentionData {
  location: string;
  value: number;
}

export interface GuestMentionsState {
  // Raw API Data
  apiData: ApiGuestMentionsResponse | null;
  
  // Transformed Data for Component
  chartData: GuestMentionData[];
  categories: string[];
  selectedCategory: string;
  summary: ApiGuestMentionsSummary | null;
  filters: ApiGuestMentionsFilters | null;
  
  // UI State
  selectedDateRange: string;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchGuestMentionsData: (dateRange?: string, category?: string) => Promise<void>;
  setSelectedDateRange: (dateRange: string) => void;
  setSelectedCategory: (category: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  
  // Data transformation helpers
  transformApiData: (apiData: ApiGuestMentionsResponse) => void;
}

// Data transformation helper
const transformApiData = (apiData: ApiGuestMentionsResponse): GuestMentionData[] => {
  return apiData.data.locationData.map(item => ({
    location: item.location,
    value: item.count,
  }));
};

export const useGuestMentionsStore = create<GuestMentionsState>()(
  devtools(
    (set, get) => ({
      // Initial state
      apiData: null,
      chartData: [],
      categories: ["Cleanliness", "Lack of cleanliness", "Noise complaints", "Maintenance problems"],
      selectedCategory: "Cleanliness",
      summary: null,
      filters: null,
      selectedDateRange: '14d',
      isLoading: false,
      error: null,

      // Data transformation
      transformApiData: (apiData) => {
        set({
          apiData,
          chartData: transformApiData(apiData),
          categories: apiData.data.categories,
          selectedCategory: apiData.data.selectedCategory,
          summary: apiData.data.summary,
          filters: apiData.data.filters,
        }, false, 'transformApiData');
      },

      // API Actions
      fetchGuestMentionsData: async (dateRange = '14d', category = 'Cleanliness') => {
        const state = get();
        
        try {
          set({ isLoading: true, error: null }, false, 'fetchGuestMentionsData/start');
          
          // Build URL with parameters
          const baseUrl = import.meta.env.VITE_API_BASE_URL || window.location.origin;
          const url = new URL('/api/reviews/guest-mentions', baseUrl);
          url.searchParams.set('dateRange', dateRange);
          url.searchParams.set('category', category);
          
          const response = await fetch(url.toString());
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const apiData: ApiGuestMentionsResponse = await response.json();
          
          if (!apiData.success) {
            throw new Error('API returned unsuccessful response');
          }
          
          // Transform and store the data
          get().transformApiData(apiData);
          
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Failed to fetch guest mentions data';
          set({ error: errorMessage }, false, 'fetchGuestMentionsData/error');
          console.error('Failed to fetch guest mentions data:', error);
        } finally {
          set({ isLoading: false }, false, 'fetchGuestMentionsData/complete');
        }
      },

      // UI Actions
      setSelectedDateRange: (dateRange) => {
        const state = get();
        set({ selectedDateRange: dateRange }, false, 'setSelectedDateRange');
        // Automatically refetch data when date range changes
        get().fetchGuestMentionsData(dateRange, state.selectedCategory);
      },
      
      setSelectedCategory: (category) => {
        const state = get();
        set({ selectedCategory: category }, false, 'setSelectedCategory');
        // Automatically refetch data when category changes
        get().fetchGuestMentionsData(state.selectedDateRange, category);
      },
      
      setLoading: (loading) => 
        set({ isLoading: loading }, false, 'setLoading'),
      
      setError: (error) => 
        set({ error }, false, 'setError'),
    }),
    {
      name: 'guest-mentions-store', // unique name for devtools
    }
  )
);
