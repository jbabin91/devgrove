import { blocks } from '~/registry/registry-blocks';
import { examples } from '~/registry/registry-examples';
import { hooks } from '~/registry/registry-hooks';
import { libs } from '~/registry/registry-libs';
import { themes } from '~/registry/registry-themes';
import { ui } from '~/registry/registry-ui';
import { type Registry } from '~/registry/schema';

export const registry: Registry = [
  ...ui,
  ...examples,
  ...blocks,
  ...libs,
  ...hooks,
  ...themes,
];
