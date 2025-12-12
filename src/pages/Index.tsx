import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import TabMenu from '@/components/TabMenu';
import OrganizationChart from '@/components/OrganizationChart';
import GoalsSection from '@/components/GoalsSection';
import { Button } from '@/components/ui/button';
import { Plus, SlidersHorizontal, Menu } from 'lucide-react';

const Index = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('organization');

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar 
        isExpanded={sidebarExpanded} 
        onToggle={() => setSidebarExpanded(!sidebarExpanded)} 
      />

      {/* Header */}
      <Header sidebarExpanded={sidebarExpanded} />

      {/* Main Content */}
      <main 
        className="pt-16 min-h-screen transition-all duration-300"
        style={{ marginLeft: sidebarExpanded ? '224px' : '64px' }}
      >
        <div className="p-6">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Organizational Details</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="border-border">
                <Menu className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-border">
                <SlidersHorizontal className="w-4 h-4" />
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                ADD
              </Button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="flex gap-6">
            {/* Left Tab Menu */}
            <div className="w-56 flex-shrink-0">
              <TabMenu activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-card rounded-lg p-6 border border-border">
              {activeTab === 'organization' && (
                <>
                  <OrganizationChart />
                  <GoalsSection />
                </>
              )}

              {activeTab === 'goals' && (
                <div className="text-center py-12 text-muted-foreground">
                  Goals content will appear here
                </div>
              )}

              {activeTab === 'my-goals' && (
                <div className="text-center py-12 text-muted-foreground">
                  My Goals content will appear here
                </div>
              )}

              {activeTab === 'my-jobs' && (
                <div className="text-center py-12 text-muted-foreground">
                  My Jobs content will appear here
                </div>
              )}

              {activeTab === 'performance' && (
                <div className="text-center py-12 text-muted-foreground">
                  Performance Contract content will appear here
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
