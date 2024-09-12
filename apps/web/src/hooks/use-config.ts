import { observable } from '@legendapp/state';
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage';
import { syncObservable } from '@legendapp/state/sync';

import { type BaseColor } from '~/registry/registry-base-colors';
import { type Style } from '~/registry/registry-styles';

type Config = {
  style: Style['name'];
  theme: BaseColor['name'];
  radius: number;
};

export const initialConfigState = {
  radius: 0.5,
  style: 'default',
  theme: 'zinc',
} satisfies Config;

export const config$ = observable<Config>(initialConfigState);

syncObservable(config$, {
  persist: {
    name: 'config',
    plugin: ObservablePersistLocalStorage,
  },
});
