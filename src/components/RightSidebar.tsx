import { ChevronDown } from "lucide-react";
import apartmentCollage1 from "@/assets/apartment-collage-1.jpg";

const topMentions = ["Cleanliness", "Great locations", "Cleanliness"];

export function RightSidebar() {
  return (
    <aside className="flex h-full w-80 flex-shrink-0 flex-col border-l border-border bg-background">
      <div className="border-b border-border px-6 pb-6 pt-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-muted" />
            <div>
              <div className="font-medium text-foreground">Jamie Fox</div>
              <div className="text-xs text-muted-foreground">Manager</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">How we've been doing</h2>
            <button className="flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
              <span>Last 14 days</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="space-y-3 rounded-2xl border border-border bg-muted/40 p-4">
              <img
                src={apartmentCollage1}
                alt="Property collage"
                className="h-24 w-full rounded-xl object-cover"
              />
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-medium text-foreground">Good reviews</h3>
                  <div className="text-4xl font-semibold text-stat-positive">90%</div>
                  <p className="text-sm text-muted-foreground">
                    Locations like London &amp; Algiers get consistently good reviews
                  </p>
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Top mentions</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {topMentions.map((mention, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-background px-3 py-1 text-xs text-muted-foreground"
                      >
                        {mention}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-border bg-muted/40 p-4">
              <img
                src={apartmentCollage1}
                alt="Property collage"
                className="h-24 w-full rounded-xl object-cover"
              />
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-medium text-foreground">Bad reviews</h3>
                  <div className="text-4xl font-semibold text-stat-negative">32%</div>
                  <p className="text-sm text-muted-foreground">
                    Paris properties have been getting frequent bad reviews lately
                  </p>
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Top mentions</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {topMentions.map((mention, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-background px-3 py-1 text-xs text-muted-foreground"
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
      </div>
    </aside>
  );
}