interface DeploymentStepProps {
  label: string;
  status: 'pending' | 'active' | 'complete';
}

// Simple step indicator - not over-generalized
export function DeploymentStep({ label, status }: DeploymentStepProps) {
  let indicator = '○';
  let textClass = 'text-slate-500';
  
  if (status === 'active') {
    indicator = '◉';
    textClass = 'text-amber-400';
  } else if (status === 'complete') {
    indicator = '✓';
    textClass = 'text-emerald-400';
  }

  return (
    <div className={`flex items-center gap-3 py-2 ${textClass}`}>
      <span className="text-lg w-6 text-center">{indicator}</span>
      <span className="text-sm">{label}</span>
    </div>
  );
}
