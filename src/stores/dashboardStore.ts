import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// API Response Types (matching your API structure)
export interface ApiMetrics {
  totalReviews: {
    count: number;
    change: number;
    changeType: "increase" | "decrease";
    comparisonPeriod: string;
  };
  allProperties: {
    count: number;
    change: number;
    changeType: "increase" | "decrease";
    comparisonPeriod: string;
  };
}

export interface ApiReview {
  id: number;
  propertyImageSrc: string;
  reviewTitle: string;
  propertyType: string;
  propertyLocation: string;
  reviewCity: string;
  stayDuration: string;
  rating: string;
  publicReviewText: string;
  submittedAt: string;
  guestName: string;
  channel: string;
}

export interface ApiProperty {
  id: string;
  propertyImageSrc: string;
  propertyName: string;
  propertyLocation: string;
  averageRating: string;
  numberOfReviews: number;
  totalReviews: number;
}

export interface ApiMonthlyData {
  month: string;
  greatReviewsCount: number;
  neutralReviewsCount: number;
  badReviewsCount: number;
}

export interface ApiReviewsChart {
  monthlyData: ApiMonthlyData[];
  summary: {
    text: string;
    location: string;
    period: string;
  };
}

export interface ApiLocationData {
  location: string;
  count: number;
}

export interface ApiGuestMentions {
  categories: string[];
  selectedCategory: string;
  locationData: ApiLocationData[];
}

export interface ApiOverviewResponse {
  success: boolean;
  timestamp: string;
  path: string;
  data: {
    metrics: ApiMetrics;
    recentReviews: ApiReview[];
    topRatedProperties: ApiProperty[];
    below3StarProperties: ApiProperty[];
    reviewsChart: ApiReviewsChart;
    guestMentions: ApiGuestMentions;
  };
}

// Component Props Types (what components expect)
export interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: string;
  isPositive?: boolean;
}

export interface ReviewCardProps {
  image: string;
  title: string;
  subtitle: string;
  location: string;
  stayDuration: string;
  rating: number;
  description: string;
}

export interface ChartData {
  month: string;
  great: number;
  neutral: number;
  bad: number;
}

export interface GuestMentionData {
  location: string;
  value: number;
}

export interface DashboardState {
  // Raw API Data
  apiData: ApiOverviewResponse | null;
  
  // Transformed Data for Components
  metrics: ApiMetrics | null;
  topRatedProperties: PropertyCardProps[];
  belowThreeStarProperties: PropertyCardProps[];
  recentReviews: ReviewCardProps[];
  reviewsChartData: ChartData[];
  guestMentionsData: GuestMentionData[];
  guestMentionCategories: string[];
  selectedGuestMentionCategory: string;
  
  // UI State
  selectedDateRange: string;
  selectedLocation: string;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchOverviewData: (dateRange?: string) => Promise<void>;
  setSelectedDateRange: (range: string) => void;
  setSelectedLocation: (location: string) => void;
  setSelectedGuestMentionCategory: (category: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  
  // Data transformation helpers
  transformApiData: (apiData: ApiOverviewResponse) => void;
}

// Data transformation helpers
const transformApiProperty = (apiProperty: ApiProperty): PropertyCardProps => ({
  image: apiProperty.propertyImageSrc,
  title: apiProperty.propertyName,
  location: apiProperty.propertyLocation,
  rating: parseFloat(apiProperty.averageRating),
  reviewCount: apiProperty.totalReviews.toString(),
  isPositive: parseFloat(apiProperty.averageRating) >= 3.0,
});

const transformApiReview = (apiReview: ApiReview): ReviewCardProps => ({
  image: apiReview.propertyImageSrc,
  title: apiReview.reviewTitle,
  subtitle: apiReview.propertyType,
  location: apiReview.propertyLocation,
  stayDuration: apiReview.stayDuration,
  rating: parseFloat(apiReview.rating),
  description: apiReview.publicReviewText,
});

const transformChartData = (apiMonthlyData: ApiMonthlyData[]): ChartData[] => 
  apiMonthlyData.map(data => ({
    month: data.month,
    great: data.greatReviewsCount,
    neutral: data.neutralReviewsCount,
    bad: data.badReviewsCount,
  }));

const transformGuestMentionData = (locationData: ApiLocationData[]): GuestMentionData[] =>
  locationData.map(data => ({
    location: data.location,
    value: data.count,
  }));

export const useDashboardStore = create<DashboardState>()(
  devtools(
    (set, get) => ({
      // Initial state
      apiData: null,
      metrics: null,
      topRatedProperties: [],
      belowThreeStarProperties: [],
      recentReviews: [],
      reviewsChartData: [],
      guestMentionsData: [],
      guestMentionCategories: [],
      selectedGuestMentionCategory: 'Cleanliness',
      selectedDateRange: '14d', // Default to 14 days as specified
      selectedLocation: 'All locations',
      isLoading: false,
      error: null,

      // Data transformation
      transformApiData: (apiData) => {
        const { data } = apiData;
        
        set({
          apiData,
          metrics: data.metrics,
          topRatedProperties: data.topRatedProperties.map(transformApiProperty),
          belowThreeStarProperties: data.below3StarProperties.map(transformApiProperty),
          recentReviews: data.recentReviews.map(transformApiReview),
          reviewsChartData: transformChartData(data.reviewsChart.monthlyData),
          guestMentionsData: transformGuestMentionData(data.guestMentions.locationData),
          guestMentionCategories: data.guestMentions.categories,
          selectedGuestMentionCategory: data.guestMentions.selectedCategory,
        }, false, 'transformApiData');
      },

      // API Actions
      fetchOverviewData: async (dateRange = '14d') => {
        const state = get();
        
        try {
          set({ isLoading: true, error: null }, false, 'fetchOverviewData/start');
          
          // Build URL with date range parameter using environment variable
          const baseUrl = import.meta.env.VITE_API_BASE_URL || window.location.origin;
          const url = new URL('/api/overview', baseUrl);
          url.searchParams.set('dateRange', dateRange);
          
          const response = await fetch(url.toString());
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const apiData: ApiOverviewResponse = await response.json();
          
          if (!apiData.success) {
            throw new Error('API returned unsuccessful response');
          }
          
          // Transform and store the data
          get().transformApiData(apiData);
          
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Failed to fetch overview data';
          set({ error: errorMessage }, false, 'fetchOverviewData/error');
          console.error('Failed to fetch overview data:', error);
        } finally {
          set({ isLoading: false }, false, 'fetchOverviewData/complete');
        }
      },

      // UI Actions
      setSelectedDateRange: (range) => {
        set({ selectedDateRange: range }, false, 'setSelectedDateRange');
        // Automatically refetch data when date range changes
        get().fetchOverviewData(range);
      },
      
      setSelectedLocation: (location) => 
        set({ selectedLocation: location }, false, 'setSelectedLocation'),
      
      setSelectedGuestMentionCategory: (category) => 
        set({ selectedGuestMentionCategory: category }, false, 'setSelectedGuestMentionCategory'),
      
      setLoading: (loading) => 
        set({ isLoading: loading }, false, 'setLoading'),
      
      setError: (error) => 
        set({ error }, false, 'setError'),
    }),
    {
      name: 'dashboard-store', // unique name for devtools
    }
  )
);
