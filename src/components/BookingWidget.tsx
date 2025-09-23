import {
  CalendarIcon,
  XIcon,
  UsersIcon,
  ChevronDownIcon,
  TicketIcon,
  CalendarCheckIcon,
  MessageCircleIcon,
  ShieldIcon
} from "./bookingIcons";

const BookingWidget = () => {
  return (
    <div className="text-card-foreground sticky top-24 overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#284E4C]"></div>
        <div className="relative p-6">
          <h3 className="text-lg font-semibold text-[#FFFFFF] mb-1">Book Your Stay</h3>
          <p className="text-sm text-[#D2DADA]">Select dates to see prices</p>
        </div>
      </div>

      <div className="p-6 pt-4">
        <div className="space-y-1">
          <div className="flex gap-2">
            <div className="flex-1">
              <div className="grid w-full h-full [&>button]:w-full [&>button]:justify-start [&>button]:text-left [&>button]:h-[42px] [&>button]:bg-[#F1F3EE] [&>button]:border-0 [&>button]:shadow-sm [&>button]:hover:bg-[#FFFDF6] [&>button]:rounded-l-md [&>button]:rounded-r-none">
                <button
                  className="inline-flex items-center whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input px-4 py-2 w-full h-full justify-start text-left font-normal bg-transparent border-0 shadow-none transition-colors rounded-none group hover:bg-transparent hover:text-current"
                  id="date"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:r4l:"
                  data-state="closed"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <div className="flex items-center justify-between w-full">
                    <span>Oct 04 - Oct 07</span>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full">
                      <XIcon className="h-3 w-3 text-gray-500" />
                    </button>
                  </div>
                </button>
              </div>
            </div>

            <div className="w-[120px]">
              <button
                type="button"
                role="combobox"
                aria-controls="radix-:r4m:"
                aria-expanded="false"
                aria-autocomplete="none"
                dir="ltr"
                data-state="closed"
                className="flex w-full items-center justify-between rounded-md border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 h-[42px] bg-[#F1F3EE] border-0 shadow-sm hover:bg-[#FFFDF6] transition-colors text-[#333333] rounded-l-none rounded-r-md"
                aria-label="Select number of guests"
              >
                <div className="flex items-center gap-2">
                  <UsersIcon className="h-4 w-4 text-muted-foreground" />
                  <span style={{ pointerEvents: 'none' }}>1</span>
                </div>
                <ChevronDownIcon className="h-4 w-4 opacity-50" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-0">
          <div className="space-y-1 rounded-xl p-4">
            <div className="flex justify-between items-center">
              <span className="text-[#5C5C5A]">Check-in</span>
              <span className="font-medium text-[#333333]">Oct 04</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#5C5C5A]">Check-out</span>
              <span className="font-medium text-[#333333]">Oct 07</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#5C5C5A]">Guests</span>
              <span className="font-medium text-[#333333]">1 guests</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[#5C5C5A]">Price per night (3 nights)</span>
              <span className="font-medium text-[#333333]">£630</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#5C5C5A]">Cleaning fee</span>
              <span className="font-medium text-[#333333]">£100</span>
            </div>

            <div className="space-y-2">
              <label
                className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm text-[#284E4C] flex items-center gap-2"
                htmlFor="coupon-input"
              >
                <TicketIcon className="h-4 w-4 text-[#284E4C]" />
                Have a coupon?
              </label>
              <div className="relative">
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-20 bg-[#F1F3EE] border-[#284E4C]/10 shadow-sm transition-all duration-200 focus-visible:ring-[#284E4C]/20 focus-visible:border-[#284E4C]/30 text-[#333333] hover:border-[#FFFDF6]/20"
                  id="coupon-input"
                  placeholder="Enter code"
                  type="text"
                  defaultValue=""
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-md text-xs h-7 px-3 mr-1 font-medium transition-all text-[#284E4C] hover:text-[#284E4C]/80"
                    type="button"
                    disabled
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="font-semibold text-lg text-[#333333]">Total</span>
              <div className="text-right">
                <span className="font-bold text-lg text-[#333333]">£730</span>
              </div>
            </div>

            <div className="space-y-2 pt-6">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-12 rounded-md px-8 w-full bg-[#284E4C] hover:bg-[#284E4C]/90 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                <CalendarCheckIcon className="mr-2 h-4 w-4" />
                Book Now
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border bg-background shadow-sm h-12 rounded-md px-8 w-full border-[#284E4C]/20 text-[#284E4C] hover:bg-[#284E4C]/5 hover:border-[#284E4C]/30">
                <MessageCircleIcon className="mr-2 h-4 w-4" />
                Send Inquiry
              </button>
            </div>
          </div>
        </div>

        <p className="text-sm text-[#5C5C5A] text-center mt-4">
          <span className="inline-flex items-center gap-1">
            <ShieldIcon className="h-3 w-3" />
            Instant booking confirmation
          </span>
        </p>
      </div>

    </div>
  );
};

export default BookingWidget;