import React from "react";
import { StarIcon } from "@/components/common/icons";
import { ChevronRightIcon } from "@/components/icons";
import { useReviewsStore } from "@/stores";

const Reviews = () => {
  const {
    reviews,
    averageRating,
    totalReviews,
    isLoading,
    error,
    fetchReviews
  } = useReviewsStore();

  // Fetch reviews on component mount
  React.useEffect(() => {
    fetchReviews(1, 6);
  }, [fetchReviews]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'text-[#284E4C] fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  // Handle error state
  if (error) {
    return (
      <div className="rounded-lg text-card-foreground p-6 mb-8 bg-white border-0 shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#333333] mb-2">Reviews</h2>
          <p className="text-[#5C5C5A] mb-4">Error loading reviews: {error}</p>
          <button 
            onClick={() => fetchReviews(1, 10)}
            className="px-4 py-2 bg-[#284E4C] text-white rounded-md hover:bg-[#284E4C]/90"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Handle loading state
  if (isLoading) {
    return (
      <div className="rounded-lg text-card-foreground p-6 mb-8 bg-white border-0 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#333333] mb-2">Reviews</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {renderStars(5)}
                <span className="ml-2 text-sm font-medium text-[#333333]">Loading...</span>
              </div>
              <span className="text-sm text-[#5C5C5A]">·</span>
              <span className="text-sm text-[#5C5C5A]">Loading reviews...</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="space-y-3 animate-pulse">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-24 mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-gray-200 rounded"></div>
                    ))}
                  </div>
                  <div className="h-3 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg text-card-foreground p-6 mb-8 bg-white border-0 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-[#333333] mb-2">Reviews</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {renderStars(5)}
              <span className="ml-2 text-sm font-medium text-[#333333]">{averageRating}</span>
            </div>
            <span className="text-sm text-[#5C5C5A]">·</span>
            <span className="text-sm text-[#5C5C5A]">{totalReviews} reviews</span>
          </div>
        </div>
        <button 
          className="justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border bg-background shadow-sm h-9 px-4 py-2 flex items-center gap-2 border-[#284E4C]/20 text-[#284E4C] hover:bg-[#284E4C]/5" 
          type="button" 
        >
          View all reviews
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F1F3EE] flex items-center justify-center">
                  <span className="text-sm font-medium text-[#284E4C]">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-[#333333]">{review.name}</p>
                  <p className="text-sm text-[#5C5C5A]">{review.location}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 mb-1">
                  {renderStars(review.rating)}
                </div>
                <p className="text-sm text-[#5C5C5A]">{review.date}</p>
              </div>
            </div>
            <p className="text-[#5C5C5A] leading-relaxed text-sm">
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
