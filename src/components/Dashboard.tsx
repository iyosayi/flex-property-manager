import React from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { StatCard } from "./StatCard";
import { ReviewCard } from "./ReviewCard";
import { PropertyCard } from "./PropertyCard";
import { ReviewsChart } from "./ReviewsChart";
import { GuestMentionsChart } from "./GuestMentionsChart";
import { DateRangeSelect, getDateRangeLabel } from "./DateRangeSelect";
import { useDashboardStore } from "@/stores";

// Data is now fetched from the API via Zustand store

export function Dashboard() {
  const {
    apiData,
    metrics,
    topRatedProperties,
    belowThreeStarProperties,
    recentReviews,
    reviewsChartData,
    guestMentionsData,
    guestMentionCategories,
    selectedGuestMentionCategory,
    selectedDateRange,
    isLoading,
    error,
    fetchOverviewData,
    setSelectedDateRange,
    setSelectedGuestMentionCategory
  } = useDashboardStore();

  // Fetch data on component mount and when date range changes
  React.useEffect(() => {
    fetchOverviewData(selectedDateRange);
  }, [fetchOverviewData, selectedDateRange]);

  // Handle date range changes
  const handleDateRangeChange = (newRange: string) => {
    setSelectedDateRange(newRange);
  };

  if (error) {
    return (
      <div className="flex-1 h-full overflow-hidden bg-muted/10">
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-foreground mb-2">Error Loading Dashboard</h2>
            <p className="text-muted-foreground mb-4">{error}</p>
            <button 
              onClick={() => fetchOverviewData(selectedDateRange)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 h-full overflow-hidden bg-muted/10">
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <section className="rounded-3xl border border-border bg-background px-8 py-7 shadow-sm">
              <div className="flex flex-col gap-8">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div>
                    <h1 className="text-3xl font-semibold text-foreground">Overview</h1>
                    <p className="text-sm text-muted-foreground">
                      See how your properties are being reviewed
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <DateRangeSelect
                      value={selectedDateRange}
                      onChange={handleDateRangeChange}
                      disabled={isLoading}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground"
                    />
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </div>

                <SearchBar />

                <div className="grid gap-5 md:grid-cols-2">
                  <StatCard
                    title="Total reviews"
                    value={metrics?.totalReviews.count.toString() || "0"}
                    change={`${metrics?.totalReviews.changeType === 'increase' ? '+' : ''}${metrics?.totalReviews.change || 0}`}
                    period={metrics?.totalReviews.comparisonPeriod || "VS 14D"}
                  />
                  <StatCard
                    title="All properties"
                    value={metrics?.allProperties.count.toString() || "0"}
                    change={`${metrics?.allProperties.changeType === 'increase' ? '+' : ''}${metrics?.allProperties.change || 0}`}
                    period={metrics?.allProperties.comparisonPeriod || "VS 14D"}
                  />
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-border bg-background px-8 py-7 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-foreground">Recent reviews</h2>
                <button className="flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-primary hover:bg-primary/10">
                  <span>See more</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {recentReviews.map((review, index) => (
                  <ReviewCard key={index} {...review} />
                ))}
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-border bg-background px-8 py-7 shadow-sm">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">Top rated properties</h2>
                      <p className="text-sm text-muted-foreground">
                        Properties with the highest ratings
                      </p>
                    </div>
                    <DateRangeSelect
                      value={selectedDateRange}
                      onChange={handleDateRangeChange}
                      disabled={isLoading}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {topRatedProperties.map((property, index) => (
                      <PropertyCard key={property.id} {...property} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-background px-8 py-7 shadow-sm">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">Below 3 star</h2>
                      <p className="text-sm text-muted-foreground">
                        Properties with the lowest ratings
                      </p>
                    </div>
                    <DateRangeSelect
                      value={selectedDateRange}
                      onChange={handleDateRangeChange}
                      disabled={isLoading}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {belowThreeStarProperties.map((property, index) => (
                      <PropertyCard key={property.id} {...property} />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <ReviewsChart 
                data={reviewsChartData}
                summary={apiData?.data.reviewsChart.summary.text}
                location={apiData?.data.reviewsChart.summary.location}
                period={apiData?.data.reviewsChart.summary.period}
                selectedDateRange={selectedDateRange}
                onDateRangeChange={handleDateRangeChange}
                isLoading={isLoading}
              />
              <GuestMentionsChart 
                data={guestMentionsData}
                categories={guestMentionCategories}
                selectedCategory={selectedGuestMentionCategory}
                onCategoryChange={setSelectedGuestMentionCategory}
                selectedDateRange={selectedDateRange}
                onDateRangeChange={handleDateRangeChange}
                isLoading={isLoading}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}