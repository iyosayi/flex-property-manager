import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import mainImage from "@/assets/images/properties/property-main.jpeg";
import bedroom1 from "@/assets/images/properties/property-bedroom1.jpeg";
import bedroom2 from "@/assets/images/properties/property-bedroom2.jpeg";
import bathroom from "@/assets/images/properties/property-bathroom.jpeg";
import kitchen from "@/assets/images/properties/property-kitchen.jpeg";

const PropertyGallery = () => {
  const thumbnailImages = [bedroom1, bedroom2, bathroom, kitchen];

  return (
    <div className="relative mb-8 md:mb-12">
      <div className="hidden md:block">
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[600px]">
          <div className="col-span-2 row-span-2 relative cursor-pointer group">
            {/* Main image */}
            <img
              src={mainImage}
              alt="Main property view - modern living room"
              className="w-full h-full object-cover rounded-lg shadow-sm"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-200 rounded-l-xl"></div>
          </div>
          {/* Thumbnail images */}
          {thumbnailImages.map((image, index) => (
            <div key={index} className="relative cursor-pointer group">
              <img
                src={image}
                alt={`Property view ${index + 2}`}
                className="w-full h-full object-cover rounded-lg shadow-sm"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-200"></div>
              {/* Show "View all photos" button on last image */}
              {index === 3 && (
                <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="text-xs">
                    <Eye className="h-3 w-3 mr-1" />
                    View all photos
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyGallery;