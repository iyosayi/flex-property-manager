import { Home, TrendingUp, Settings, BarChart3, Map } from "lucide-react";

const navigationItems = [
  { icon: Home, label: "Overview", active: true },
  { icon: BarChart3, label: "Trends", active: false },
  { icon: Map, label: "Map", active: false },
  { icon: Settings, label: "Settings", active: false },
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
          {navigationItems.map((item, index) => (
            <button
              key={index}
              className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                item.active
                  ? "bg-sidebar-hover text-sidebar-text"
                  : "text-sidebar-icon hover:bg-sidebar-hover hover:text-sidebar-text"
              }`}
            >
              <item.icon size={20} />
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}