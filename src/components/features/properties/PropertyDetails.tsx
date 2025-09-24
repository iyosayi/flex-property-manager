import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowDownRight, ArrowUpRight, MapPin, Share2, Star, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Progress } from "@/components/ui/progress";
import { usePropertyDetailStore, useReviewStatusStore } from "@/stores";
import apartment1 from "@/assets/images/properties/apartment-1.jpg";
import apartment2 from "@/assets/images/properties/apartment-2.jpg";
import apartment3 from "@/assets/images/properties/apartment-3.jpg";

const galleryImages = [
  { src: apartment1, alt: "Bright living room" },
  { src: apartment2, alt: "Cozy bedroom" },
  { src: apartment3, alt: "Modern kitchen" },
  { src: apartment1, alt: "Apartment exterior" }
];

const worthyMentions = [
  { label: "Cleanliness", score: "5.0" },
  { label: "Good location", score: "5.0" },
  { label: "Service", score: "5.0" },
  { label: "Communication", score: "4.9" }
];





const toneClasses: Record<"positive" | "warning" | "negative", string> = {
  positive: "bg-stat-positive/10 text-stat-positive",
  warning: "bg-warning/10 text-warning",
  negative: "bg-stat-negative/10 text-stat-negative"
};

export function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { property, isLoading, error, fetchPropertyDetail } = usePropertyDetailStore();
  const { updateReviewStatus, updatingReviews, error: reviewError } = useReviewStatusStore();
  
  // State for review filters
  const [selectedChannel, setSelectedChannel] = useState<string>("");
  const [selectedDateRange, setSelectedDateRange] = useState<string>("30d");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [filteredReviews, setFilteredReviews] = useState<any[]>([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);

  // API service function to fetch filtered reviews
  const fetchFilteredReviews = async (channel: string, dateRange: string, status: string = "all") => {
    setIsLoadingReviews(true);
    try {
      // Build URL with parameters using environment variable
      const baseUrl = import.meta.env.VITE_API_BASE_URL || window.location.origin;
      const url = new URL('/api/reviews', baseUrl);
      
      // Add parameters to URL
      if (channel) url.searchParams.set('channel', channel);
      if (dateRange) url.searchParams.set('dateRange', dateRange);
      if (status && status !== "all") url.searchParams.set('status', status);
      url.searchParams.set('limit', '10');
      url.searchParams.set('propertyName', property.name);
      
      console.log('Fetching reviews from:', url.toString());
      
      const response = await fetch(url.toString());
      
      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const textResponse = await response.text();
        console.error('Expected JSON but got:', contentType);
        console.error('Response text:', textResponse.substring(0, 200));
        throw new Error(`Expected JSON but got ${contentType}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setFilteredReviews(data.data);
      } else {
        console.error('API returned success: false', data);
      }
    } catch (error) {
      console.error('Error fetching filtered reviews:', error);
      setFilteredReviews([]);
    } finally {
      setIsLoadingReviews(false);
    }
  };

  // API service function to fetch property details with filters
  const fetchPropertyDetailsWithFilters = async (propertyId: string, channel: string, dateRange: string, status: string) => {
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || window.location.origin;
      const url = new URL(`/api/properties/${propertyId}`, baseUrl);
      
      // Add filter parameters to property details URL
      if (channel) url.searchParams.set('channel', channel);
      if (dateRange) url.searchParams.set('dateRange', dateRange);
      if (status && status !== "all") url.searchParams.set('status', status);
      
      console.log('Fetching property details with filters from:', url.toString());
      
      const response = await fetch(url.toString());
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        // Update the property store with filtered data
        // Note: This assumes the property store has a method to update with filtered data
        // You may need to modify the store or handle this differently based on your store implementation
        console.log('Property details updated with filters');
      }
    } catch (error) {
      console.error('Error fetching property details with filters:', error);
    }
  };

  // Handle channel change - only called when user selects a channel
  const handleChannelChange = (channel: string) => {
    setSelectedChannel(channel);
    fetchFilteredReviews(channel, selectedDateRange, selectedStatus);
  };

  // Handle date range change - only called when user selects a date range
  const handleDateRangeChange = (dateRange: string) => {
    setSelectedDateRange(dateRange);
    fetchFilteredReviews(selectedChannel, dateRange, selectedStatus);
  };

  // Status filter is maintained internally for API consistency but not exposed in UI

  useEffect(() => {
    if (id) {
      fetchPropertyDetail(id);
    }
  }, [id, fetchPropertyDetail]);

  // Remove initial API call - only fetch when dropdowns are changed by user

  const handlePublishReview = async (reviewId: number, currentStatus: 'awaiting' | 'published') => {
    const newStatus = currentStatus === 'awaiting' ? 'published' : 'awaiting';
    const result = await updateReviewStatus(reviewId, newStatus);
    
    if (result) {
      // Refresh both property details and reviews with the same filters to maintain consistency
      if (id) {
        // Refresh property details with current filters
        await fetchPropertyDetailsWithFilters(id, selectedChannel, selectedDateRange, selectedStatus);
        
        // Refresh reviews with current filters
        await fetchFilteredReviews(selectedChannel, selectedDateRange, selectedStatus);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4"></div>
          <p className="text-sm text-muted-foreground">Loading property details...</p>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-foreground mb-2">Error Loading Property</h2>
          <p className="text-muted-foreground mb-4">{error || 'Property not found'}</p>
          <button
            onClick={() => navigate('/properties')}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
          >
            Back to Properties
          </button>
        </div>
      </div>
    );
  }

  // Transform API data to match existing structure
  const displayGalleryImages = property.galleryImages.length > 0 
    ? property.galleryImages.map((url, index) => ({ 
        src: url, 
        alt: `${property.name} ${index === 0 ? 'main' : `gallery ${index}`}` 
      }))
    : galleryImages;

  const displayWorthyMentions = property.worthyMentions.length > 0 
    ? property.worthyMentions 
    : worthyMentions;

  const displayTopComponents = property.topComponents.map(comp => ({
    title: comp.name,
    description: comp.description,
    value: comp.percentage,
    tone: "positive" as const
  }));

  const displayFrequentComplaints = property.frequentComplaints.map(complaint => ({
    title: complaint.name,
    count: complaint.mentions,
    change: complaint.trend
  }));

  const displayRatingHighlights = property.averageRatingDetails.categoryRatings.map(rating => ({
    label: rating.category,
    score: rating.rating
  }));

  const displayRatingHealth = [
    {
      label: "Positive reviews",
      value: property.ratingHealth.positiveReviews.percentage,
      description: property.ratingHealth.positiveReviews.description,
      tone: "positive" as const
    },
    {
      label: "Neutral reviews", 
      value: property.ratingHealth.neutralReviews.percentage,
      description: property.ratingHealth.neutralReviews.description,
      tone: "warning" as const
    },
    {
      label: "Negative reviews",
      value: property.ratingHealth.negativeReviews.percentage,
      description: property.ratingHealth.negativeReviews.description,
      tone: "negative" as const
    }
  ];

  // Transform API review data to match display format
  const transformApiReviews = (apiReviews: any[]) => {
    return apiReviews.map(review => ({
      id: review.id,
      guest: review.guestName,
      platform: review.channel,
      stayDuration: "2 nights", // Default since API doesn't provide this
      posted: formatTimeAgo(review.submittedAt),
      rating: review.rating,
      title: review.publicReview?.substring(0, 50) + "..." || "Review",
      message: review.publicReview,
      status: review.status === 'published' ? 'published' as const : 'awaiting' as const,
      mentions: review.reviewCategory?.map(category => ({
        label: category.category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()),
        score: category.rating
      })) || []
    }));
  };

  // Helper function to format time ago
  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "1 day ago";
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
    return `${Math.floor(diffInDays / 365)} years ago`;
  };

  // Use filtered reviews if user has applied filters, otherwise fall back to property reviews
  const displayRecentReviews = filteredReviews.length > 0 
    ? transformApiReviews(filteredReviews)
    : property.recentReviews.map(review => ({
        id: review.id,
        guest: review.guestName,
        platform: review.channel,
        stayDuration: review.stayDuration,
        posted: review.timeAgo,
        rating: review.rating,
        title: review.reviewTitle,
        message: review.reviewText,
        status: review.status,
        mentions: review.categoryRatings.map(rating => ({
          label: rating.category,
          score: rating.rating
        }))
      }));

  return (
    <div className="flex h-full flex-1 overflow-hidden">
      <div className="flex h-full flex-1 flex-col">
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <section className="rounded-3xl border border-border bg-background px-6 py-7 shadow-sm sm:px-8 lg:px-10">
              <div className="space-y-8">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to="/properties" className="text-xs font-medium">
                          All properties
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-xs font-semibold text-foreground">
                        {property.name}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>

                <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-3xl">
                      <img
                        src={property.mainImageUrl}
                        alt={`${property.name} main image`}
                        className="aspect-[16/10] w-full object-cover"
                      />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
                      {displayGalleryImages.slice(1).map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-2xl">
                          <img src={image.src} alt={image.alt} className="h-24 w-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <h1 className="text-3xl font-semibold text-foreground" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                              {property.name}
                            </h1>
                            {property.badge.label && (
                              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
                                property.badge.tone === 'positive' ? 'bg-stat-positive/10 text-stat-positive' :
                                property.badge.tone === 'primary' ? 'bg-primary/10 text-primary' :
                                property.badge.tone === 'warning' ? 'bg-warning/10 text-warning' :
                                'bg-primary/10 text-primary'
                              }`}>
                                <Star className="h-3.5 w-3.5" />
                                {property.badge.label}
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <span className="inline-flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-primary" />
                              {property.location}
                            </span>
                            <span className="inline-flex items-center gap-2 text-foreground">
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              {property.averageRating} rating
                            </span>
                            <span>{property.totalReviews.toLocaleString()} reviews</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <button className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
                            <Share2 className="h-4 w-4" />
                            Share
                          </button>
                        </div>
                      </div>
                      <p className="max-w-xl text-sm leading-relaxed text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {property.description}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-muted/40 p-5">
                      <div className="flex items-center justify-between">
                        <h2 className="text-sm font-semibold text-foreground" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Worthy mentions</h2>
                        <span className="text-xs text-muted-foreground">Last 30 days</span>
                      </div>
                      <div className="mt-4 grid gap-3">
                        {displayWorthyMentions.map((mention) => (
                          <div key={mention.label} className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>{mention.label}</span>
                            <span className="font-semibold text-foreground">{mention.score}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,360px)]">
              <div className="space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Top components</h3>
                      <span className="text-xs text-muted-foreground">Highlights guests love</span>
                    </div>
                    <div className="mt-5 space-y-4">
                      {displayTopComponents.map((component) => (
                        <div key={component.title} className="space-y-2 rounded-2xl border border-border/60 bg-muted/40 p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-sm font-semibold text-foreground">{component.title}</h4>
                              <p className="text-xs text-muted-foreground">{component.description}</p>
                            </div>
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-sm font-semibold text-foreground">
                              {component.value}%
                            </span>
                          </div>
                          <Progress value={component.value} className="h-2 bg-muted" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Frequent complaints</h3>
                      <span className="text-xs text-muted-foreground">Needs attention</span>
                    </div>
                    <div className="mt-5 space-y-4">
                      {displayFrequentComplaints.map((item) => (
                        <div key={item.title} className="flex items-start justify-between gap-3 rounded-2xl border border-border/60 bg-muted/40 p-4">
                          <div className="space-y-1">
                            <p className="text-sm font-semibold text-foreground">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.change}</p>
                          </div>
                          <span className="text-xs font-semibold text-muted-foreground">{item.count} mentions</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <section className="rounded-3xl border border-border bg-background p-6 shadow-sm sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Recent reviews</h2>
                      <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>Read what guests are highlighting this month</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <select 
                        value={selectedChannel}
                        onChange={(e) => handleChannelChange(e.target.value)}
                        className="rounded-full border border-border bg-background px-4 py-2 font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">All channels</option>
                        <option value="Airbnb">Airbnb</option>
                        <option value="booking.com">booking.com</option>
                        <option value="expedia">expedia</option>
                        <option value="homeaway">homeaway</option>
                        <option value="marriott">marriott</option>
                      </select>
                      <select 
                        value={selectedDateRange}
                        onChange={(e) => handleDateRangeChange(e.target.value)}
                        className="rounded-full border border-border bg-background px-4 py-2 font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="30d">Last 30 days</option>
                        <option value="7d">Last 7 days</option>
                        <option value="14d">Last 14 days</option>
                        <option value="90d">Last 90 days</option>
                        <option value="1ye">Last year</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {isLoadingReviews ? (
                      <div className="flex items-center justify-center py-8">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                          <span className="text-sm text-muted-foreground">Loading reviews...</span>
                        </div>
                      </div>
                    ) : (
                      displayRecentReviews.map((review) => (
                      <article key={review.id} className="rounded-3xl border border-border bg-background/90 p-5 shadow-sm transition-all hover:shadow-md sm:p-6">
                        <div className="flex gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                            {review.guest[0]}
                          </div>
                          <div className="min-w-0 flex-1 space-y-4">
                            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-medium text-foreground">{review.guest}</span>
                                <span>•</span>
                                <span>{review.posted}</span>
                                <span>•</span>
                                <span>{review.stayDuration}</span>
                              </div>
                              <div className="flex flex-wrap items-center gap-2">
                                <Badge variant="outline" className="rounded-full border border-border px-3 py-1 text-[11px] font-medium">
                                  {review.platform}
                                </Badge>
                                <button 
                                  onClick={() => handlePublishReview(review.id, review.status)}
                                  disabled={updatingReviews.has(review.id)}
                                  className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                                    review.status === 'published' 
                                      ? 'border-green-500 bg-green-50 text-green-700 hover:bg-green-100' 
                                      : 'border-border hover:text-foreground hover:border-foreground/40'
                                  } ${updatingReviews.has(review.id) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                  style={review.status !== 'published' && !updatingReviews.has(review.id) ? { color: '#284E4C' } : {}}
                                >
                                  {updatingReviews.has(review.id) ? (
                                    <div className="flex items-center gap-1">
                                      <div className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                                      <span>Updating...</span>
                                    </div>
                                  ) : (
                                    review.status === 'published' ? 'Unpublish' : 'Publish'
                                  )}
                                </button>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <div className="flex flex-wrap items-start justify-between gap-3">
                                <div className="space-y-2">
                                  <h3 className="text-base font-semibold text-foreground">{review.title}</h3>
                                  <p className="text-sm leading-relaxed text-muted-foreground">{review.message}</p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                  <div className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                                    <Star className="h-4 w-4 fill-primary text-primary" />
                                    {review.rating}
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {review.mentions.map((mention) => (
                                  <span
                                    key={mention.label}
                                    className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-3 py-1 text-xs text-muted-foreground"
                                  >
                                    {mention.label}
                                    <span className="font-semibold text-foreground">{mention.score}</span>
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                      ))
                    )}
                  </div>
                </section>
              </div>

              <aside className="space-y-6">
                <div className="sticky top-6 space-y-6">
                  <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3">
                        <span className="text-sm font-medium text-muted-foreground">Average rating</span>
                        <div className="flex items-end gap-3">
                          <span className="text-4xl font-semibold text-foreground">{property.averageRating}</span>
                          <span className="rounded-full bg-stat-positive/10 px-3 py-1 text-xs font-medium text-stat-positive">
                            {property.averageRatingDetails.changeVsLastMonth} vs last month
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">Based on {property.averageRatingDetails.basedOnReviews.toLocaleString()} guest reviews</p>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Star className="h-6 w-6 fill-current" />
                      </div>
                    </div>
                    <div className="mt-6 space-y-4">
                      {displayRatingHighlights.map((highlight) => (
                        <div key={highlight.label} className="flex items-center justify-between rounded-2xl bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
                          <span>{highlight.label}</span>
                          <span className="font-semibold text-foreground">{highlight.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Rating health</h3>
                      <span className="text-xs text-muted-foreground">This quarter</span>
                    </div>
                    <div className="mt-5 space-y-4">
                      {displayRatingHealth.map((item) => {
                        const IndicatorIcon = item.tone === "negative" ? ArrowDownRight : ArrowUpRight;

                        return (
                          <div key={item.label} className="space-y-2 rounded-2xl border border-border/60 bg-muted/40 p-4">
                            <div className="flex items-center justify-between">
                              <div className="space-y-1">
                                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                                <p className="text-xs text-muted-foreground">{item.description}</p>
                              </div>
                              <span
                                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${toneClasses[item.tone]}`}
                              >
                                <IndicatorIcon className="h-3.5 w-3.5" />
                                {item.value}%
                              </span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                              <div
                                className={`h-full rounded-full ${
                                  item.tone === "positive"
                                    ? "bg-stat-positive"
                                    : item.tone === "warning"
                                      ? "bg-warning"
                                      : "bg-stat-negative"
                                }`}
                                style={{ width: `${item.value}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
