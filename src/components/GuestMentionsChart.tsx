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
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Top guest mentions</h3>
          <p className="text-sm text-muted-foreground">Properties with the highest ratings</p>
        </div>
        <div className="flex items-center space-x-4">
          <select className="text-sm border border-border rounded px-3 py-1 bg-background">
            <option>Locations</option>
          </select>
          <select className="text-sm border border-border rounded px-3 py-1 bg-background">
            <option>Date range</option>
          </select>
        </div>
      </div>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {mentionTags.map((tag, index) => (
          <span 
            key={index}
            className={`px-3 py-1 rounded-full text-sm ${
              tag.active 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-muted-foreground"
            }`}
          >
            {tag.label}
          </span>
        ))}
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="location" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <Bar 
              dataKey="value" 
              fill="hsl(var(--success))" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}