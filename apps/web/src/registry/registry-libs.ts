import { type Registry } from './schema';

export const libs: Registry = [
  {
    name: 'utils',
    type: 'registry:libs',
    dependencies: ['clsx', 'tailwind-merge'],
    files: [
      {
        path: 'libs/utils.ts',
        type: 'registry:libs',
      },
    ],
  },
];
