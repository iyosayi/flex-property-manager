import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { location: "Paris", value: 600 },
  { location: "London", value: 300 },
  { location: "Lisbon", value: 700 },
  { location: "Algiers", value: 500 },
];

const mentionTags = [
  { label: "Cleanliness", active: true },
  { label: "Lack of cleanliness", active: false },
  { label: "Noise complaints", active: false },
  { label: "Maintenance problems", active: false },
  { label: "Maintenance problems", active: false },
];

export function GuestMentionsChart() {
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
          <select className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground">
            <option>Date range</option>
          </select>
        </div>
      </div>

      {/* Tags */}
      <div className="mb-6 flex flex-wrap gap-2">
        {mentionTags.map((tag, index) => (
          <button
            key={index}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
              tag.active
                ? "border-transparent bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:border-primary/40"
            }`}
            type="button"
          >
            {tag.label}
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