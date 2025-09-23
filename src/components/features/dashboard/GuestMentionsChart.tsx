import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { DateRangeSelect } from "@/components/features/booking/DateRangeSelect";
import { useGuestMentionsStore } from "@/stores";
import { useEffect } from "react";

interface GuestMentionsChartProps {
  // Props are now optional since we're using the store
  selectedDateRange?: string;
  onDateRangeChange?: (dateRange: string) => void;
}

export function GuestMentionsChart({ 
  selectedDateRange,
  onDateRangeChange
}: GuestMentionsChartProps) {
  const {
    chartData,
    categories,
    selectedCategory,
    summary,
    isLoading,
    error,
    fetchGuestMentionsData,
    setSelectedDateRange,
    setSelectedCategory
  } = useGuestMentionsStore();

  // Fetch data on component mount
  useEffect(() => {
    fetchGuestMentionsData(selectedDateRange || '14d', selectedCategory);
  }, [fetchGuestMentionsData, selectedDateRange, selectedCategory]);

  // Handle date range changes
  const handleDateRangeChange = (newRange: string) => {
    if (onDateRangeChange) {
      onDateRangeChange(newRange);
    } else {
      setSelectedDateRange(newRange);
    }
  };

  // Handle category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Fallback data for when API is loading or fails
  const fallbackData = [
    { location: "Paris", value: 600 },
    { location: "London", value: 300 },
    { location: "Lisbon", value: 700 },
    { location: "Algiers", value: 500 },
  ];

  const fallbackCategories = ["Cleanliness", "Lack of cleanliness", "Noise complaints", "Maintenance problems"];

  const displayData = chartData.length > 0 ? chartData : fallbackData;
  const displayCategories = categories.length > 0 ? categories : fallbackCategories;
  return (
    <div className="rounded-2xl border border-border bg-background/90 p-6 shadow-sm">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Guest mentions by location</h3>
          <p className="text-sm text-muted-foreground">Mention frequency across different cities</p>
        </div>
        <div className="flex items-center gap-3">
          <DateRangeSelect
            value={selectedDateRange || '14d'}
            onChange={handleDateRangeChange}
            disabled={isLoading}
          />
        </div>
      </div>

      {/* Tags */}
      <div className="mb-6 flex flex-wrap gap-2">
        {displayCategories.map((category, index) => (
          <button
            key={index}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
              category === selectedCategory
                ? "border-transparent bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:border-primary/40"
            }`}
            type="button"
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={displayData}>
            <XAxis
              dataKey="location"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
            />
            <Bar
              dataKey="value"
              fill="hsl(var(--success))"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}