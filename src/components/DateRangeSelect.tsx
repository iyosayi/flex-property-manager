import React from "react";

export interface DateRangeOption {
  value: string;
  label: string;
}

export const DATE_RANGE_OPTIONS: DateRangeOption[] = [
  { value: "7d", label: "Last 7 days" },
  { value: "14d", label: "Last 14 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "90d", label: "Last 90 days" },
  { value: "1y", label: "Last 1 year" },
];

export const DEFAULT_DATE_RANGE = "14d";

interface DateRangeSelectProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export function DateRangeSelect({ 
  value, 
  onChange, 
  disabled = false,
  className = "rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground"
}: DateRangeSelectProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select 
      value={value} 
      onChange={handleChange}
      disabled={disabled}
      className={className}
    >
      {DATE_RANGE_OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

// Helper function to get the display label for a date range value
export function getDateRangeLabel(value: string): string {
  const option = DATE_RANGE_OPTIONS.find(opt => opt.value === value);
  return option ? option.label : value;
}
