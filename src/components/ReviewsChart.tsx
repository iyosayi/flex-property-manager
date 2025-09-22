import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts";

const data = [
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

export function ReviewsChart() {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Reviews</h3>
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
      
      {/* Legend */}
      <div className="flex items-center space-x-6 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-success"></div>
          <span className="text-sm text-muted-foreground">Great reviews</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-chart-line-2"></div>
          <span className="text-sm text-muted-foreground">Neutral</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-stat-negative"></div>
          <span className="text-sm text-muted-foreground">Bad reviews</span>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
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
      
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Consistently neutral reviews over the last 3 months for properties in London
        </p>
      </div>
    </div>
  );
}