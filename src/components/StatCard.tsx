import { TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  period: string;
  isPositive?: boolean;
}

export function StatCard({ title, value, change, period, isPositive = true }: StatCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-sm text-muted-foreground mb-2">{title}</h3>
      <div className="text-3xl font-bold text-foreground mb-2">{value}</div>
      <div className="flex items-center space-x-2">
        <div className={`flex items-center space-x-1 ${
          isPositive ? "text-stat-positive" : "text-stat-negative"
        }`}>
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">{change}</span>
        </div>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
    </div>
  );
}