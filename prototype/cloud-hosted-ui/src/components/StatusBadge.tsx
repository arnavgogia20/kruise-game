import type { DeploymentState, GameService } from '../types/kruiseGame';

type BadgeType = DeploymentState | GameService['status'] | GameService['health'];

interface StatusBadgeProps {
  status: BadgeType;
}

// Intentionally inline - keeping it simple for now
export function StatusBadge({ status }: StatusBadgeProps) {
  let colorClasses = 'bg-slate-600 text-slate-200';
  
  switch (status) {
    case 'ready':
    case 'Running':
    case 'Healthy':
      colorClasses = 'bg-emerald-600/20 text-emerald-400 border border-emerald-600/30';
      break;
    case 'planning':
    case 'provisioning':
    case 'installing':
    case 'Scaling':
      colorClasses = 'bg-amber-600/20 text-amber-400 border border-amber-600/30';
      break;
    case 'error':
    case 'Warning':
    case 'Degraded':
      colorClasses = 'bg-red-600/20 text-red-400 border border-red-600/30';
      break;
    case 'idle':
    case 'Stopped':
    case 'Unknown':
      colorClasses = 'bg-slate-600/20 text-slate-400 border border-slate-600/30';
      break;
  }

  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${colorClasses}`}>
      {status}
    </span>
  );
}
