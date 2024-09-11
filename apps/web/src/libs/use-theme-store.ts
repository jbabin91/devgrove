import { observable } from '@legendapp/state';
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage';
import { syncObservable } from '@legendapp/state/sync';

import { type GrayColor, type ThemeColor } from '~/registry/themes';

import { type BorderRadius, type FontFamily } from './use-theme-generator';

export type Style = 'default' | 'new-york';

type State = {
  accentColor: ThemeColor;
  borderRadius: BorderRadius;
  fontFamily: FontFamily;
  grayColor: GrayColor;
  style: Style;
};

export const initialState: State = {
  accentColor: 'zinc',
  borderRadius: '0.5',
  fontFamily: {
    label: 'Geist',
    link: 'https://vercel.com/font',
    value: '--font-geist-sans',
  },
  grayColor: 'zinc',
  style: 'default',
};

export const themeStore$ = observable<State>(initialState);

syncObservable(themeStore$, {
  persist: {
    name: 'theme-store',
    plugin: ObservablePersistLocalStorage,
  },
});
