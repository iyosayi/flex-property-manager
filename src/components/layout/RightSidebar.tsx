import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import apartmentCollage1 from "@/assets/images/properties/apartment-collage-1.jpg";
import { useUIStore, usePerformanceStore } from "@/stores";

export function RightSidebar() {
  const { isRightSidebarOpen, toggleRightSidebar } = useUIStore();
  const {
    goodReviews,
    badReviews,
    summary,
    filters,
    selectedDateRange,
    isLoading,
    error,
    fetchPerformanceData,
    setSelectedDateRange
  } = usePerformanceStore();

  // Fetch data on component mount and when date range changes
  useEffect(() => {
    fetchPerformanceData(selectedDateRange);
  }, [fetchPerformanceData, selectedDateRange]);

  const handleDateRangeChange = (newRange: string) => {
    setSelectedDateRange(newRange);
  };

  return (
    <>
      {/* Toggle button positioned to the left of the sidebar */}
      <button
        onClick={toggleRightSidebar}
        className={`fixed top-1/2 -translate-y-1/2 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow-lg hover:bg-muted transition-all duration-200 ${
          isRightSidebarOpen ? 'right-[21rem]' : 'right-4'
        }`}
        aria-label={isRightSidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isRightSidebarOpen ? (
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronLeft className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
      
      <aside className={`flex h-full flex-shrink-0 flex-col border-l border-border bg-background transition-all duration-300 ease-in-out ${
        isRightSidebarOpen ? 'w-80' : 'w-0 overflow-hidden'
      }`}>

      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>How we've been doing</h2>
            <button 
              onClick={() => handleDateRangeChange(selectedDateRange === '14d' ? '30d' : '14d')}
              className="flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground hover:bg-muted/50 transition-colors"
              disabled={isLoading}
            >
              <span>{filters?.dateRange === '14d' ? 'Last 14 days' : filters?.dateRange === '30d' ? 'Last 30 days' : 'Last 14 days'}</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>

          {error && (
            <div className="rounded-2xl border border-destructive/20 bg-destructive/10 p-4">
              <p className="text-sm text-destructive">Error loading performance data: {error}</p>
            </div>
          )}

          {summary && (
            <div className="space-y-3 rounded-2xl border border-border bg-muted/40 p-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-foreground" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Summary</h3>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-muted-foreground">Total Reviews</div>
                    <div className="font-semibold text-foreground">{summary.totalReviews}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Avg Rating</div>
                    <div className="font-semibold text-foreground">{summary.averageRating}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Top Location</div>
                    <div className="font-semibold text-foreground">{summary.topPerformingLocation}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Needs Attention</div>
                    <div className="font-semibold text-foreground">{summary.worstPerformingLocation}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-6">
            <div className="space-y-3 rounded-2xl border border-border bg-muted/40 p-4">
              <img
                src={apartmentCollage1}
                alt="Property collage"
                className="h-24 w-full rounded-xl object-cover"
              />
              <div className="space-y-3">
                <div className="text-center">
                  <h3 className="text-sm font-medium text-foreground" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Good reviews</h3>
                  <div className="text-4xl font-semibold text-stat-positive">
                    {isLoading ? '...' : goodReviews?.percentage || 0}%
                  </div>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {isLoading ? 'Loading...' : goodReviews?.insight || 'Loading insights...'}
                  </p>
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Top mentions</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {isLoading ? (
                      <span className="rounded-full bg-background px-3 py-1 text-xs text-muted-foreground">Loading...</span>
                    ) : (
                      goodReviews?.topMentions
                        ?.filter((mention, index, array) => 
                          array.findIndex(m => m.mention === mention.mention) === index
                        )
                        ?.slice(0, 3)
                        ?.map((mention, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-background px-3 py-1 text-xs text-muted-foreground"
                          >
                            {mention.mention}
                          </span>
                        )) || []
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-border bg-muted/40 p-4">
              <img
                src={apartmentCollage1}
                alt="Property collage"
                className="h-24 w-full rounded-xl object-cover"
              />
              <div className="space-y-3">
                <div className="text-center">
                  <h3 className="text-sm font-medium text-foreground" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Bad reviews</h3>
                  <div className="text-4xl font-semibold text-stat-negative">
                    {isLoading ? '...' : badReviews?.percentage || 0}%
                  </div>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {isLoading ? 'Loading...' : badReviews?.insight || 'Loading insights...'}
                  </p>
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Top mentions</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {isLoading ? (
                      <span className="rounded-full bg-background px-3 py-1 text-xs text-muted-foreground">Loading...</span>
                    ) : (
                      badReviews?.topMentions
                        ?.filter((mention, index, array) => 
                          array.findIndex(m => m.mention === mention.mention) === index
                        )
                        ?.slice(0, 3)
                        ?.map((mention, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-background px-3 py-1 text-xs text-muted-foreground"
                          >
                            {mention.mention}
                          </span>
                        )) || []
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </aside>
    </>
  );
}