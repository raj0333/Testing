import { cn } from '@/lib/utils';

interface TabMenuProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'organization', label: 'Organization Structure' },
  { id: 'goals', label: 'Goals' },
  { id: 'my-goals', label: 'My Goals' },
  { id: 'my-jobs', label: 'My Jobs' },
  { id: 'performance', label: 'My Performance Contract' },
];

const TabMenu = ({ activeTab, onTabChange }: TabMenuProps) => {
  return (
    <nav className="space-y-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "w-full text-left px-4 py-2.5 text-sm transition-colors rounded-r-lg",
            activeTab === tab.id
              ? "text-primary font-semibold bg-primary/5 border-l-4 border-primary"
              : "text-foreground hover:bg-muted hover:text-primary"
          )}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default TabMenu;
