import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// API Response Types
export interface ApiReviewCategory {
  category: string;
  rating: number;
}

export interface ApiReviewStatusResponse {
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

export interface ApiReviewStatusUpdateResponse {
  success: boolean;
  timestamp: string;
  path: string;
  data: ApiReviewStatusResponse;
}

// Store State
export interface ReviewStatusState {
  // Loading states for individual reviews
  updatingReviews: Set<number>;
  error: string | null;
  
  // Actions
  updateReviewStatus: (reviewId: number, status: 'awaiting' | 'published') => Promise<ApiReviewStatusResponse | null>;
  setError: (error: string | null) => void;
}

export const useReviewStatusStore = create<ReviewStatusState>()(
  devtools(
    (set, get) => ({
      // Initial state
      updatingReviews: new Set(),
      error: null,
      
      // Actions
      updateReviewStatus: async (reviewId: number, status: 'awaiting' | 'published') => {
        try {
          // Add review ID to updating set
          set(state => ({
            updatingReviews: new Set([...state.updatingReviews, reviewId]),
            error: null
          }), false, 'updateReviewStatus/start');
          
          const baseUrl = import.meta.env.VITE_API_BASE_URL || window.location.origin;
          const url = new URL(`/api/reviews/${reviewId}/status`, baseUrl);
          
          const response = await fetch(url.toString(), {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status })
          });
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const apiResponse: ApiReviewStatusUpdateResponse = await response.json();
          if (!apiResponse.success) {
            throw new Error('API returned unsuccessful response');
          }
          
          // Remove review ID from updating set
          set(state => ({
            updatingReviews: new Set([...state.updatingReviews].filter(id => id !== reviewId))
          }), false, 'updateReviewStatus/success');
          
          return apiResponse.data;
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Failed to update review status';
          
          // Remove review ID from updating set and set error
          set(state => ({
            updatingReviews: new Set([...state.updatingReviews].filter(id => id !== reviewId)),
            error: errorMessage
          }), false, 'updateReviewStatus/error');
          
          console.error('Failed to update review status:', error);
          return null;
        }
      },
      
      setError: (error) => {
        set({ error }, false, 'setError');
      },
    }),
    { name: 'review-status-store' }
  )
);
