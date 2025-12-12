import { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  MessageSquare, 
  Users, 
  FileText, 
  Award, 
  Settings, 
  Target,
  Briefcase,
  ClipboardList,
  Brain,
  Cog,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: false },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: MessageSquare, label: 'Messages', active: false },
  { icon: Users, label: 'Position & Job Role', active: true },
  { icon: FileText, label: 'Documents', active: false },
  { icon: Award, label: 'Performance', active: false },
  { icon: Target, label: 'Goals', active: false },
  { icon: Briefcase, label: 'Jobs', active: false },
  { icon: ClipboardList, label: 'Tasks', active: false },
  { icon: Brain, label: 'Learning', active: false },
  { icon: Settings, label: 'Settings', active: false },
  { icon: Cog, label: 'Configuration', active: false },
];

interface SidebarProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isExpanded, onToggle }: SidebarProps) => {
  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border z-50 transition-all duration-300 flex flex-col",
        isExpanded ? "w-56" : "w-16"
      )}
    >
      {/* Logo Section */}
      <div className="h-16 flex items-center justify-center border-b border-sidebar-border px-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">M</span>
          </div>
          {isExpanded && (
            <span className="font-bold text-foreground text-lg animate-fade-in">MUFT</span>
          )}
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 py-4 px-2 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                  item.active 
                    ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {isExpanded && (
                  <span className="text-sm font-medium animate-fade-in truncate">
                    {item.label}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-20 w-6 h-6 bg-card border border-border rounded-full flex items-center justify-center shadow-sm hover:bg-muted transition-colors"
      >
        {isExpanded ? (
          <ChevronLeft className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        )}
      </button>
    </aside>
  );
};

export default Sidebar;
