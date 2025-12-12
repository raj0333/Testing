import { Search, Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  sidebarExpanded: boolean;
}

const Header = ({ sidebarExpanded }: HeaderProps) => {
  return (
    <header 
      className="h-16 bg-card border-b border-border flex items-center justify-between px-6 fixed top-0 right-0 z-40 transition-all duration-300"
      style={{ left: sidebarExpanded ? '224px' : '64px' }}
    >
      {/* Page Title */}
      <h1 className="text-lg font-semibold text-foreground">Position & Job Role</h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            type="text"
            placeholder="Search"
            className="pl-10 w-64 bg-secondary border-border"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <Avatar className="w-9 h-9">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">Amitesh Kumar</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
