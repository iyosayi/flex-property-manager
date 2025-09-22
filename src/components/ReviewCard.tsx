import { Star, ArrowRight } from "lucide-react";

interface ReviewCardProps {
  image: string;
  title: string;
  subtitle: string;
  location: string;
  stayDuration: string;
  rating: number;
  description: string;
}

export function ReviewCard({ 
  image, 
  title, 
  subtitle, 
  location, 
  stayDuration, 
  rating, 
  description 
}: ReviewCardProps) {
  return (
    <div className="flex items-start space-x-4 p-4 bg-property-card-bg border border-property-card-border rounded-lg">
      <img 
        src={image} 
        alt={title} 
        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{subtitle}</p>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
      </div>
      <div className="flex flex-col items-end space-y-2 flex-shrink-0">
        <div className="text-sm text-muted-foreground">{location}</div>
        <div className="text-sm text-muted-foreground">{stayDuration}</div>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 fill-success text-success" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
        <ArrowRight className="w-4 h-4 text-muted-foreground" />
      </div>
    </div>
  );
}