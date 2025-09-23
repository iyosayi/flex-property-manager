import { Users, Bed, Bath, Home } from "lucide-react";
import { UsersIcon, BedIcon, BathIcon, HouseIcon } from "./icons";

const PropertyDetails = () => {
  return (
    <div className="mb-8 md:mb-12">
      <div className="hidden md:block">
        <h1 className="text-3xl font-bold mb-6 text-[#333333]">
          Deluxe 2 Bed Flat with Balcony in Hackney
        </h1>
        <div className="flex items-center gap-8 border-b border-gray-200 pb-8">
          <button data-state="closed">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full">
                <UsersIcon className="h-5 w-5 text-[#5C5C5A]" />
              </div>
              <div className="text-sm">
                <span className="font-medium text-[#333333]">5</span>
                <span className="text-[#5C5C5A] block">Guests</span>
              </div>
            </div>
          </button>
          <button data-state="closed">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full">
                <BedIcon className="h-5 w-5 text-[#5C5C5A]" />
              </div>
              <div className="text-sm">
                <span className="font-medium text-[#333333]">2</span>
                <span className="text-[#5C5C5A] block">Bedrooms</span>
              </div>
            </div>
          </button>
          <button data-state="closed">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full">
                <BathIcon className="h-5 w-5 text-[#5C5C5A]" />
              </div>
              <div className="text-sm">
                <span className="font-medium text-[#333333]">2</span>
                <span className="text-[#5C5C5A] block">Bathrooms</span>
              </div>
            </div>
          </button>
          <button data-state="closed">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full">
                <HouseIcon className="h-5 w-5 text-[#5C5C5A]" />
              </div>
              <div className="text-sm">
                <span className="font-medium text-[#333333]">3</span>
                <span className="text-[#5C5C5A] block">beds</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;