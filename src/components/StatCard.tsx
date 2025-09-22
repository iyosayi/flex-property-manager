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
    <div className="rounded-2xl border border-border bg-background/90 p-6 shadow-sm">
      <h3 className="mb-2 text-sm font-medium text-muted-foreground">{title}</h3>
      <div className="mb-2 text-3xl font-semibold text-foreground">{value}</div>
      <div className="flex items-center gap-2">
        <div className={`flex items-center gap-1 text-sm font-medium ${
          isPositive ? "text-stat-positive" : "text-stat-negative"
        }`}>
          <TrendingUp className="h-4 w-4" />
          <span>{change}</span>
        </div>
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{period}</span>
      </div>
    </div>
  );
}