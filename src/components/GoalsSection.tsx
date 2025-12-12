const GoalsSection = () => {
  return (
    <div className="mt-8">
      <div className="section-header rounded-r-lg">
        Goals
      </div>
      <div className="bg-card rounded-lg p-6 mt-4 min-h-[100px] border border-border">
        <p className="text-muted-foreground text-sm">No goals defined yet. Click "Add" to create your first goal.</p>
      </div>
    </div>
  );
};

export default GoalsSection;
