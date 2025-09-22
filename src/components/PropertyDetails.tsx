import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowUpRight, MapPin, Share2, Star, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Progress } from "@/components/ui/progress";
import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";

const galleryImages = [
  { src: apartment1, alt: "Bright living room" },
  { src: apartment2, alt: "Cozy bedroom" },
  { src: apartment3, alt: "Modern kitchen" },
  { src: apartment1, alt: "Apartment exterior" }
];

const worthyMentions = [
  { label: "Cleanliness", score: "5.0" },
  { label: "Good location", score: "5.0" },
  { label: "Service", score: "5.0" },
  { label: "Communication", score: "4.9" }
];

const topComponents = [
  {
    title: "Seamless check-in",
    description: "Guests love the easy self check-in process",
    value: 82,
    tone: "positive" as const
  },
  {
    title: "Comfortable beds",
    description: "Highlighted in 65% of 5 star reviews",
    value: 74,
    tone: "positive" as const
  },
  {
    title: "Thoughtful amenities",
    description: "Coffee machine, fast Wi-Fi and workspace",
    value: 68,
    tone: "positive" as const
  },
  {
    title: "Responsive host",
    description: "Guests mention quick replies within minutes",
    value: 64,
    tone: "positive" as const
  }
];

const frequentComplaints = [
  {
    title: "Street noise late at night",
    count: 6,
    change: "-3 vs last month"
  },
  {
    title: "Hot water pressure",
    count: 4,
    change: "Stable"
  },
  {
    title: "Parking availability",
    count: 3,
    change: "+1 vs last month"
  }
];

const ratingHighlights = [
  { label: "Cleanliness", score: "4.9" },
  { label: "Communication", score: "4.8" },
  { label: "Check-in", score: "4.7" },
  { label: "Amenities", score: "4.6" }
];

const ratingHealth = [
  {
    label: "Positive reviews",
    value: 90,
    description: "Guests loved their stay",
    tone: "positive" as const
  },
  {
    label: "Neutral reviews",
    value: 5,
    description: "Mentions of minor issues",
    tone: "warning" as const
  },
  {
    label: "Negative reviews",
    value: 5,
    description: "Requires host follow-up",
    tone: "negative" as const
  }
];

const recentReviews = [
  {
    id: 1,
    guest: "Amber",
    platform: "Airbnb",
    stayDuration: "20 day stay",
    posted: "2 days ago",
    rating: 5,
    title: "Exceptionally clean and modern",
    message:
      "My stay here was sooooo good, the host was great with communicating with us and the area had lots of great coffee shops around.",
    mentions: [
      { label: "Cleanliness", score: "5.0" },
      { label: "Good location", score: "5.0" },
      { label: "Service", score: "5.0" }
    ]
  },
  {
    id: 2,
    guest: "Arthur",
    platform: "Booking.com",
    stayDuration: "14 day stay",
    posted: "1 week ago",
    rating: 4.5,
    title: "Comfortable and stylish",
    message:
      "Lovely apartment with everything we needed. The check-in instructions were clear and the host was super responsive.",
    mentions: [
      { label: "Communication", score: "5.0" },
      { label: "Amenities", score: "4.8" },
      { label: "Comfort", score: "4.9" }
    ]
  },
  {
    id: 3,
    guest: "Anita",
    platform: "Airbnb",
    stayDuration: "7 day stay",
    posted: "2 weeks ago",
    rating: 4.8,
    title: "Great stay for remote work",
    message:
      "Stayed here while working remotely for a week and it was perfect. The Wi-Fi was reliable and there was a comfortable desk.",
    mentions: [
      { label: "Workspace", score: "4.9" },
      { label: "Wi-Fi", score: "5.0" },
      { label: "Host support", score: "4.8" }
    ]
  }
];

const toneClasses: Record<"positive" | "warning" | "negative", string> = {
  positive: "bg-stat-positive/10 text-stat-positive",
  warning: "bg-warning/10 text-warning",
  negative: "bg-stat-negative/10 text-stat-negative"
};

export function PropertyDetails() {
  return (
    <div className="flex h-full flex-1 overflow-hidden bg-muted/10">
      <div className="flex h-full flex-1 flex-col">
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <section className="rounded-3xl border border-border bg-background px-6 py-7 shadow-sm sm:px-8 lg:px-10">
              <div className="space-y-8">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to="/properties" className="text-xs font-medium">
                          All properties
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-xs font-semibold text-foreground">
                        Modern 1 Bed Apartment in Wimbledon
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>

                <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-3xl">
                      <img
                        src={galleryImages[0].src}
                        alt={galleryImages[0].alt}
                        className="aspect-[16/10] w-full object-cover"
                      />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
                      {galleryImages.slice(1).map((image) => (
                        <div key={image.alt} className="overflow-hidden rounded-2xl">
                          <img src={image.src} alt={image.alt} className="h-24 w-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <h1 className="text-3xl font-semibold text-foreground">
                              Modern 1 Bed Apartment in Wimbledon
                            </h1>
                            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                              <Star className="h-3.5 w-3.5" />
                              Top rated
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <span className="inline-flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-primary" />
                              Wimbledon, London
                            </span>
                            <span className="inline-flex items-center gap-2 text-foreground">
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              4.9 rating
                            </span>
                            <span>1,235 reviews</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <button className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
                            <Share2 className="h-4 w-4" />
                            Share
                          </button>
                          <button className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background shadow-sm transition-transform hover:-translate-y-0.5">
                            Publish
                          </button>
                        </div>
                      </div>
                      <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                        This thoughtfully designed apartment places you moments from Wimbledon village. Guests love the open plan living space, calming bedroom and light-filled interiors that make longer stays comfortable.
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-3 py-1">
                          <Users className="h-3.5 w-3.5" />
                          Ideal for 2 guests
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-3 py-1">
                          Entire apartment
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-3 py-1">
                          Self check-in available
                        </span>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border bg-muted/40 p-5">
                      <div className="flex items-center justify-between">
                        <h2 className="text-sm font-semibold text-foreground">Worthy mentions</h2>
                        <span className="text-xs text-muted-foreground">Last 30 days</span>
                      </div>
                      <div className="mt-4 grid gap-3">
                        {worthyMentions.map((mention) => (
                          <div key={mention.label} className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>{mention.label}</span>
                            <span className="font-semibold text-foreground">{mention.score}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,360px)]">
              <div className="space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground">Top components</h3>
                      <span className="text-xs text-muted-foreground">Highlights guests love</span>
                    </div>
                    <div className="mt-5 space-y-4">
                      {topComponents.map((component) => (
                        <div key={component.title} className="space-y-2 rounded-2xl border border-border/60 bg-muted/40 p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-sm font-semibold text-foreground">{component.title}</h4>
                              <p className="text-xs text-muted-foreground">{component.description}</p>
                            </div>
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-sm font-semibold text-foreground">
                              {component.value}%
                            </span>
                          </div>
                          <Progress value={component.value} className="h-2 bg-muted" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground">Frequent complaints</h3>
                      <span className="text-xs text-muted-foreground">Needs attention</span>
                    </div>
                    <div className="mt-5 space-y-4">
                      {frequentComplaints.map((item) => (
                        <div key={item.title} className="flex items-start justify-between gap-3 rounded-2xl border border-border/60 bg-muted/40 p-4">
                          <div className="space-y-1">
                            <p className="text-sm font-semibold text-foreground">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.change}</p>
                          </div>
                          <span className="text-xs font-semibold text-muted-foreground">{item.count} mentions</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <section className="rounded-3xl border border-border bg-background p-6 shadow-sm sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">Recent reviews</h2>
                      <p className="text-sm text-muted-foreground">Read what guests are highlighting this month</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <button className="rounded-full border border-border px-4 py-2 font-medium text-muted-foreground transition-colors hover:text-foreground">
                        All channels
                      </button>
                      <button className="rounded-full border border-border px-4 py-2 font-medium text-muted-foreground transition-colors hover:text-foreground">
                        Last 30 days
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {recentReviews.map((review) => (
                      <article key={review.id} className="rounded-3xl border border-border bg-background/90 p-5 shadow-sm transition-all hover:shadow-md sm:p-6">
                        <div className="flex gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                            {review.guest[0]}
                          </div>
                          <div className="min-w-0 flex-1 space-y-4">
                            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-medium text-foreground">{review.guest}</span>
                                <span>•</span>
                                <span>{review.posted}</span>
                              </div>
                              <div className="flex flex-wrap items-center gap-2">
                                <Badge variant="outline" className="rounded-full border border-border px-3 py-1 text-[11px] font-medium">
                                  {review.platform}
                                </Badge>
                                <span>{review.stayDuration}</span>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <div className="flex flex-wrap items-start justify-between gap-3">
                                <div className="space-y-2">
                                  <h3 className="text-base font-semibold text-foreground">{review.title}</h3>
                                  <p className="text-sm leading-relaxed text-muted-foreground">{review.message}</p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                  <div className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                                    <Star className="h-4 w-4 fill-primary text-primary" />
                                    {review.rating}
                                  </div>
                                  <button className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
                                    Publish
                                  </button>
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {review.mentions.map((mention) => (
                                  <span
                                    key={mention.label}
                                    className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-3 py-1 text-xs text-muted-foreground"
                                  >
                                    {mention.label}
                                    <span className="font-semibold text-foreground">{mention.score}</span>
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-6">
                <div className="sticky top-6 space-y-6">
                  <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3">
                        <span className="text-sm font-medium text-muted-foreground">Average rating</span>
                        <div className="flex items-end gap-3">
                          <span className="text-4xl font-semibold text-foreground">4.8</span>
                          <span className="rounded-full bg-stat-positive/10 px-3 py-1 text-xs font-medium text-stat-positive">
                            +0.4 vs last month
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">Based on 1,235 guest reviews</p>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Star className="h-6 w-6 fill-current" />
                      </div>
                    </div>
                    <div className="mt-6 space-y-4">
                      {ratingHighlights.map((highlight) => (
                        <div key={highlight.label} className="flex items-center justify-between rounded-2xl bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
                          <span>{highlight.label}</span>
                          <span className="font-semibold text-foreground">{highlight.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground">Rating health</h3>
                      <span className="text-xs text-muted-foreground">This quarter</span>
                    </div>
                    <div className="mt-5 space-y-4">
                      {ratingHealth.map((item) => {
                        const IndicatorIcon = item.tone === "negative" ? ArrowDownRight : ArrowUpRight;

                        return (
                          <div key={item.label} className="space-y-2 rounded-2xl border border-border/60 bg-muted/40 p-4">
                            <div className="flex items-center justify-between">
                              <div className="space-y-1">
                                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                                <p className="text-xs text-muted-foreground">{item.description}</p>
                              </div>
                              <span
                                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${toneClasses[item.tone]}`}
                              >
                                <IndicatorIcon className="h-3.5 w-3.5" />
                                {item.value}%
                              </span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                              <div
                                className={`h-full rounded-full ${
                                  item.tone === "positive"
                                    ? "bg-stat-positive"
                                    : item.tone === "warning"
                                      ? "bg-warning"
                                      : "bg-stat-negative"
                                }`}
                                style={{ width: `${item.value}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
