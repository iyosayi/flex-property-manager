import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts";
import { DateRangeSelect } from "@/components/features/booking/DateRangeSelect";
import { useReviewsChartStore } from "@/stores";
import { useEffect } from "react";

interface ReviewsChartProps {
  // Props are now optional since we're using the store
  selectedDateRange?: string;
  onDateRangeChange?: (dateRange: string) => void;
}

export function ReviewsChart({ 
  selectedDateRange,
  onDateRangeChange
}: ReviewsChartProps) {
  const {
    chartData,
    summary,
    filters,
    isLoading,
    error,
    fetchReviewsChartData,
    setSelectedDateRange
  } = useReviewsChartStore();

  // Fetch data on component mount
  useEffect(() => {
    fetchReviewsChartData(selectedDateRange || '14d');
  }, [fetchReviewsChartData, selectedDateRange]);

  // Handle date range changes
  const handleDateRangeChange = (newRange: string) => {
    if (onDateRangeChange) {
      onDateRangeChange(newRange);
    } else {
      setSelectedDateRange(newRange);
    }
  };

  // Fallback data for when API is loading or fails
  const fallbackData = [
    { month: "J", great: 150, neutral: 350, bad: 200 },
    { month: "F", great: 280, neutral: 300, bad: 150 },
    { month: "M", great: 450, neutral: 280, bad: 120 },
    { month: "A", great: 680, neutral: 320, bad: 180 },
    { month: "M", great: 580, neutral: 400, bad: 250 },
    { month: "J", great: 720, neutral: 380, bad: 200 },
    { month: "J", great: 650, neutral: 420, bad: 280 },
    { month: "A", great: 800, neutral: 350, bad: 150 },
    { month: "S", great: 750, neutral: 300, bad: 200 },
    { month: "O", great: 680, neutral: 380, bad: 320 },
    { month: "N", great: 620, neutral: 420, bad: 280 },
    { month: "D", great: 580, neutral: 480, bad: 350 },
  ];

  const displayData = chartData.length > 0 ? chartData : fallbackData;
  const displaySummary = summary?.text || "Consistently neutral reviews over the last 3 months for properties in London";
  return (
    <div className="rounded-2xl border border-border bg-background/90 p-6 shadow-sm">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Review Trends</h3>
          <p className="text-sm text-muted-foreground">Monthly review distribution over time</p>
        </div>
        <div className="flex items-center gap-3">
          <DateRangeSelect
            value={selectedDateRange || '14d'}
            onChange={handleDateRangeChange}
            disabled={isLoading}
          />
        </div>
      </div>

      {/* Legend */}
      <div className="mb-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-success" />
          <span>Great reviews</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-chart-line-2" />
          <span>Neutral</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-stat-negative" />
          <span>Bad reviews</span>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={displayData}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
            />
            <Line
              type="monotone"
              dataKey="great"
              stroke="hsl(var(--success))"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="neutral"
              stroke="hsl(var(--chart-line-2))"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="bad"
              stroke="hsl(var(--stat-negative))"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {displaySummary}
      </p>
    </div>
  );
}