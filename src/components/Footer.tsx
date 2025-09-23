import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { 
  ChevronDownIcon, 
  SendIcon, 
  FacebookIcon, 
  InstagramIcon, 
  LinkedinIcon, 
  HeadphonesIcon, 
  MailIcon 
} from "./footerIcons";

const Footer = () => {
  return (
    // <footer className="bg-primary text-primary-foreground">
    //   <div className="container mx-auto px-6 py-12">
    //     <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
    //       {/* Newsletter Signup */}
    //       <div className="md:col-span-2">
    //         <h3 className="text-lg font-medium mb-4">Join The Flex</h3>
    //         <p className="text-sm opacity-90 mb-4">
    //           Sign up now and stay up to date on our latest news and exclusive deals including 5% off your first stay!
    //         </p>
    //         <div className="space-y-3">
    //           <div className="grid grid-cols-2 gap-2">
    //             <Input 
    //               placeholder="First name" 
    //               className="bg-background text-foreground border-border"
    //             />
    //             <Input 
    //               placeholder="Last name" 
    //               className="bg-background text-foreground border-border"
    //             />
    //           </div>
    //           <Input 
    //             placeholder="Email address" 
    //             className="bg-background text-foreground border-border"
    //           />
    //           <div className="flex gap-2">
    //             <Select>
    //               <SelectTrigger className="w-24 bg-background text-foreground border-border">
    //                 <SelectValue placeholder="+44" />
    //               </SelectTrigger>
    //               <SelectContent>
    //                 <SelectItem value="+44">+44</SelectItem>
    //                 <SelectItem value="+1">+1</SelectItem>
    //                 <SelectItem value="+33">+33</SelectItem>
    //               </SelectContent>
    //             </Select>
    //             <Input 
    //               placeholder="Phone number" 
    //               className="flex-1 bg-background text-foreground border-border"
    //             />
    //           </div>
    //           <Button className="w-full bg-background text-foreground hover:bg-muted">
    //             Subscribe
    //           </Button>
    //         </div>
    //       </div>

    //       {/* The Flex */}
    //       <div>
    //         <h4 className="font-medium mb-4">The Flex</h4>
    //         <ul className="space-y-2 text-sm opacity-90">
    //           <li>Professional property management services for landlords, flexible corporate lets for businesses and quality accommodation for long-term guests</li>
    //           <li className="pt-2">
    //             <div className="flex space-x-2">
    //               <Facebook className="h-4 w-4" />
    //               <Instagram className="h-4 w-4" />
    //               <Linkedin className="h-4 w-4" />
    //             </div>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Quick Links */}
    //       <div>
    //         <h4 className="font-medium mb-4">Quick Links</h4>
    //         <ul className="space-y-2 text-sm opacity-90">
    //           <li><a href="#" className="hover:opacity-100">Blog</a></li>
    //           <li><a href="#" className="hover:opacity-100">Careers</a></li>
    //           <li><a href="#" className="hover:opacity-100">Terms & Conditions</a></li>
    //           <li><a href="#" className="hover:opacity-100">Privacy Policy</a></li>
    //         </ul>
    //       </div>

    //       {/* Contact */}
    //       <div>
    //         <h4 className="font-medium mb-4">Contact Us</h4>
    //         <div className="space-y-2 text-sm opacity-90">
    //           <div>
    //             <p className="font-medium">Locations</p>
    //             <p>LONDON</p>
    //             <p>PARIS</p>
    //             <p>ALGIERS</p>
    //           </div>
    //           <div className="pt-2">
    //             <p className="font-medium">📞 Support Numbers</p>
    //             <p>United Kingdom</p>
    //             <p>+44 77 2794 6194</p>
    //             <p>France</p>
    //             <p>+33 757 62 22 41</p>
    //             <p>+33 634 49 42 27</p>
    //             <p>📧 info@theflex.global</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="border-t border-primary-foreground/20 mt-8 pt-4">
    //       <p className="text-xs opacity-75">© 2025 The Flex. All rights reserved.</p>
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-[#284E4C] text-white font-sans mt-0">
      <div className="container mx-auto px-4 py-16 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Newsletter Signup */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 font-sans" style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}>
                Join The Flex
              </h3>
              <p className="text-gray-300 mb-6 font-sans">
                Sign up now and stay up to date on our latest news and exclusive deals including 5% off your first stay!
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-sans" 
                  placeholder="First name" 
                  required 
                  type="text" 
                  defaultValue=""
                />
                <input 
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-sans" 
                  placeholder="Last name" 
                  required 
                  type="text" 
                  defaultValue=""
                />
              </div>
              <input 
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-sans" 
                placeholder="Email address" 
                required 
                type="email" 
                defaultValue=""
              />
              <div className="flex gap-2">
                <button 
                  type="button" 
                  role="combobox" 
                  aria-controls="radix-:rb:" 
                  aria-expanded="false" 
                  aria-autocomplete="none" 
                  dir="ltr" 
                  data-state="closed" 
                  className="flex items-center justify-between rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-[120px] h-10 min-h-[40px] bg-white/10 border-white/20 text-white font-sans"
                >
                  <div className="flex items-center gap-1 font-sans">
                    🇬🇧<span className="font-sans">+44</span>
                  </div>
                  <ChevronDownIcon className="h-4 w-4 opacity-50" aria-hidden="true" />
                </button>
                <input 
                  className="flex w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 h-10 min-h-[40px] bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-sans" 
                  placeholder="Phone number" 
                  required 
                  type="tel" 
                  defaultValue=""
                />
              </div>
              <button 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 w-full bg-white text-primary hover:bg-gray-100 transition-colors font-sans" 
                type="submit"
              >
                <SendIcon className="h-4 w-4 mr-2" />
                <span className="font-sans">Subscribe</span>
              </button>
            </form>
          </div>

          {/* The Flex */}
          <div className="lg:col-span-2">
            <h3 className="text-lg md:text-xl font-bold mb-4 font-sans" style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}>
              The Flex
            </h3>
            <p className="mb-4 text-gray-300 font-sans">
              Professional property management services for landlords, flexible corporate lets for businesses and quality accommodations for short-term and long-term guests.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/theflexliving/" className="text-white hover:text-gray-300 transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/theflex.global/?locale=us&hl=en" className="text-white hover:text-gray-300 transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/theflexliving" className="text-white hover:text-gray-300 transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg md:text-xl font-bold mb-4 font-sans" style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a className="text-gray-300 hover:text-white transition-colors font-sans" href="/blog">Blog</a></li>
              <li><a className="text-gray-300 hover:text-white transition-colors font-sans" href="/careers">Careers</a></li>
              <li><a className="text-gray-300 hover:text-white transition-colors font-sans" href="/terms">Terms &amp; Conditions</a></li>
              <li><a className="text-gray-300 hover:text-white transition-colors font-sans" href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2">
            <h3 className="text-lg md:text-xl font-bold mb-4 font-sans" style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}>
              Locations
            </h3>
            <ul className="space-y-2">
              <li><div className="text-gray-300 hover:text-white transition-colors font-sans cursor-pointer">LONDON</div></li>
              <li><div className="text-gray-300 hover:text-white transition-colors font-sans cursor-pointer">PARIS</div></li>
              <li><div className="text-gray-300 hover:text-white transition-colors font-sans cursor-pointer">ALGIERS</div></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-2">
            <h3 className="text-lg md:text-xl font-bold mb-4 font-sans" style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center mb-2">
                  <HeadphonesIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="font-medium font-sans">Support Numbers</span>
                </div>
                <ul className="space-y-2">
                  <li>
                    <a href="tel:+447723745646" className="flex items-center group text-gray-300 hover:text-white transition-colors">
                      <span className="mr-2">🇬🇧</span>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium font-sans">United Kingdom</span>
                        <span className="text-sm group-hover:text-gray-100 font-sans">+44 77 2374 5646</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+33757592241" className="flex items-center group text-gray-300 hover:text-white transition-colors">
                      <span className="mr-2">🇩🇿</span>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium font-sans">Algeria</span>
                        <span className="text-sm group-hover:text-gray-100 font-sans">+33 7 57 59 22 41</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+33644645717" className="flex items-center group text-gray-300 hover:text-white transition-colors">
                      <span className="mr-2">🇫🇷</span>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium font-sans">France</span>
                        <span className="text-sm group-hover:text-gray-100 font-sans">+33 6 44 64 57 17</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="mailto:info@theflex.global" className="text-gray-300 hover:text-white transition-colors font-sans">
                  info@theflex.global
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-white">
          <p className="font-sans">© 2025 The Flex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
