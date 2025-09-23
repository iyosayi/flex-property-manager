import { 
  ClockIcon, 
  ShieldIcon, 
  BanIcon, 
  PawPrintIcon, 
  PartyPopperIcon, 
  CalendarClockIcon 
} from "./policyIcons";

const StayPolicies = () => {
  return (
    <div className="rounded-lg text-card-foreground p-6 mb-8 bg-white border-0 shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-[#333333]">Stay Policies</h2>
      <div className="space-y-8">
        {/* Check-in & Check-out Section */}
        <div className="bg-[#F1F3EE] rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-full">
              <ClockIcon className="h-5 w-5 text-[#284E4C]" />
            </div>
            <h3 className="font-semibold text-lg text-[#333333]">Check-in &amp; Check-out</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-[#5C5C5A]">Check-in Time</p>
              <p className="font-semibold text-lg text-[#333333]">3:00 PM</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-[#5C5C5A]">Check-out Time</p>
              <p className="font-semibold text-lg text-[#333333]">10:00 AM</p>
            </div>
          </div>
        </div>

        {/* House Rules Section */}
        <div className="bg-[#F1F3EE] rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-full">
              <ShieldIcon className="h-5 w-5 text-[#284E4C]" />
            </div>
            <h3 className="font-semibold text-lg text-[#333333]">House Rules</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-white rounded-lg p-4">
              <BanIcon className="h-5 w-5 text-[#5C5C5A]" />
              <p className="font-medium text-[#333333]">No smoking</p>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-lg p-4">
              <PawPrintIcon className="h-5 w-5 text-[#5C5C5A]" />
              <p className="font-medium text-[#333333]">No pets</p>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-lg p-4">
              <PartyPopperIcon className="h-5 w-5 text-[#5C5C5A]" />
              <p className="font-medium text-[#333333]">No parties or events</p>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-lg p-4">
              <ShieldIcon className="h-5 w-5 text-[#5C5C5A]" />
              <p className="font-medium text-[#333333]">Security deposit required</p>
            </div>
          </div>
        </div>

        {/* Cancellation Policy Section */}
        <div className="bg-[#F1F3EE] rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-full">
              <CalendarClockIcon className="h-5 w-5 text-[#284E4C]" />
            </div>
            <h3 className="font-semibold text-lg text-[#333333]">Cancellation Policy</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium mb-2 text-[#333333]">For stays less than 28 days</h4>
              <div className="flex items-start gap-2 text-sm text-[#5C5C5A]">
                <div className="w-2 h-2 bg-[#284E4C] rounded-full mt-1.5 flex-shrink-0"></div>
                <p>Full refund up to 14 days before check-in</p>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#5C5C5A] mt-1">
                <div className="w-2 h-2 bg-[#284E4C] rounded-full mt-1.5 flex-shrink-0"></div>
                <p>No refund for bookings less than 14 days before check-in</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium mb-2 text-[#333333]">For stays of 28 days or more</h4>
              <div className="flex items-start gap-2 text-sm text-[#5C5C5A]">
                <div className="w-2 h-2 bg-[#284E4C] rounded-full mt-1.5 flex-shrink-0"></div>
                <p>Full refund up to 30 days before check-in</p>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#5C5C5A] mt-1">
                <div className="w-2 h-2 bg-[#284E4C] rounded-full mt-1.5 flex-shrink-0"></div>
                <p>No refund for bookings less than 30 days before check-in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayPolicies;