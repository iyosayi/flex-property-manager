import { Home, TrendingUp, Settings, BarChart3, Map } from "lucide-react";

const navigationItems = [
  { icon: Home, label: "Overview", active: true },
  { icon: BarChart3, label: "Trends", active: false },
  { icon: Map, label: "Map", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export function Sidebar() {
  return (
    <div className="w-16 bg-sidebar-bg text-sidebar-text flex flex-col items-center py-6 space-y-6">
      {/* Logo */}
      <div className="w-10 h-10 bg-sidebar-text rounded-lg flex items-center justify-center">
        <div className="w-6 h-6 bg-sidebar-bg rounded"></div>
      </div>
      
      {/* Navigation */}
      <nav className="flex flex-col space-y-4">
        {navigationItems.map((item, index) => (
          <button
            key={index}
            className={`p-3 rounded-lg transition-colors ${
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
  );
}