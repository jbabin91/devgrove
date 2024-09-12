import { observable } from '@legendapp/state';
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage';
import { syncObservable } from '@legendapp/state/sync';

import { type Theme, THEMES } from '~/libs/themes';

type ThemesConfig = {
  activeTheme: Theme;
};

export const initialThemesState: ThemesConfig = {
  activeTheme: THEMES[0]!,
};

export const themes$ = observable<ThemesConfig>(initialThemesState);

syncObservable(themes$, {
  persist: {
    name: 'themes:config',
    plugin: ObservablePersistLocalStorage,
  },
});
