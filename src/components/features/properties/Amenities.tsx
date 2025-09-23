import { Tv, Wifi, ChefHat, WashingMachine, Coffee, Zap, Clock } from "lucide-react";
import { 
  SofaIcon, 
  NetworkIcon, 
  WifiIcon, 
  UtensilsCrossedIcon, 
  WashingMachineIcon, 
  ArrowUpDownIcon, 
  WindIcon, 
  ThermometerIcon, 
  ChevronRightIcon 
} from "@/components/icons";

const Amenities = () => {
  return (
    <div className="rounded-lg text-card-foreground p-6 mb-12 bg-white border-0 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-[#333333]">Amenities</h2>
        <button 
          className="justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border bg-background shadow-sm h-9 px-4 py-2 flex items-center gap-2 border-[#284E4C]/20 text-[#284E4C] hover:bg-[#284E4C]/5" 
          type="button" 
        >
          View all amenities
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 text-[#5C5C5A]">
          <div className="p-2 rounded-full">
            <SofaIcon className="h-4 w-4" />
          </div>
          <span className="capitalize">
            <span>Cable TV</span>
          </span>
        </div>
        <div className="flex items-center gap-3 text-[#5C5C5A]">
          <div className="p-2 rounded-full">
            <NetworkIcon className="h-4 w-4" />
          </div>
          <span className="capitalize">
            <span>Internet</span>
          </span>
        </div>
        <div className="flex items-center gap-3 text-[#5C5C5A]">
          <div className="p-2 rounded-full">
            <WifiIcon className="h-4 w-4" />
          </div>
          <span className="capitalize">
            <span>Wireless</span>
          </span>
        </div>
        <div className="flex items-center gap-3 text-[#5C5C5A]">
          <div className="p-2 rounded-full">
            <UtensilsCrossedIcon className="h-4 w-4" />
          </div>
          <span className="capitalize">
            <span>Kitchen</span>
          </span>
        </div>
        <div className="flex items-center gap-3 text-[#5C5C5A]">
          <div className="p-2 rounded-full">
            <WashingMachineIcon className="h-4 w-4" />
          </div>
          <span className="capitalize">
            <span>Washing Machine</span>
          </span>
        </div>
        <div className="flex items-center gap-3 text-[#5C5C5A]">
          <div className="p-2 rounded-full">
            <ArrowUpDownIcon className="h-4 w-4" />
          </div>
          <span className="capitalize">
            <span>Elevator</span>
          </span>
        </div>
        <div className="flex items-center gap-3 text-[#5C5C5A]">
          <span className="capitalize">
            <span>24-hour checkin</span>
          </span>
        </div>
        <div className="flex items-center gap-3 text-[#5C5C5A]">
          <div className="p-2 rounded-full">
            <WindIcon className="h-4 w-4" />
          </div>
          <span className="capitalize">
            <span>Hair Dryer</span>
          </span>
        </div>
        <div className="flex items-center gap-3 text-[#5C5C5A]">
          <div className="p-2 rounded-full">
            <ThermometerIcon className="h-4 w-4" />
          </div>
          <span className="capitalize">
            <span>Heating</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Amenities;