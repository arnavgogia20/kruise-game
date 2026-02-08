import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StatusBadge } from '../components/StatusBadge';
import { mockEnvironment } from '../mock/environments';
import type { CloudProvider, Environment } from '../types/kruiseGame';
import { REGIONS } from '../types/kruiseGame';

export function Overview() {
  // Using mock data - in real app this would come from API
  const [env] = useState<Environment>(mockEnvironment);
  const [selectedProvider, setSelectedProvider] = useState<CloudProvider>(env.provider);
  const [selectedRegion, setSelectedRegion] = useState(env.region);

  const handleProviderChange = (provider: CloudProvider) => {
    setSelectedProvider(provider);
    // Reset region when provider changes
    setSelectedRegion(REGIONS[provider][0].value);
  };

  // TODO: handle region persistence properly

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Environment Overview</h1>
      
      {/* Status card */}
      <div className="bg-slate-800 rounded-lg p-5 mb-6 border border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">{env.name}</h2>
          <StatusBadge status={env.state} />
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-slate-400">Provider</span>
            <p className="text-white capitalize">{selectedProvider === 'alicloud' ? 'Alibaba Cloud' : 'AWS'}</p>
          </div>
          <div>
            <span className="text-slate-400">Region</span>
            <p className="text-white">{REGIONS[selectedProvider].find(r => r.value === selectedRegion)?.label}</p>
          </div>
        </div>
      </div>

      {/* Config section */}
      <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
        <h3 className="text-sm font-medium text-slate-300 mb-4">Configuration</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1">Cloud Provider</label>
            <select 
              value={selectedProvider}
              onChange={(e) => handleProviderChange(e.target.value as CloudProvider)}
              className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-sm text-white"
            >
              <option value="aws">AWS</option>
              <option value="alicloud">Alibaba Cloud</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1">Region</label>
            <select 
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-sm text-white"
            >
              {REGIONS[selectedProvider].map(r => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6">
          {env.state === 'idle' ? (
            <Link 
              to="/deploy" 
              className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded text-sm font-medium"
            >
              Deploy KruiseGame Environment
            </Link>
          ) : (
            <button 
              disabled 
              className="bg-slate-600 text-slate-400 px-4 py-2 rounded text-sm cursor-not-allowed"
            >
              Already Deployed
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
