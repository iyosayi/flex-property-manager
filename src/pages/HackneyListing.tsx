import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Bath,
  BedDouble,
  CalendarDays,
  Car,
  Check,
  ClipboardCheck,
  Coffee,
  Crown,
  DoorOpen,
  Dumbbell,
  Globe,
  Heart,
  Home,
  MapPin,
  Share2,
  Shield,
  ShieldCheck,
  Snowflake,
  Star,
  Tv,
  Undo2,
  Users,
  Utensils,
  Wifi
} from "lucide-react";

import mainImage from "@/assets/apartment-1.jpg";
import galleryA from "@/assets/apartment-2.jpg";
import galleryB from "@/assets/apartment-3.jpg";
import galleryC from "@/assets/apartment-collage-1.jpg";

const galleryImages = [
  { src: mainImage, alt: "Open plan living room with dining table" },
  { src: galleryA, alt: "Bright bedroom with balcony access" },
  { src: galleryB, alt: "Neutral toned guest bedroom" },
  { src: galleryC, alt: "Modern bathroom with rainfall shower" },
  {
    src: "https://images.unsplash.com/photo-1505692794403-55b39e6de1e5?auto=format&fit=crop&w=900&q=80",
    alt: "Fully equipped contemporary kitchen"
  }
];

const amenityItems: { icon: LucideIcon; label: string }[] = [
  { icon: BedDouble, label: "2 bedrooms" },
  { icon: Bath, label: "2 bathrooms" },
  { icon: Users, label: "Sleeps up to 4 guests" },
  { icon: Wifi, label: "Ultrafast Wi-Fi" },
  { icon: Utensils, label: "Chef's kitchen" },
  { icon: Snowflake, label: "Air conditioning" },
  { icon: Dumbbell, label: "Fitness studio" },
  { icon: Coffee, label: "Specialty coffee bar" },
  { icon: Tv, label: "55\" smart TV" },
  { icon: ShieldCheck, label: "24/7 concierge" },
  { icon: DoorOpen, label: "Self check-in" },
  { icon: Car, label: "Secure parking" }
];

const stayPolicies: { icon: LucideIcon; title: string; details: string[] }[] = [
  {
    icon: CalendarDays,
    title: "Check-in & Check-out",
    details: ["Check-in after 3:00 PM", "Check-out before 11:00 AM"]
  },
  {
    icon: ClipboardCheck,
    title: "House Rules",
    details: ["No smoking", "No pets", "No parties or events"]
  },
  {
    icon: Shield,
    title: "Health & Safety",
    details: ["Carbon monoxide alarm", "Security cameras on property"]
  },
  {
    icon: Undo2,
    title: "Cancellation Policy",
    details: ["Full refund up to 48 hours before check-in", "50% refund up to 24 hours"]
  }
];

const stayHighlights: { icon: LucideIcon; label: string; description: string }[] = [
  {
    icon: Crown,
    label: "Premium linens",
    description: "Egyptian cotton bedding and luxury bath amenities"
  },
  {
    icon: Home,
    label: "Private balcony",
    description: "Sun-drenched terrace overlooking Hackney's green streets"
  },
  {
    icon: Globe,
    label: "Local insights",
    description: "Personalised Hackney guide curated by our host"
  }
];

const quickLinks = ["About", "Careers", "Press", "Blog"];
const finePrintLinks = ["Terms & Conditions", "Privacy Policy", "Cookies", "Sustainability"];
const locationLinks = ["London", "Manchester", "Edinburgh", "Bristol"];
const contactLinks = ["hello@theowl.stay", "+44 20 1234 5678", "Live chat", "@theowlstay"];

const primaryText = "text-[#1f3d3b]";
const mutedText = "text-[#4f6764]";
const surfaceBorder = "border-[#e6dfd6]";
const surfaceBg = "bg-[#fdfbf6]";
const HackneyListing = () => {
  return (
    <div className={`min-h-screen ${surfaceBg} ${primaryText}`}>
      <header className="border-b border-[#e6dfd6] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-5">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f433f] text-xl font-semibold text-white">
                🦉
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-[#0f433f]">The Owl Stay</span>
                <span className="text-xs uppercase tracking-[0.3em] text-[#6a7d7a]">Boutique Stays</span>
              </div>
            </div>
            <nav className="hidden items-center gap-7 text-sm font-medium text-[#315652] lg:flex">
              {['Stays', 'Locations', 'Deals', 'Inspiration', 'Support'].map((item) => (
                <a key={item} href="#" className="transition-colors hover:text-[#0f433f]">
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <button className="rounded-full border border-[#0f433f]/20 px-5 py-2 text-sm font-medium text-[#0f433f] transition-colors hover:border-[#0f433f] hover:text-[#0f433f]">
                List your stay
              </button>
              <button className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#e6dfd6] text-[#0f433f] transition-colors hover:border-[#0f433f] lg:flex">
                <MapPin className="h-5 w-5" />
              </button>
              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e6dfd6] text-[#0f433f] transition-colors hover:border-[#0f433f]">
                <Users className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-3xl rounded-full border border-[#e6dfd6] bg-white p-2 shadow-sm">
            <div className="flex flex-col divide-y divide-[#e6dfd6] text-sm text-[#315652] sm:flex-row sm:items-center sm:divide-y-0 sm:divide-x">
              <div className="flex flex-1 flex-col gap-1 px-5 py-3">
                <span className="text-xs uppercase tracking-wide text-[#6f837f]">Location</span>
                <span className="text-base font-semibold text-[#0f433f]">Hackney, London</span>
              </div>
              <div className="flex flex-1 flex-col gap-1 px-5 py-3">
                <span className="text-xs uppercase tracking-wide text-[#6f837f]">Dates</span>
                <span className="text-base font-semibold text-[#0f433f]">12 - 18 Sep</span>
              </div>
              <div className="flex flex-1 flex-col gap-1 px-5 py-3">
                <span className="text-xs uppercase tracking-wide text-[#6f837f]">Guests</span>
                <span className="text-base font-semibold text-[#0f433f]">2 adults</span>
              </div>
              <div className="flex items-center justify-center px-4 py-2">
                <button className="flex items-center gap-2 rounded-full bg-[#0f433f] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:translate-y-[-1px]">
                  <ArrowUpRight className="h-4 w-4" />
                  Search stays
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] px-6 pb-24 pt-12">
        <div className="flex flex-col gap-8 border-b border-[#e6dfd6] pb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#315652]">
                <span className="flex items-center gap-2 font-medium text-[#0f433f]">
                  <Star className="h-4 w-4 fill-[#f6c94c] text-[#f6c94c]" />
                  4.95 <span className="font-normal text-[#6f837f]">(128 reviews)</span>
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#0f433f]" />
                  Hackney, London
                </span>
                <span className="rounded-full bg-[#0f433f]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0f433f]">
                  Plus Collection
                </span>
              </div>
              <h1 className="text-3xl font-semibold leading-tight text-[#0f433f] sm:text-4xl">
                Deluxe 2-Bed Flat with Balcony in Hackney
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-full border border-[#e6dfd6] px-4 py-2 text-sm font-medium text-[#315652] transition-colors hover:border-[#0f433f] hover:text-[#0f433f]">
                <Share2 className="h-4 w-4" /> Share
              </button>
              <button className="flex items-center gap-2 rounded-full border border-[#e6dfd6] px-4 py-2 text-sm font-medium text-[#315652] transition-colors hover:border-[#0f433f] hover:text-[#0f433f]">
                <Heart className="h-4 w-4" /> Save
              </button>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
            <div className="overflow-hidden rounded-[32px]">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="h-full w-full min-h-[360px] object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.slice(1).map((image) => (
                <div key={image.alt} className="overflow-hidden rounded-3xl">
                  <img src={image.src} alt={image.alt} className="h-full w-full min-h-[170px] object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-10">
            <section className={`rounded-[32px] border ${surfaceBorder} bg-white p-10 shadow-[0_30px_60px_-40px_rgba(15,67,63,0.35)]`}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-[#0f433f]">About this property</h2>
                  <p className={`${mutedText} text-base leading-relaxed`}>
                    This thoughtfully designed apartment in London's Hackney offers a perfectly proportioned layout,
                    considered design details and generous natural light. Enjoy morning coffee on the private balcony,
                    unwind in the tranquil bedrooms with hotel-quality linens, and cook like a local in the fully equipped
                    kitchen stocked with chef's essentials.
                  </p>
                </div>

                <div className="grid gap-6 rounded-3xl bg-[#f7f1e9] p-6 sm:grid-cols-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-3xl font-semibold text-[#0f433f]">2</span>
                    <span className={`${mutedText} text-sm`}>Bedrooms with balcony access</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-3xl font-semibold text-[#0f433f]">2</span>
                    <span className={`${mutedText} text-sm`}>Spa-inspired bathrooms</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-3xl font-semibold text-[#0f433f]">120㎡</span>
                    <span className={`${mutedText} text-sm`}>Of thoughtfully curated space</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-[#0f433f]">Amenities</h3>
                    <button className="text-sm font-semibold text-[#0f433f] underline-offset-4 transition-colors hover:underline">
                      View all amenities
                    </button>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {amenityItems.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-3 rounded-2xl border border-[#f0e9de] bg-[#fdfbf6] px-4 py-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f433f]/10 text-[#0f433f]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className={`${mutedText} text-sm font-medium`}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold text-[#0f433f]">Stay Policies</h2>
                <p className={`${mutedText} text-base`}>Everything you need to know before you arrive.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {stayPolicies.map(({ icon: Icon, title, details }) => (
                  <div
                    key={title}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-[#f0e9de] bg-white p-6 shadow-[0_20px_45px_-38px_rgba(15,67,63,0.6)]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f433f]/10 text-[#0f433f]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-[#0f433f]">{title}</h3>
                    <ul className="space-y-1">
                      {details.map((item) => (
                        <li key={item} className={`${mutedText} text-sm`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="flex flex-col gap-6">
            <div className={`rounded-[32px] border ${surfaceBorder} bg-white p-8 shadow-[0_40px_70px_-50px_rgba(15,67,63,0.6)]`}>
              <div className="flex items-end justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-[#0f433f]">£320</span>
                  <span className={`${mutedText} text-sm`}>night</span>
                </div>
                <span className="rounded-full bg-[#0f433f]/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#0f433f]">
                  Best rate
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-3xl border border-[#f0e9de]">
                <div className="flex flex-col gap-1 border-b border-[#f0e9de] px-4 py-4">
                  <span className="text-xs uppercase tracking-wide text-[#6f837f]">Check-in</span>
                  <span className="text-base font-semibold text-[#0f433f]">12 Sep 2024</span>
                </div>
                <div className="flex flex-col gap-1 border-l border-[#f0e9de] px-4 py-4">
                  <span className="text-xs uppercase tracking-wide text-[#6f837f]">Check-out</span>
                  <span className="text-base font-semibold text-[#0f433f]">18 Sep 2024</span>
                </div>
                <div className="flex flex-col gap-1 border-t border-[#f0e9de] px-4 py-4">
                  <span className="text-xs uppercase tracking-wide text-[#6f837f]">Guests</span>
                  <span className="text-base font-semibold text-[#0f433f]">2 adults</span>
                </div>
                <div className="flex items-center justify-center border-l border-t border-[#f0e9de] px-4 py-4">
                  <button className="flex items-center gap-2 rounded-full bg-[#0f433f] px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
                    <CalendarDays className="h-4 w-4" />
                    Edit dates
                  </button>
                </div>
              </div>

              <button className="mt-6 w-full rounded-full bg-[#0f433f] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5">
                Book your stay
              </button>
              <p className={`${mutedText} mt-3 text-center text-xs`}>You won't be charged yet</p>

              <div className="mt-6 space-y-3 rounded-3xl bg-[#f7f1e9] p-5 text-sm">
                <div className="flex items-center justify-between text-[#0f433f]">
                  <span>£320 × 6 nights</span>
                  <span>£1,920</span>
                </div>
                <div className="flex items-center justify-between text-[#0f433f]">
                  <span>Cleaning fee</span>
                  <span>£95</span>
                </div>
                <div className="flex items-center justify-between text-[#0f433f]">
                  <span>Service fee</span>
                  <span>£120</span>
                </div>
                <div className="border-t border-dashed border-[#d9d1c6] pt-3">
                  <div className="flex items-center justify-between text-base font-semibold text-[#0f433f]">
                    <span>Total</span>
                    <span>£2,135</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#f0e9de] bg-white p-6 shadow-[0_30px_60px_-45px_rgba(15,67,63,0.6)]">
              <h3 className="text-lg font-semibold text-[#0f433f]">This stay includes</h3>
              <div className="mt-4 space-y-3">
                {stayHighlights.map(({ icon: Icon, label, description }) => (
                  <div key={label} className="flex gap-3">
                    <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#0f433f]/10 text-[#0f433f]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#0f433f]">{label}</p>
                      <p className={`${mutedText} text-xs leading-relaxed`}>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-[#f0e9de] bg-[#f7f1e9] p-6 text-sm text-[#315652] shadow-[0_20px_50px_-45px_rgba(15,67,63,0.6)]">
              <p className="font-semibold text-[#0f433f]">Have a question about your stay?</p>
              <p className="mt-1 leading-relaxed text-[#4f6764]">
                Our Hackney host team is available 24/7 via live chat or WhatsApp. Expect a response within minutes.
              </p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#0f433f] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#0f433f] transition-colors hover:bg-[#0f433f] hover:text-white">
                <Check className="h-4 w-4" />
                Message the host
              </button>
            </div>
          </aside>
        </div>

        <section className="mt-16 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-[#0f433f]">Location</h2>
            <p className={`${mutedText} text-base`}>Hackney, London, United Kingdom</p>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-[#e6dfd6] bg-white shadow-[0_35px_60px_-45px_rgba(15,67,63,0.6)]">
            <img
              src="https://staticmap.openstreetmap.de/staticmap.php?center=51.545,-0.055&zoom=13&size=1200x420&maptype=mapnik"
              alt="Map showing Hackney in London"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-[#315652]">
            <span>Exact location provided after booking. Close to Hackney Downs Park and popular cafes on Broadway Market.</span>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f433f] underline-offset-4 transition-colors hover:underline">
              <ArrowUpRight className="h-4 w-4" />
              Open in Google Maps
            </button>
          </div>
        </section>
      </main>

      <footer className="mt-24 bg-[#0f433f] text-[#f6f3ed]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl">🦉</div>
                <div className="flex flex-col">
                  <span className="text-xl font-semibold">Join The Owl</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/70">For modern travellers</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/80">
                Subscribe for curated stay inspiration, local tips and seasonal offers across our favourite neighbourhoods.
              </p>
              <form className="mt-2 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-11 flex-1 rounded-full border border-white/30 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0f433f] transition-transform hover:-translate-y-0.5"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                {quickLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition-colors hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white">The Fine Print</h4>
              <ul className="space-y-2 text-sm text-white/80">
                {finePrintLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition-colors hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Locations</h4>
              <ul className="space-y-2 text-sm text-white/80">
                {locationLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition-colors hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Contact Us</h4>
              <ul className="space-y-2 text-sm text-white/80">
                {contactLinks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
            <span>© {new Date().getFullYear()} The Owl Stay. All rights reserved.</span>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="hover:text-white">
                Instagram
              </a>
              <a href="#" className="hover:text-white">
                Pinterest
              </a>
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      <button
        className="fixed bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl shadow-[#25d366]/40"
        aria-label="Chat on WhatsApp"
      >
        <Users className="h-7 w-7" />
      </button>
    </div>
  );
};

export default HackneyListing;
