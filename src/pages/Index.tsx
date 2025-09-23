import Header from "@/components/layout/Header";
import PropertyGallery from "@/components/features/properties/PropertiesGallery";
import PropertyDetails from "@/components/features/properties/PropertyDetailsReplica";
import Amenities from "@/components/features/properties/Amenities";
import BookingWidget from "@/components/features/booking/BookingWidget";
import StayPolicies from "@/components/features/booking/StaysPolicy";
import LocationMap from "@/components/features/properties/LocationMap";
import Footer from "@/components/layout/Footer";
import AboutProperty from "@/components/features/properties/AboutProperty";
import Reviews from "@/components/features/reviews/Reviews";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'rgb(255, 253, 246)' }}>
          <div style={{ paddingTop: '88px', }}></div>
          <main className="flex-grow">
            <div className="container mx-auto max-w-7xl px-3 md:px-4" style={{ backgroundColor: 'rgb(255, 253, 246)' }}>
            <PropertyGallery />
            <div className="mb-8 md:mb-12">
            <PropertyDetails />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8 mb-20 md:mb-8">
              <div className="lg:col-span-2">
                <AboutProperty />
                <Amenities />
                <StayPolicies />
                <LocationMap />
              </div>
              <div className="lg:col-span-1">
                <BookingWidget />
              </div>
            </div>
            
            {/* Reviews section spans full width */}
            <Reviews />
            </div>
          </main>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;