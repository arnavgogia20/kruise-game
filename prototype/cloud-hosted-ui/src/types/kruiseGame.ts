export type DeploymentState = 'idle' | 'planning' | 'provisioning' | 'installing' | 'ready' | 'error';

export type CloudProvider = 'aws' | 'alicloud';

export interface Environment {
  id: string;
  name: string;
  provider: CloudProvider;
  region: string;
  state: DeploymentState;
  createdAt?: string;
}

export interface GameService {
  id: string;
  name: string;
  status: 'Running' | 'Scaling' | 'Warning' | 'Stopped';
  replicas: { current: number; desired: number };
  health: 'Healthy' | 'Degraded' | 'Unknown';
  gameServerSet?: string;
}

// Region options per provider
export const REGIONS: Record<CloudProvider, { value: string; label: string }[]> = {
  aws: [
    { value: 'us-east-1', label: 'US East (N. Virginia)' },
    { value: 'us-west-2', label: 'US West (Oregon)' },
    { value: 'eu-west-1', label: 'EU (Ireland)' },
    { value: 'ap-southeast-1', label: 'Asia Pacific (Singapore)' },
  ],
  alicloud: [
    { value: 'cn-hangzhou', label: 'China (Hangzhou)' },
    { value: 'cn-shanghai', label: 'China (Shanghai)' },
    { value: 'cn-beijing', label: 'China (Beijing)' },
    { value: 'ap-southeast-1', label: 'Singapore' },
  ],
};
