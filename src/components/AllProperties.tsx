import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  LayoutGrid,
  List,
  MapPin,
  Star
} from "lucide-react";
import { SearchBar } from "./SearchBar";
import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";

const timeRanges = ["14 days", "30 days", "3M", "6M", "1Y"];

const filters = [
  "Location",
  "Rating",
  "Channel",
  "Length of stay",
  "Category"
];

type PropertyBadgeTone = "positive" | "primary" | "warning";

type Property = {
  id: number;
  image: string;
  name: string;
  location: string;
  reviews: string;
  badge: {
    label: string;
    tone: PropertyBadgeTone;
  };
  mentions: Array<{
    label: string;
    score: string;
  }>;
  goodPercentage: number;
  badPercentage: number;
};

const properties: Property[] = [
  {
    id: 1,
    image: apartment1,
    name: "Modern 1 Bed Apartment in Wimbledon",
    location: "Wimbledon, London",
    reviews: "1,325",
    badge: {
      label: "Top rated",
      tone: "positive"
    },
    mentions: [
      { label: "Cleanliness", score: "5.0" },
      { label: "Good location", score: "5.0" },
      { label: "Service", score: "5.0" }
    ],
    goodPercentage: 90,
    badPercentage: 5
  },
  {
    id: 2,
    image: apartment2,
    name: "Stylish Loft near Notting Hill",
    location: "Notting Hill, London",
    reviews: "980",
    badge: {
      label: "Guest favorite",
      tone: "primary"
    },
    mentions: [
      { label: "Cleanliness", score: "4.9" },
      { label: "Check-in", score: "4.8" },
      { label: "Amenities", score: "4.9" }
    ],
    goodPercentage: 86,
    badPercentage: 8
  },
  {
    id: 3,
    image: apartment3,
    name: "Sunny 2 Bed Apartment in Kensington",
    location: "Kensington, London",
    reviews: "1,102",
    badge: {
      label: "Great for families",
      tone: "warning"
    },
    mentions: [
      { label: "Space", score: "5.0" },
      { label: "Good location", score: "4.8" },
      { label: "Comfort", score: "4.9" }
    ],
    goodPercentage: 82,
    badPercentage: 11
  },
  {
    id: 4,
    image: apartment1,
    name: "Calm Studio next to Hyde Park",
    location: "Hyde Park, London",
    reviews: "754",
    badge: {
      label: "Highly reviewed",
      tone: "primary"
    },
    mentions: [
      { label: "Cleanliness", score: "4.9" },
      { label: "Good location", score: "4.7" },
      { label: "Service", score: "4.8" }
    ],
    goodPercentage: 88,
    badPercentage: 6
  }
];

const badgeToneClasses: Record<PropertyBadgeTone, string> = {
  positive: "bg-stat-positive/10 text-stat-positive",
  primary: "bg-primary/10 text-primary",
  warning: "bg-warning/10 text-warning"
};

const viewModes = [
  { id: "grid" as const, icon: LayoutGrid, label: "Grid view" },
  { id: "list" as const, icon: List, label: "List view" }
];

export function AllProperties() {
  const [activeRange, setActiveRange] = useState<string>(timeRanges[0]);
  const [viewMode, setViewMode] = useState<(typeof viewModes)[number]["id"]>("grid");

  return (
    <div className="flex h-full flex-1 overflow-hidden bg-muted/10">
      <div className="flex h-full flex-1 flex-col">
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <section className="rounded-3xl border border-border bg-background px-8 py-7 shadow-sm">
              <div className="flex flex-col gap-8">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">All properties</p>
                    <h1 className="text-3xl font-semibold text-foreground">See reviews for all properties</h1>
                    <p className="text-sm text-muted-foreground">
                      Quickly compare guest sentiment, key highlights, and performance across your portfolio.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 rounded-full border border-border bg-muted/40 p-1">
                      {viewModes.map(({ id, icon: Icon, label }) => (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setViewMode(id)}
                          className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 ${
                            viewMode === id
                              ? "bg-background text-foreground shadow"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                          aria-pressed={viewMode === id}
                        >
                          <Icon className="h-4 w-4" />
                          <span className="hidden sm:inline">{label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {timeRanges.map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setActiveRange(range)}
                      className={`rounded-full px-4 py-2 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 ${
                        activeRange === range
                          ? "bg-foreground text-background"
                          : "bg-muted/60 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>

                <div className="grid gap-5">
                  <SearchBar />
                  <div className="flex flex-wrap items-center gap-2">
                    {filters.map((filter) => (
                      <button
                        key={filter}
                        type="button"
                        className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                      >
                        <span>{filter}</span>
                        <ChevronDown className="h-3.5 w-3.5" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-foreground">{properties.length} properties</h2>
                    <span className="text-xs text-muted-foreground">Filtered by {activeRange}</span>
                  </div>

                  {viewMode === "grid" ? (
                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                      {properties.map((property) => (
                        <Link
                          key={property.id}
                          to={`/properties/${property.id}`}
                          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background/90 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                        >
                          <div className="relative overflow-hidden">
                            <img
                              src={property.image}
                              alt={property.name}
                              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex flex-1 flex-col gap-5 p-5">
                            <div className="space-y-3">
                              <div className="space-y-1.5">
                                <h3 className="text-lg font-semibold text-foreground">{property.name}</h3>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <MapPin className="h-3.5 w-3.5" />
                                  <span>{property.location}</span>
                                </div>
                              </div>
                              <div className="flex flex-wrap items-center gap-2 text-sm">
                                <span
                                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                                    badgeToneClasses[property.badge.tone]
                                  }`}
                                >
                                  <Star className="h-3.5 w-3.5" />
                                  {property.badge.label}
                                </span>
                                <span className="text-muted-foreground">{property.reviews} reviews</span>
                              </div>
                            </div>

                            <div className="space-y-3 rounded-2xl bg-muted/40 p-4">
                              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                Worthy mentions
                              </div>
                              <div className="grid gap-3">
                                {property.mentions.map((mention) => (
                                  <div
                                    key={mention.label}
                                    className="flex items-center justify-between text-sm text-muted-foreground"
                                  >
                                    <span>{mention.label}</span>
                                    <span className="font-semibold text-foreground">{mention.score}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                              <span className="inline-flex items-center gap-2 rounded-full bg-stat-positive/10 px-3 py-1 text-xs font-medium text-stat-positive">
                                <ArrowUpRight className="h-3.5 w-3.5" />
                                {property.goodPercentage}% good reviews
                              </span>
                              <span className="inline-flex items-center gap-2 rounded-full bg-stat-negative/10 px-3 py-1 text-xs font-medium text-stat-negative">
                                <ArrowDownRight className="h-3.5 w-3.5" />
                                {property.badPercentage}% bad reviews
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {properties.map((property) => (
                        <Link
                          key={property.id}
                          to={`/properties/${property.id}`}
                          className="group flex flex-col gap-6 rounded-2xl border border-border bg-background/90 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg md:flex-row"
                        >
                          <div className="overflow-hidden rounded-2xl md:w-64 lg:w-72">
                            <img
                              src={property.image}
                              alt={property.name}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex flex-1 flex-col justify-between gap-6">
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                              <div className="space-y-3">
                                <div className="space-y-1.5">
                                  <h3 className="text-lg font-semibold text-foreground">{property.name}</h3>
                                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <MapPin className="h-3.5 w-3.5" />
                                    <span>{property.location}</span>
                                  </div>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 text-sm">
                                  <span
                                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                                      badgeToneClasses[property.badge.tone]
                                    }`}
                                  >
                                    <Star className="h-3.5 w-3.5" />
                                    {property.badge.label}
                                  </span>
                                  <span className="text-muted-foreground">{property.reviews} reviews</span>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-2 rounded-full bg-stat-positive/10 px-3 py-1 text-xs font-medium text-stat-positive">
                                  <ArrowUpRight className="h-3.5 w-3.5" />
                                  {property.goodPercentage}% good reviews
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full bg-stat-negative/10 px-3 py-1 text-xs font-medium text-stat-negative">
                                  <ArrowDownRight className="h-3.5 w-3.5" />
                                  {property.badPercentage}% bad reviews
                                </span>
                              </div>
                            </div>
                            <div className="space-y-3 rounded-2xl bg-muted/40 p-4">
                              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                Worthy mentions
                              </div>
                              <div className="grid gap-3 sm:grid-cols-3">
                                {property.mentions.map((mention) => (
                                  <div
                                    key={mention.label}
                                    className="flex flex-col gap-1 rounded-xl border border-border bg-background/80 p-3"
                                  >
                                    <span className="text-xs font-medium text-muted-foreground">{mention.label}</span>
                                    <span className="text-base font-semibold text-foreground">{mention.score}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
