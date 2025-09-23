import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { DateRangeSelect } from "@/components/features/booking/DateRangeSelect";

interface GuestMentionData {
  location: string;
  value: number;
}

interface GuestMentionsChartProps {
  data?: GuestMentionData[];
  categories?: string[];
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  selectedDateRange?: string;
  onDateRangeChange?: (dateRange: string) => void;
  isLoading?: boolean;
}

export function GuestMentionsChart({ 
  data = [
    { location: "Paris", value: 600 },
    { location: "London", value: 300 },
    { location: "Lisbon", value: 700 },
    { location: "Algiers", value: 500 },
  ],
  categories = ["Cleanliness", "Lack of cleanliness", "Noise complaints", "Maintenance problems"],
  selectedCategory = "Cleanliness",
  onCategoryChange,
  selectedDateRange = "14d",
  onDateRangeChange,
  isLoading = false
}: GuestMentionsChartProps) {
  return (
    <div className="rounded-2xl border border-border bg-background/90 p-6 shadow-sm">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Top guest mentions</h3>
          <p className="text-sm text-muted-foreground">Properties with the highest ratings</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground">
            <option>Locations</option>
          </select>
          {onDateRangeChange ? (
            <DateRangeSelect
              value={selectedDateRange}
              onChange={onDateRangeChange}
              disabled={isLoading}
            />
          ) : (
            <select className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground">
              <option>Date range</option>
            </select>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
              category === selectedCategory
                ? "border-transparent bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:border-primary/40"
            }`}
            type="button"
            onClick={() => onCategoryChange?.(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
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