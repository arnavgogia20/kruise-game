import type { Environment } from '../types/kruiseGame';

// Mock environment for the prototype
// In a real implementation this would come from an API
export const mockEnvironment: Environment = {
  id: 'env-001',
  name: 'Production OKG',
  provider: 'aws',
  region: 'us-east-1',
  state: 'idle',
  createdAt: '2026-02-01T10:00:00Z',
};

// Another example for showing different states
export const mockEnvironments: Environment[] = [
  mockEnvironment,
  {
    id: 'env-002',
    name: 'Staging',
    provider: 'alicloud',
    region: 'cn-hangzhou',
    state: 'ready',
    createdAt: '2026-01-15T08:30:00Z',
  },
];
