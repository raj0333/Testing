import { ExternalLink, ChevronRight } from 'lucide-react';

interface EmployeeCardProps {
  name: string;
  role: string;
  team?: string;
  lead?: string;
  objectives?: string;
  keyResults?: string;
  isHighlighted?: boolean;
  showDetails?: boolean;
}

const EmployeeCard = ({ 
  name, 
  role, 
  team, 
  lead, 
  objectives, 
  keyResults, 
  isHighlighted = false,
  showDetails = false 
}: EmployeeCardProps) => {
  return (
    <div className={cn(
      "org-card min-w-[200px]",
      isHighlighted && "border-l-4 border-l-primary"
    )}>
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div className={isHighlighted ? "org-card-header -ml-4 pl-3" : ""}>
          <h3 className="font-semibold text-foreground text-sm">{name}</h3>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
        <button className="p-1 hover:bg-muted rounded transition-colors">
          <ExternalLink className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* My Goals Link */}
      <div className="mb-3">
        <button className="link-text text-xs flex items-center gap-1">
          My Goals <ChevronRight className="w-3 h-3" /><ChevronRight className="w-3 h-3 -ml-2" />
        </button>
      </div>

      {showDetails && (
        <>
          {/* Team & Lead */}
          {(team || lead) && (
            <div className="grid grid-cols-2 gap-4 mb-3 text-xs">
              {team && (
                <div>
                  <p className="text-muted-foreground">Team</p>
                  <p className="font-medium text-foreground">{team}</p>
                </div>
              )}
              {lead && (
                <div>
                  <p className="text-muted-foreground">Lead</p>
                  <p className="font-medium text-foreground">{lead}</p>
                </div>
              )}
            </div>
          )}

          {/* Objectives */}
          {objectives && (
            <div className="mb-3 text-xs">
              <p className="text-muted-foreground mb-1">Objectives</p>
              <p className="font-medium text-foreground">{objectives}</p>
              <button className="link-text text-xs mt-1">View More</button>
            </div>
          )}

          {/* Key Results */}
          {keyResults && (
            <div className="text-xs">
              <p className="text-muted-foreground mb-1">Key Results</p>
              <p className="font-medium text-foreground">{keyResults}</p>
              <button className="link-text text-xs mt-1">View More</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

import { cn } from '@/lib/utils';

export default EmployeeCard;
