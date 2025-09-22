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
    <div className="bg-property-card-bg border border-property-card-border rounded-lg p-4">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-32 rounded-lg object-cover mb-3"
      />
      <h3 className="font-medium text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{location}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Star 
            className={`w-4 h-4 ${
              isPositive 
                ? "fill-success text-success" 
                : "fill-stat-negative text-stat-negative"
            }`} 
          />
          <span className="text-sm font-medium">{rating}</span>
        </div>
        <span className="text-sm text-muted-foreground">{reviewCount} reviews</span>
      </div>
    </div>
  );
}