import { StatusBadge } from '../components/StatusBadge';
import { mockServices } from '../mock/services';

export function Services() {
  // Read-only view of game services
  // TODO: implement filtering by status
  // TODO: add proper pagination if list grows

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Game Services</h1>
      
      <p className="text-slate-400 text-sm mb-4">
        Registered game server workloads. This view is read-only.
      </p>

      <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-700/50">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-slate-300">Name</th>
              <th className="text-left px-4 py-3 font-medium text-slate-300">Status</th>
              <th className="text-left px-4 py-3 font-medium text-slate-300">Replicas</th>
              <th className="text-left px-4 py-3 font-medium text-slate-300">Health</th>
            </tr>
          </thead>
          <tbody>
            {mockServices.map((svc) => (
              <tr key={svc.id} className="border-t border-slate-700/50">
                <td className="px-4 py-3">
                  <div>
                    <span className="text-white">{svc.name}</span>
                    {svc.gameServerSet && (
                      <span className="block text-xs text-slate-500">{svc.gameServerSet}</span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={svc.status} />
                </td>
                <td className="px-4 py-3 text-slate-300">
                  {svc.replicas.current}/{svc.replicas.desired}
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={svc.health} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-slate-500 text-xs mt-4">
        Note: service creation and editing not implemented in this prototype.
      </p>
    </div>
  );
}
