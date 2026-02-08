import type { GameService } from '../types/kruiseGame';

// Mock game services - static data for read-only view
export const mockServices: GameService[] = [
  {
    id: 'gs-001',
    name: 'game-server-battle',
    status: 'Running',
    replicas: { current: 5, desired: 5 },
    health: 'Healthy',
    gameServerSet: 'battle-servers',
  },
  {
    id: 'gs-002',
    name: 'game-server-lobby',
    status: 'Scaling',
    replicas: { current: 3, desired: 5 },
    health: 'Healthy',
    gameServerSet: 'lobby-servers',
  },
  {
    id: 'gs-003',
    name: 'game-server-match',
    status: 'Warning',
    replicas: { current: 2, desired: 2 },
    health: 'Degraded',
    gameServerSet: 'match-servers',
  },
  {
    id: 'gs-004',
    name: 'game-server-chat',
    status: 'Running',
    replicas: { current: 4, desired: 4 },
    health: 'Healthy',
    gameServerSet: 'chat-servers',
  },
  {
    id: 'gs-005',
    name: 'game-server-analytics',
    status: 'Stopped',
    replicas: { current: 0, desired: 0 },
    health: 'Unknown',
  },
];
