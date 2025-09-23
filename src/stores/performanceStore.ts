import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface ApiMention {
  mention: string;
  count: number;
}

export interface ApiGoodReviews {
  percentage: number;
  count: number;
  insight: string;
  topMentions: ApiMention[];
}

export interface ApiBadReviews {
  percentage: number;
  count: number;
  insight: string;
  topMentions: ApiMention[];
}

export interface ApiSummary {
  totalReviews: number;
  averageRating: number;
  topPerformingLocation: string;
  worstPerformingLocation: string;
}

export interface ApiFilters {
  dateRange: string;
  location: string;
}

export interface ApiPerformanceResponse {
  success: boolean;
  timestamp: string;
  path: string;
  data: {
    goodReviews: ApiGoodReviews;
    badReviews: ApiBadReviews;
    summary: ApiSummary;
    filters: ApiFilters;
  };
}

export interface PerformanceState {
  goodReviews: ApiGoodReviews | null;
  badReviews: ApiBadReviews | null;
  summary: ApiSummary | null;
  filters: ApiFilters | null;
  selectedDateRange: string;
  isLoading: boolean;
  error: string | null;
  fetchPerformanceData: (dateRange: string) => Promise<void>;
  setSelectedDateRange: (range: string) => void;
}

export const usePerformanceStore = create<PerformanceState>()(
  devtools(
    (set, get) => ({
      goodReviews: null,
      badReviews: null,
      summary: null,
      filters: null,
      selectedDateRange: '14d',
      isLoading: false,
      error: null,

      fetchPerformanceData: async (dateRange: string) => {
        set({ isLoading: true, error: null, selectedDateRange: dateRange }, false, 'fetchPerformanceData/start');
        try {
          const baseUrl = import.meta.env.VITE_API_BASE_URL || window.location.origin;
          const url = new URL('/api/reviews/performance', baseUrl);
          url.searchParams.set('dateRange', dateRange);

          const response = await fetch(url.toString());
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const apiResponse: ApiPerformanceResponse = await response.json();

          if (!apiResponse.success) {
            throw new Error('API returned unsuccessful response');
          }

          set({
            goodReviews: apiResponse.data.goodReviews,
            badReviews: apiResponse.data.badReviews,
            summary: apiResponse.data.summary,
            filters: apiResponse.data.filters,
          }, false, 'fetchPerformanceData/success');

        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Failed to fetch performance data';
          set({ error: errorMessage }, false, 'fetchPerformanceData/error');
          console.error('Failed to fetch performance data:', error);
        } finally {
          set({ isLoading: false }, false, 'fetchPerformanceData/complete');
        }
      },

      setSelectedDateRange: (range: string) => {
        set({ selectedDateRange: range }, false, 'setSelectedDateRange');
        get().fetchPerformanceData(range);
      },
    }),
    { name: 'performance-store' }
  )
);
