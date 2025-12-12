import EmployeeCard from './EmployeeCard';

const executives = [
  { name: 'Arun Sharma', role: 'CEO', isMain: true },
  { name: 'Karan Kulkarni', role: 'CTO', isMain: false },
  { name: 'Aman Joshi', role: 'CFO', isMain: false },
  { name: 'Vikram Kumar', role: 'MD', isMain: false },
  { name: 'Ajay Sinha', role: 'CHO', isMain: false },
];

const managers = [
  { 
    name: 'Anand Guha', 
    role: 'General Manager',
    team: 'Management',
    lead: 'Arun Sharma',
    objectives: 'Make $500 for company',
    keyResults: 'Win the super-bowl'
  },
  { 
    name: 'Saurabh Mondal', 
    role: 'General Manager',
    team: 'Management',
    lead: 'Arun Sharma',
    objectives: 'Make $500 for company',
    keyResults: 'Win the super-bowl'
  },
];

const OrganizationChart = () => {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="section-header rounded-r-lg">
        Organization Structure
      </div>

      {/* Executive Level */}
      <div className="flex gap-4 flex-wrap">
        {/* CEO Card - Main with details */}
        <div className="flex flex-col">
          <EmployeeCard
            name="Arun Sharma"
            role="CEO"
            team="Management"
            lead="-"
            objectives="Make $500 for company"
            keyResults="Win the super-bowl"
            isHighlighted={true}
            showDetails={true}
          />
        </div>

        {/* Other Executives */}
        {executives.slice(1).map((exec, index) => (
          <EmployeeCard
            key={index}
            name={exec.name}
            role={exec.role}
            isHighlighted={false}
            showDetails={false}
          />
        ))}
      </div>

      {/* Hierarchy Lines and Managers */}
      <div className="relative pt-8">
        {/* Connector Circle */}
        <div className="absolute left-[120px] -top-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold z-10">
          A
        </div>

        {/* Vertical Line from CEO */}
        <div className="absolute left-[136px] -top-2 h-10 w-px bg-border"></div>

        {/* Horizontal connecting line */}
        <div className="absolute left-[136px] top-8 w-[200px] h-px bg-border"></div>

        {/* Vertical lines to managers */}
        <div className="absolute left-[136px] top-8 h-4 w-px bg-border"></div>
        <div className="absolute left-[336px] top-8 h-4 w-px bg-border"></div>

        {/* Manager Cards */}
        <div className="flex gap-8 pt-8">
          {managers.map((manager, index) => (
            <EmployeeCard
              key={index}
              name={manager.name}
              role={manager.role}
              team={manager.team}
              lead={manager.lead}
              objectives={manager.objectives}
              keyResults={manager.keyResults}
              isHighlighted={false}
              showDetails={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizationChart;
