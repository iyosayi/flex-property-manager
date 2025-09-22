import { Star } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: string;
  isPositive?: boolean;
}

export function PropertyCard({
  image,
  title,
  location,
  rating,
  reviewCount,
  isPositive = true
}: PropertyCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-background/90 p-5 shadow-sm transition-all hover:shadow-md">
      <img
        src={image}
        alt={title}
        className="mb-4 h-32 w-full rounded-xl object-cover"
      />
      <h3 className="mb-1 text-base font-semibold text-foreground">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{location}</p>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-1 text-foreground">
          <Star
            className={`h-4 w-4 ${
              isPositive
                ? "fill-success text-success"
                : "fill-stat-negative text-stat-negative"
            }`}
          />
          <span className="font-medium">{rating}</span>
        </div>
        <span>{reviewCount} reviews</span>
      </div>
    </div>
  );
}