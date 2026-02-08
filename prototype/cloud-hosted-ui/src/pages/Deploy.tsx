import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeploymentStep } from '../components/DeploymentStep';
import type { DeploymentState } from '../types/kruiseGame';

const STEPS: { state: DeploymentState; label: string }[] = [
  { state: 'planning', label: 'Planning infrastructure' },
  { state: 'provisioning', label: 'Provisioning cloud resources' },
  { state: 'installing', label: 'Installing OpenKruiseGame' },
  { state: 'ready', label: 'Environment ready' },
];

export function Deploy() {
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState<DeploymentState>('idle');
  const [stepIndex, setStepIndex] = useState(-1);

  // TODO: Surface partial failure states (e.g., cluster provisioned but OKG install failed)

  const handleStartDeploy = () => {
    setCurrentState('planning');
    setStepIndex(0);
  };

  const handleNextStep = () => {
    if (stepIndex < STEPS.length - 1) {
      const nextIndex = stepIndex + 1;
      setStepIndex(nextIndex);
      setCurrentState(STEPS[nextIndex].state);
    }
  };

  const getStepStatus = (index: number): 'pending' | 'active' | 'complete' => {
    if (index < stepIndex) return 'complete';
    if (index === stepIndex) return 'active';
    return 'pending';
  };

  const isComplete = currentState === 'ready';

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Deploy Environment</h1>
      
      <div className="bg-slate-800 rounded-lg p-5 border border-slate-700 max-w-lg">
        {currentState === 'idle' ? (
          <>
            <p className="text-slate-300 text-sm mb-4">
              This will provision a new KruiseGame environment. The process is simulated for this prototype.
            </p>
            <button
              onClick={handleStartDeploy}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded text-sm font-medium"
            >
              Start Deployment
            </button>
          </>
        ) : (
          <>
            <div className="mb-4">
              {STEPS.map((step, i) => (
                <DeploymentStep 
                  key={step.state} 
                  label={step.label} 
                  status={getStepStatus(i)} 
                />
              ))}
            </div>

            {!isComplete && (
              <button
                onClick={handleNextStep}
                className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded text-sm font-medium"
              >
                Next Step
              </button>
            )}

            {isComplete && (
              <div className="space-y-3">
                <p className="text-emerald-400 text-sm">Deployment complete!</p>
                <button
                  onClick={() => navigate('/services')}
                  className="bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded text-sm font-medium"
                >
                  View Services
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
