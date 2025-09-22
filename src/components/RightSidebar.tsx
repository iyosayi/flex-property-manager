import { ChevronDown } from "lucide-react";
import apartmentCollage1 from "@/assets/apartment-collage-1.jpg";

const topMentions = ["Cleanliness", "Great locations", "Cleanliness"];

export function RightSidebar() {
  return (
    <div className="w-80 bg-background border-l border-border p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-muted rounded-full"></div>
          <span className="font-medium text-foreground">Jamie Fox</span>
        </div>
      </div>

      {/* How we've been doing */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">How we've been doing</h2>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>14 days</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Good reviews */}
        <div className="space-y-3">
          <img 
            src={apartmentCollage1} 
            alt="Property collage" 
            className="w-full h-24 rounded-lg object-cover"
          />
          <div>
            <h3 className="font-medium text-foreground mb-1">Good reviews</h3>
            <div className="text-4xl font-bold text-stat-positive mb-1">90%</div>
            <div className="text-sm text-muted-foreground mb-3">
              Locations like London & Algiers<br />
              get consistently good reviews
            </div>
            <div>
              <div className="text-sm font-medium text-foreground mb-2">Top mentions</div>
              <div className="flex flex-wrap gap-2">
                {topMentions.map((mention, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-muted text-sm text-muted-foreground rounded-full"
                  >
                    {mention}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bad reviews */}
        <div className="space-y-3">
          <img 
            src={apartmentCollage1} 
            alt="Property collage" 
            className="w-full h-24 rounded-lg object-cover"
          />
          <div>
            <h3 className="font-medium text-foreground mb-1">Bad reviews</h3>
            <div className="text-4xl font-bold text-stat-negative mb-1">32%</div>
            <div className="text-sm text-muted-foreground mb-3">
              Paris properties have been getting<br />
              frequent bad reviews lately
            </div>
            <div>
              <div className="text-sm font-medium text-foreground mb-2">Top mentions</div>
              <div className="flex flex-wrap gap-2">
                {topMentions.map((mention, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-muted text-sm text-muted-foreground rounded-full"
                  >
                    {mention}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}