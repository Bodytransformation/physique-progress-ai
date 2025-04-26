
import { Home, CalendarDays, User, Settings, BarChart3, MessageSquare, ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  // Check if sidebar state is saved in localStorage
  useEffect(() => {
    const savedState = localStorage.getItem("sidebar-collapsed");
    if (savedState) {
      setCollapsed(savedState === "true");
    }
  }, []);

  // Save sidebar state to localStorage
  const toggleSidebar = () => {
    const newState = !collapsed;
    setCollapsed(newState);
    localStorage.setItem("sidebar-collapsed", String(newState));
  };

  const navItems = [
    { path: "/", label: "Dashboard", icon: Home },
    { path: "/metrics", label: "Metrics", icon: BarChart3 },
    { path: "/progress", label: "Progress", icon: CalendarDays },
    { path: "/profile", label: "Profile", icon: User },
    { path: "/chatbot", label: "AI Coach", icon: MessageSquare },
    { path: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen transition-all duration-300 bg-sidebar border-r flex flex-col overflow-hidden ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="p-4 border-b flex items-center justify-between">
        {!collapsed && (
          <span className="text-xl font-bold text-fitness-primary">
            FitTrack
          </span>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className={collapsed ? "mx-auto" : ""}
        >
          {collapsed ? (
            <ArrowRightFromLine size={20} />
          ) : (
            <ArrowLeftFromLine size={20} />
          )}
        </Button>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const IconComponent = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 p-3 rounded-md transition-all ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              } ${collapsed ? "justify-center" : ""}`}
            >
              <IconComponent size={20} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t flex items-center justify-center">
        <ThemeToggle />
      </div>
    </div>
  );
}
