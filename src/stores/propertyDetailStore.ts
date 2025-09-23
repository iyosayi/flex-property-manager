import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// API Response Types
export interface ApiWorthyMention {
  category: string;
  rating: string;
}

export interface ApiTopComponent {
  name: string;
  percentage: number;
  description: string;
}

export interface ApiFrequentComplaint {
  name: string;
  mentions: number;
  trend: string;
  trendValue: number;
}

export interface ApiCategoryRating {
  category: string;
  rating: string;
}

export interface ApiRatingHealth {
  period: string;
  positiveReviews: {
    description: string;
    percentage: number;
    trend: string;
  };
  neutralReviews: {
    description: string;
    percentage: number;
    trend: string;
  };
  negativeReviews: {
    description: string;
    percentage: number;
    trend: string;
  };
}

export interface ApiAverageRatingDetails {
  overallRating: string;
  changeVsLastMonth: string;
  basedOnReviews: number;
  categoryRatings: ApiCategoryRating[];
}

export interface ApiReview {
  id: number;
  guestName: string;
  timeAgo: string;
  channel: string;
  stayDuration: string;
  reviewTitle: string;
  reviewText: string;
  rating: number;
  categoryRatings: ApiCategoryRating[];
  status: 'awaiting' | 'published';
}

export interface ApiPropertyDetail {
  id: string;
  name: string;
  location: string;
  description: string;
  mainImageUrl: string;
  galleryImages: string[];
  badge: string | null;
  averageRating: string;
  totalReviews: number;
  guestCapacity: number;
  propertyType: string;
  selfCheckInAvailable: boolean;
  worthyMentions: ApiWorthyMention[];
  topComponents: ApiTopComponent[];
  frequentComplaints: ApiFrequentComplaint[];
  averageRatingDetails: ApiAverageRatingDetails;
  ratingHealth: ApiRatingHealth;
  recentReviews: ApiReview[];
}

export interface ApiPropertyDetailResponse {
  success: boolean;
  timestamp: string;
  path: string;
  data: ApiPropertyDetail;
}

// Component Props Types
export interface PropertyDetailProps {
  id: string;
  name: string;
  location: string;
  description: string;
  mainImageUrl: string;
  galleryImages: string[];
  badge: {
    label: string;
    tone: 'positive' | 'primary' | 'warning' | null;
  };
  averageRating: string;
  totalReviews: number;
  guestCapacity: number;
  propertyType: string;
  selfCheckInAvailable: boolean;
  worthyMentions: Array<{
    label: string;
    score: string;
  }>;
  topComponents: ApiTopComponent[];
  frequentComplaints: ApiFrequentComplaint[];
  averageRatingDetails: ApiAverageRatingDetails;
  ratingHealth: ApiRatingHealth;
  recentReviews: ApiReview[];
}

// Store State
export interface PropertyDetailState {
  // Data
  property: PropertyDetailProps | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchPropertyDetail: (id: string) => Promise<void>;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  
  // Data transformation helpers
  transformApiData: (apiData: ApiPropertyDetailResponse) => void;
}

// Data transformation helpers
const getBadgeTone = (badge: string | null): 'positive' | 'primary' | 'warning' | null => {
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

const transformApiPropertyDetail = (apiProperty: ApiPropertyDetail): PropertyDetailProps => ({
  id: apiProperty.id,
  name: apiProperty.name,
  location: apiProperty.location,
  description: apiProperty.description,
  mainImageUrl: apiProperty.mainImageUrl,
  galleryImages: apiProperty.galleryImages,
  badge: {
    label: apiProperty.badge || "",
    tone: getBadgeTone(apiProperty.badge)
  },
  averageRating: apiProperty.averageRating,
  totalReviews: apiProperty.totalReviews,
  guestCapacity: apiProperty.guestCapacity,
  propertyType: apiProperty.propertyType,
  selfCheckInAvailable: apiProperty.selfCheckInAvailable,
  worthyMentions: apiProperty.worthyMentions.map(mention => ({
    label: mention.category,
    score: mention.rating
  })),
  topComponents: apiProperty.topComponents,
  frequentComplaints: apiProperty.frequentComplaints,
  averageRatingDetails: apiProperty.averageRatingDetails,
  ratingHealth: apiProperty.ratingHealth,
  recentReviews: apiProperty.recentReviews,
});

export const usePropertyDetailStore = create<PropertyDetailState>()(
  devtools(
    (set, get) => ({
      // Initial state
      property: null,
      isLoading: false,
      error: null,
      
      // Actions
      fetchPropertyDetail: async (id: string) => {
        try {
          set({ isLoading: true, error: null }, false, 'fetchPropertyDetail/start');
          
          const baseUrl = import.meta.env.VITE_API_BASE_URL || window.location.origin;
          const url = new URL(`/api/properties/${id}`, baseUrl);
          
          const response = await fetch(url.toString());
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const apiData: ApiPropertyDetailResponse = await response.json();
          if (!apiData.success) {
            throw new Error('API returned unsuccessful response');
          }
          
          get().transformApiData(apiData);
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Failed to fetch property details';
          set({ error: errorMessage }, false, 'fetchPropertyDetail/error');
          console.error('Failed to fetch property details:', error);
        } finally {
          set({ isLoading: false }, false, 'fetchPropertyDetail/complete');
        }
      },
      
      setLoading: (loading) => {
        set({ isLoading: loading }, false, 'setLoading');
      },
      
      setError: (error) => {
        set({ error }, false, 'setError');
      },
      
      transformApiData: (apiData) => {
        const transformedProperty = transformApiPropertyDetail(apiData.data);
        set({ property: transformedProperty }, false, 'transformApiData');
      },
    }),
    { name: 'property-detail-store' }
  )
);
