import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// API Response Types
export interface ApiReviewCategory {
  category: string;
  rating: number;
}

export interface ApiReview {
  id: number;
  type: string;
  status: 'awaiting' | 'published';
  rating: number;
  publicReview: string;
  reviewCategory: ApiReviewCategory[];
  submittedAt: string;
  guestName: string;
  listingName: string;
  channel: string;
}

export interface ApiReviewsResponse {
  success: boolean;
  timestamp: string;
  path: string;
  data: ApiReview[];
  meta: {
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
  };
}

// Component Props Types (what the Reviews component expects)
export interface ReviewData {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
}

// Store State
export interface ReviewsState {
  // Raw API Data
  apiData: ApiReviewsResponse | null;
  
  // Transformed Data for Component
  reviews: ReviewData[];
  averageRating: number;
  totalReviews: number;
  
  // UI State
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchReviews: (page?: number, limit?: number) => Promise<void>;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

// Data transformation helpers
const transformApiReview = (apiReview: ApiReview): ReviewData => {
  // Extract location from channel or use a default
  const getLocationFromChannel = (channel: string): string => {
    const locationMap: Record<string, string> = {
      'expedia': 'London, UK',
      'booking': 'Manchester, UK',
      'airbnb': 'Barcelona, Spain',
      'vrbo': 'Edinburgh, UK',
      'direct': 'Seoul, South Korea',
      'other': 'Glasgow, UK'
    };
    return locationMap[channel] || 'London, UK';
  };

  // Format date from submittedAt
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  return {
    id: apiReview.id,
    name: apiReview.guestName,
    location: getLocationFromChannel(apiReview.channel),
    rating: Math.round(apiReview.rating), // Round to nearest integer for star display
    date: formatDate(apiReview.submittedAt),
    text: apiReview.publicReview
  };
};

const calculateAverageRating = (reviews: ApiReview[]): number => {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10; // Round to 1 decimal place
};

export const useReviewsStore = create<ReviewsState>()(
  devtools(
    (set, get) => ({
      // Initial state
      apiData: null,
      reviews: [],
      averageRating: 0,
      totalReviews: 0,
      isLoading: false,
      error: null,

      // Actions
      fetchReviews: async (page = 1, limit = 10) => {
        try {
          set({ isLoading: true, error: null }, false, 'fetchReviews/start');
          
          const baseUrl = import.meta.env.VITE_API_BASE_URL || window.location.origin;
          const url = new URL('/api/reviews/hostaway', baseUrl);
          url.searchParams.set('page', page.toString());
          url.searchParams.set('limit', limit.toString());
          
          const response = await fetch(url.toString());
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const apiData: ApiReviewsResponse = await response.json();
          
          if (!apiData.success) {
            throw new Error('API returned unsuccessful response');
          }
          
          // Transform and store the data
          const transformedReviews = apiData.data.map(transformApiReview);
          const averageRating = calculateAverageRating(apiData.data);
          
          set({
            apiData,
            reviews: transformedReviews,
            averageRating,
            totalReviews: apiData.meta.pagination.total
          }, false, 'fetchReviews/success');
          
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Failed to fetch reviews';
          set({ error: errorMessage }, false, 'fetchReviews/error');
          console.error('Failed to fetch reviews:', error);
        } finally {
          set({ isLoading: false }, false, 'fetchReviews/complete');
        }
      },

      setLoading: (loading) => {
        set({ isLoading: loading }, false, 'setLoading');
      },

      setError: (error) => {
        set({ error }, false, 'setError');
      },
    }),
    { name: 'reviews-store' }
  )
);
