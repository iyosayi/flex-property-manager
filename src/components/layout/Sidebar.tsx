import { NavLink } from "react-router-dom";
import { Home, Building2, Globe } from "lucide-react";
import logo from "@/assets/images/common/the_flex.png";

const navigationItems = [
  { icon: Home, label: "Overview", to: "/" },
  { icon: Building2, label: "Properties", to: "/properties" },
  { icon: Globe, label: "Public Website", to: "/website" },
];

export function Sidebar() {
  return (
    <aside className="flex h-full w-24 flex-shrink-0 flex-col items-center border-r border-border bg-sidebar-bg pb-10 pt-8 text-sidebar-text">
      <div className="flex h-full flex-col items-center gap-10">
        {/* Logo */}
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sidebar-text text-sidebar-bg overflow-hidden">
          <img 
            src={logo} 
            alt="The Flex Logo" 
            className="h-8 w-8 object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col items-center gap-4">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            if (item.to) {
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  aria-label={item.label}
                  className={({ isActive }) =>
                    `flex flex-col items-center gap-1 transition-colors ${
                      isActive
                        ? "text-sidebar-text"
                        : "text-sidebar-icon hover:text-sidebar-text"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                        isActive
                          ? "bg-sidebar-hover text-sidebar-text shadow-sm"
                          : "text-sidebar-icon hover:bg-sidebar-hover hover:text-sidebar-text"
                      }`}>
                        <Icon size={20} />
                      </div>
                      <span className="text-xs font-medium">{item.label}</span>
                    </>
                  )}
                </NavLink>
              );
            }

            return (
              <button
                key={item.label}
                type="button"
                aria-label={item.label}
                className="flex flex-col items-center gap-1 text-sidebar-icon/70"
                disabled
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl">
                  <Icon size={20} />
                </div>
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
