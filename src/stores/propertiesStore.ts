import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// API Response Types (matching your API structure)
export interface ApiWorthyMention {
  category: string;
  rating: string;
}

export interface ApiProperty {
  id: string;
  imageUrl: string;
  name: string;
  location: string;
  badge: "Top rated" | "Guest favorite" | "Great for families" | null;
  totalReviews: number;
  worthyMentions: ApiWorthyMention[];
  goodReviewsPercentage: number;
  badReviewsPercentage: number;
}

export interface ApiAvailableFilters {
  locations: string[];
  ratingRanges: string[];
  channels: string[];
  lengthOfStay: string[];
  categories: string[];
}

export interface ApiPropertiesMetadata {
  totalProperties: number;
  filteredBy: string;
  availableFilters: ApiAvailableFilters;
}

export interface ApiPropertiesResponse {
  success: boolean;
  timestamp: string;
  path: string;
  data: {
    payload: ApiProperty[];
    metadata: ApiPropertiesMetadata;
  };
}

// Component Props Types (what components expect)
export interface PropertyCardProps {
  id: string;
  image: string;
  name: string;
  location: string;
  badge: {
    label: string;
    tone: "positive" | "primary" | "warning" | null;
  };
  totalReviews: number;
  mentions: Array<{
    label: string;
    score: string;
  }>;
  goodPercentage: number;
  badPercentage: number;
}

export interface PropertiesFilters {
  dateRange: string;
  rating: string;
  category: string;
  channel: string;
  search: string;
}

export interface PropertiesState {
  // Raw API Data
  apiData: ApiPropertiesResponse | null;
  
  // Transformed Data for Components
  properties: PropertyCardProps[];
  metadata: ApiPropertiesMetadata | null;
  availableFilters: ApiAvailableFilters | null;
  
  // UI State
  filters: PropertiesFilters;
  isLoading: boolean;
  error: string | null;
  viewMode: 'grid' | 'list';
  
  // Actions
  fetchProperties: (filters?: Partial<PropertiesFilters>) => Promise<void>;
  setFilters: (filters: Partial<PropertiesFilters>) => void;
  setViewMode: (mode: 'grid' | 'list') => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  
  // Debounced actions
  debouncedFetchProperties: (filters?: Partial<PropertiesFilters>) => void;
  
  // Data transformation helpers
  transformApiData: (apiData: ApiPropertiesResponse) => void;
}

// Data transformation helpers
const getBadgeTone = (badge: string | null): "positive" | "primary" | "warning" | null => {
  if (!badge) return null;
  switch (badge) {
    case "Top rated":
      return "positive";
    case "Guest favorite":
      return "primary";
    case "Great for families":
      return "warning";
    default:
      return null;
  }
};

const transformApiProperty = (apiProperty: ApiProperty): PropertyCardProps => ({
  id: apiProperty.id,
  image: apiProperty.imageUrl,
  name: apiProperty.name,
  location: apiProperty.location,
  badge: {
    label: apiProperty.badge || "",
    tone: getBadgeTone(apiProperty.badge)
  },
  totalReviews: apiProperty.totalReviews,
  mentions: apiProperty.worthyMentions.map(mention => ({
    label: mention.category,
    score: mention.rating
  })),
  goodPercentage: apiProperty.goodReviewsPercentage,
  badPercentage: apiProperty.badReviewsPercentage,
});

// Debounce utility
let debounceTimeout: NodeJS.Timeout | null = null;

export const usePropertiesStore = create<PropertiesState>()(
  devtools(
    (set, get) => ({
      // Initial state
      apiData: null,
      properties: [],
      metadata: null,
      availableFilters: null,
      filters: {
        dateRange: '14d',
        rating: 'all',
        category: 'all',
        channel: 'all',
        search: ''
      },
      isLoading: false,
      error: null,
      viewMode: 'grid',

      // Data transformation
      transformApiData: (apiData) => {
        const { data } = apiData;
        
        set({
          apiData,
          properties: data.payload.map(transformApiProperty),
          metadata: data.metadata,
          availableFilters: data.metadata.availableFilters,
        }, false, 'transformApiData');
      },

      // API Actions
      fetchProperties: async (newFilters) => {
        const state = get();
        const filters = { ...state.filters, ...newFilters };
        
        try {
          set({ isLoading: true, error: null }, false, 'fetchProperties/start');
          
          // Build URL with filter parameters
          const baseUrl = import.meta.env.VITE_API_BASE_URL || window.location.origin;
            const url = new URL('/api/properties', baseUrl);
          
          // Add filters as query parameters
          url.searchParams.set('dateRange', filters.dateRange);
          if (filters.rating !== 'all') {
            url.searchParams.set('rating', filters.rating);
          }
          if (filters.category !== 'all') {
            url.searchParams.set('category', filters.category);
          }
          if (filters.channel !== 'all') {
            url.searchParams.set('channel', filters.channel);
          }
          if (filters.search.trim()) {
            url.searchParams.set('search', filters.search.trim());
          }
          
          const response = await fetch(url.toString());
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const apiData: ApiPropertiesResponse = await response.json();
          
          if (!apiData.success) {
            throw new Error('API returned unsuccessful response');
          }
          
          // Transform and store the data
          get().transformApiData(apiData);
          
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Failed to fetch properties data';
          set({ error: errorMessage }, false, 'fetchProperties/error');
          console.error('Failed to fetch properties data:', error);
        } finally {
          set({ isLoading: false }, false, 'fetchProperties/complete');
        }
      },

      // UI Actions
      setFilters: (newFilters) => {
        set({ filters: { ...get().filters, ...newFilters } }, false, 'setFilters');
        // Use debounced fetch for filter changes
        get().debouncedFetchProperties(newFilters);
      },
      
      // Debounced fetch for search and filter changes
      debouncedFetchProperties: (newFilters) => {
        // Clear existing timeout
        if (debounceTimeout) {
          clearTimeout(debounceTimeout);
        }
        
        // Set new timeout
        debounceTimeout = setTimeout(() => {
          get().fetchProperties(newFilters);
        }, 300); // 300ms debounce
      },
      
      setViewMode: (mode) => 
        set({ viewMode: mode }, false, 'setViewMode'),
      
      setLoading: (loading) => 
        set({ isLoading: loading }, false, 'setLoading'),
      
      setError: (error) => 
        set({ error }, false, 'setError'),
    }),
    {
      name: 'properties-store', // unique name for devtools
    }
  )
);
