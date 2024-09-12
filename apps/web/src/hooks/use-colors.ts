import { observable } from '@legendapp/state';
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage';
import { syncObservable } from '@legendapp/state/sync';

import { type ColorFormat } from '~/libs/colors';

type Config = {
  format: ColorFormat;
};

export const initialColorsState = {
  format: 'hsl',
} satisfies Config;

export const colors$ = observable<Config>(initialColorsState);

syncObservable(colors$, {
  persist: {
    name: 'colors',
    plugin: ObservablePersistLocalStorage,
  },
});
