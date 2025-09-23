import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// API Response Types
export interface ApiReviewsChartData {
  period: string;
  greatReviewsCount: number;
  neutralReviewsCount: number;
  badReviewsCount: number;
  totalReviews: number;
}

export interface ApiReviewsChartSummary {
  text: string;
  location: string;
  period: string;
  totalReviews: number;
  averageRating: number;
}

export interface ApiReviewsChartFilters {
  dateRange: string;
  location: string;
  period: string;
}

export interface ApiReviewsChartResponse {
  success: boolean;
  timestamp: string;
  path: string;
  data: {
    reviewsChart: ApiReviewsChartData[];
    summary: ApiReviewsChartSummary;
    filters: ApiReviewsChartFilters;
  };
}

// Component Data Types
export interface ChartData {
  month: string;
  great: number;
  neutral: number;
  bad: number;
}

export interface ReviewsChartState {
  // Raw API Data
  apiData: ApiReviewsChartResponse | null;
  
  // Transformed Data for Component
  chartData: ChartData[];
  summary: ApiReviewsChartSummary | null;
  filters: ApiReviewsChartFilters | null;
  
  // UI State
  selectedDateRange: string;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchReviewsChartData: (dateRange?: string) => Promise<void>;
  setSelectedDateRange: (dateRange: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  
  // Data transformation helpers
  transformApiData: (apiData: ApiReviewsChartResponse) => void;
}

// Data transformation helper
const transformApiData = (apiData: ApiReviewsChartResponse): ChartData[] => {
  return apiData.data.reviewsChart.map(item => ({
    month: item.period,
    great: item.greatReviewsCount,
    neutral: item.neutralReviewsCount,
    bad: item.badReviewsCount,
  }));
};

export const useReviewsChartStore = create<ReviewsChartState>()(
  devtools(
    (set, get) => ({
      // Initial state
      apiData: null,
      chartData: [],
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
          summary: apiData.data.summary,
          filters: apiData.data.filters,
        }, false, 'transformApiData');
      },

      // API Actions
      fetchReviewsChartData: async (dateRange = '14d') => {
        const state = get();
        
        try {
          set({ isLoading: true, error: null }, false, 'fetchReviewsChartData/start');
          
          // Build URL with date range parameter
          const baseUrl = import.meta.env.VITE_API_BASE_URL || window.location.origin;
          const url = new URL('/api/reviews/chart', baseUrl);
          url.searchParams.set('dateRange', dateRange);
          
          const response = await fetch(url.toString());
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const apiData: ApiReviewsChartResponse = await response.json();
          
          if (!apiData.success) {
            throw new Error('API returned unsuccessful response');
          }
          
          // Transform and store the data
          get().transformApiData(apiData);
          
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Failed to fetch reviews chart data';
          set({ error: errorMessage }, false, 'fetchReviewsChartData/error');
          console.error('Failed to fetch reviews chart data:', error);
        } finally {
          set({ isLoading: false }, false, 'fetchReviewsChartData/complete');
        }
      },

      // UI Actions
      setSelectedDateRange: (dateRange) => {
        set({ selectedDateRange: dateRange }, false, 'setSelectedDateRange');
        // Automatically refetch data when date range changes
        get().fetchReviewsChartData(dateRange);
      },
      
      setLoading: (loading) => 
        set({ isLoading: loading }, false, 'setLoading'),
      
      setError: (error) => 
        set({ error }, false, 'setError'),
    }),
    {
      name: 'reviews-chart-store', // unique name for devtools
    }
  )
);
