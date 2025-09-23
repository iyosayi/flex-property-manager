import { useState, useEffect } from "react";
import { Building2Icon, ChevronDownIcon, InfoIcon, BookOpenIcon, MailIcon, MenuIcon } from "./headerIcons";

const Header = () => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Trigger as soon as user scrolls past the header height (88px)
      // This means content has started to go out of view
      const shouldChange = scrollTop > 88;
      
      
      setIsScrolledToBottom(shouldChange);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // fixed left-0 right-0 w-full z-50 top-0 bg-[#284E4C] shadow-sm

  // Dynamic className and style based on scroll position
  const headerClassName = "fixed left-0 right-0 w-full z-50 top-0 transition-all duration-300";
  const headerStyle = {
    top: '0px',
    backgroundColor: isScrolledToBottom ? '#284E4C' : '#FFFDF6'
  };
  
  // Dynamic text color based on scroll position
  const textColor = isScrolledToBottom ? 'text-white' : 'text-[#333333]';

  return (
    <header className={headerClassName} style={headerStyle}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-[88px]">
          <a className="flex items-center" href="/">
            <div className="flex items-center">
                <p className={`text-2xl font-bold ${textColor}`}>the flex.</p>
          
            </div>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 font-medium ${textColor}`} type="button" id="radix-:r1:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
              <Building2Icon />
              Landlords
              <ChevronDownIcon />
            </button>
            <a className={`font-medium ${textColor}`} href="/about-us">
              <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 font-medium ${textColor}`}>
                <InfoIcon />
                About Us
              </button>
            </a>
            <a className={`font-medium ${textColor}`} href="/careers">
              <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 font-medium ${textColor}`}>
                <BookOpenIcon />
                Careers
              </button>
            </a>
            <a className={`font-medium ${textColor}`} href="/contact">
              <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 font-medium ${textColor}`}>
                <MailIcon />
                Contact
              </button>
            </a>
            <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 font-medium ${textColor}`} type="button" id="radix-:r3:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
              <span className="flex items-center">
                <span className="pr-4">🇬🇧</span>
                English
              </span>
            </button>
            <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 font-medium ${textColor}`} type="button" id="radix-:r5:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
              <span className="text-lg filter drop-shadow-sm">£</span>
              <span className="text-xs font-medium ml-1 filter drop-shadow-sm">GBP</span>
            </button>
          </div>
           <div className="md:hidden flex items-center gap-1">
             <button className={`inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-xs h-10 px-3 rounded-full border-2 border-transparent hover:border-white/20 transition-all duration-200 active:scale-95 ${textColor} hover:bg-gray-100`} type="button" id="radix-:r7:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
               <span className="text-lg filter drop-shadow-sm">🇬🇧</span>
               <span className="text-xs font-medium ml-1 filter drop-shadow-sm">GB</span>
             </button>
             <button className={`inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-xs h-10 px-3 rounded-full border-2 border-transparent hover:border-white/20 transition-all duration-200 active:scale-95 font-bold ${textColor} hover:bg-gray-100`} type="button" id="radix-:r9:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
               <span className="text-lg filter drop-shadow-sm">£</span>
               <span className="text-xs font-medium ml-1 filter drop-shadow-sm">GBP</span>
             </button>
             <button className={`inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-xs h-10 w-10 p-0 rounded-full border-2 border-transparent hover:border-white/20 transition-all duration-200 active:scale-95 ${textColor} hover:bg-gray-100`}>
               <MenuIcon />
             </button>
           </div>
        </nav>
      </div>
      
    </header>

    
  );
};

export default Header;