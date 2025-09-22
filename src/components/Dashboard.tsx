import { ChevronDown, ArrowRight } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { StatCard } from "./StatCard";
import { ReviewCard } from "./ReviewCard";
import { PropertyCard } from "./PropertyCard";
import { ReviewsChart } from "./ReviewsChart";
import { GuestMentionsChart } from "./GuestMentionsChart";
import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";

const reviewsData = [
  {
    image: apartment1,
    title: "Exceptionally clean and modern",
    subtitle: "1 bedroom modern apartment, Wimbledon",
    location: "London",
    stayDuration: "20 day stay",
    rating: 4.5,
    description: "My stay here was sooooo good, the host was great with communicating with us and the area had lots of great coffee shops around"
  },
  {
    image: apartment2,
    title: "Exceptionally clean and modern",
    subtitle: "1 bedroom modern apartment, Wimbledon",
    location: "London",
    stayDuration: "20 day stay",
    rating: 4.5,
    description: "My stay here was sooooo good, the host was great with communicating with us and the area had lots of great coffee shops around"
  },
  {
    image: apartment3,
    title: "Exceptionally clean and modern",
    subtitle: "1 bedroom modern apartment, Wimbledon",
    location: "London",
    stayDuration: "20 day stay",
    rating: 4.5,
    description: "My stay here was sooooo good, the host was great with communicating with us and the area had lots of great coffee shops around"
  },
  {
    image: apartment1,
    title: "Exceptionally clean and modern",
    subtitle: "1 bedroom modern apartment, Wimbledon",
    location: "London",
    stayDuration: "20 day stay",
    rating: 4.5,
    description: "My stay here was sooooo good, the host was great with communicating with us and the area had lots of great coffee shops around"
  },
];

const topRatedProperties = [
  {
    image: apartment1,
    title: "1 bedroom modern apartment, Wimbledon",
    location: "London",
    rating: 4.5,
    reviewCount: "2,350"
  },
  {
    image: apartment2,
    title: "1 bedroom modern apartment, Wimbledon",
    location: "London",
    rating: 4.5,
    reviewCount: "2,350"
  },
  {
    image: apartment3,
    title: "1 bedroom modern apartment, Wimbledon",
    location: "London",
    rating: 4.5,
    reviewCount: "2,350"
  },
  {
    image: apartment1,
    title: "1 bedroom modern apartment, Wimbledon",
    location: "London",
    rating: 4.5,
    reviewCount: "2,350"
  },
];

const belowThreeStarProperties = [
  {
    image: apartment2,
    title: "1 bedroom modern apartment, Wimbledon",
    location: "London",
    rating: 2.5,
    reviewCount: "2,350",
    isPositive: false
  },
  {
    image: apartment3,
    title: "1 bedroom modern apartment, Wimbledon",
    location: "London",
    rating: 1.8,
    reviewCount: "2,350",
    isPositive: false
  },
  {
    image: apartment1,
    title: "1 bedroom modern apartment, Wimbledon",
    location: "London",
    rating: 2.1,
    reviewCount: "2,350",
    isPositive: false
  },
  {
    image: apartment2,
    title: "1 bedroom modern apartment, Wimbledon",
    location: "London",
    rating: 1.5,
    reviewCount: "2,350",
    isPositive: false
  },
];

export function Dashboard() {
  return (
    <div className="flex-1 h-full overflow-hidden bg-muted/10">
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <section className="rounded-3xl border border-border bg-background px-8 py-7 shadow-sm">
              <div className="flex flex-col gap-8">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div>
                    <h1 className="text-3xl font-semibold text-foreground">Overview</h1>
                    <p className="text-sm text-muted-foreground">
                      See how your properties are being reviewed
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground">
                      <span>Last 14 days</span>
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </div>

                <SearchBar />

                <div className="grid gap-5 md:grid-cols-2">
                  <StatCard
                    title="Total reviews"
                    value="2,002"
                    change="+200"
                    period="vs 14 days"
                  />
                  <StatCard
                    title="All properties"
                    value="2,002"
                    change="+200"
                    period="vs 14 days"
                  />
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-border bg-background px-8 py-7 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-foreground">Recent reviews</h2>
                <button className="flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-primary hover:bg-primary/10">
                  <span>See more</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {reviewsData.map((review, index) => (
                  <ReviewCard key={index} {...review} />
                ))}
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-border bg-background px-8 py-7 shadow-sm">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">Top rated properties</h2>
                      <p className="text-sm text-muted-foreground">
                        Properties with the highest ratings
                      </p>
                    </div>
                    <select className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground">
                      <option>Date range</option>
                    </select>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {topRatedProperties.map((property, index) => (
                      <PropertyCard key={index} {...property} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-background px-8 py-7 shadow-sm">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">Below 3 star</h2>
                      <p className="text-sm text-muted-foreground">
                        Properties with the lowest ratings
                      </p>
                    </div>
                    <select className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground">
                      <option>Date range</option>
                    </select>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {belowThreeStarProperties.map((property, index) => (
                      <PropertyCard key={index} {...property} />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <ReviewsChart />
              <GuestMentionsChart />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}