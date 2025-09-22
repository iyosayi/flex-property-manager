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
    <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-background/90 p-5 shadow-sm transition-all hover:shadow-md">
      <img
        src={image}
        alt={title}
        className="h-20 w-20 flex-shrink-0 rounded-xl object-cover"
      />
      <div className="min-w-0 flex-1">
        <h3 className="mb-1 text-base font-semibold text-foreground">{title}</h3>
        <p className="mb-2 text-sm text-muted-foreground">{subtitle}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-shrink-0 flex-col items-end gap-2">
        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{location}</div>
        <div className="text-sm text-muted-foreground">{stayDuration}</div>
        <div className="flex items-center gap-1 text-sm font-medium text-foreground">
          <Star className="h-4 w-4 fill-success text-success" />
          <span>{rating}</span>
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  );
}