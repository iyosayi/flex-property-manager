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
    <div className="flex-1 bg-background p-8 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Overview</h1>
          <p className="text-muted-foreground">See how your properties are being reviewed</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>14 days</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>

      {/* Search */}
      <div className="mb-8">
        <SearchBar />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-6 mb-8">
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

      {/* Recent Reviews */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-foreground">Recent reviews</h2>
          <button className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80">
            <span>See more</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-4">
          {reviewsData.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Top Rated Properties */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-1">Top rated properties</h2>
              <p className="text-sm text-muted-foreground">Properties with the highest ratings</p>
            </div>
            <select className="text-sm border border-border rounded px-3 py-1 bg-background">
              <option>Date range</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {topRatedProperties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>

        {/* Below 3 Star */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-1">Below 3 star</h2>
              <p className="text-sm text-muted-foreground">Properties with the lowest ratings</p>
            </div>
            <select className="text-sm border border-border rounded px-3 py-1 bg-background">
              <option>Date range</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {belowThreeStarProperties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="space-y-8">
        <ReviewsChart />
        <GuestMentionsChart />
      </div>
    </div>
  );
}