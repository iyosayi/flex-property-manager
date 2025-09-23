import { NavLink } from "react-router-dom";
import { Home, TrendingUp, Settings, Building2 } from "lucide-react";

const navigationItems = [
  { icon: Home, label: "Overview", to: "/" },
  { icon: Building2, label: "Properties", to: "/properties" },
  { icon: TrendingUp, label: "Trends" },
  { icon: Settings, label: "Settings" }
];

export function Sidebar() {
  return (
    <aside className="flex h-full w-20 flex-shrink-0 flex-col items-center border-r border-border bg-sidebar-bg pb-10 pt-8 text-sidebar-text">
      <div className="flex h-full flex-col items-center gap-10">
        {/* Logo */}
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sidebar-text text-sidebar-bg">
          <div className="h-7 w-7 rounded-xl bg-sidebar-bg" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col items-center gap-3">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            if (item.to) {
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  aria-label={item.label}
                  className={({ isActive }) =>
                    `flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                      isActive
                        ? "bg-sidebar-hover text-sidebar-text shadow-sm"
                        : "text-sidebar-icon hover:bg-sidebar-hover hover:text-sidebar-text"
                    }`
                  }
                >
                  <Icon size={20} />
                </NavLink>
              );
            }

            return (
              <button
                key={item.label}
                type="button"
                aria-label={item.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl text-sidebar-icon/70"
                disabled
              >
                <Icon size={20} />
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
