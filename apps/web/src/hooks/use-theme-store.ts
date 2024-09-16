import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { type GrayColor, type ThemeColor } from '@/registry/themes';

import type { BorderRadius, FontFamily } from './use-theme-generator';

type State = {
  accentColor: ThemeColor;
  borderRadius: BorderRadius;
  fontFamily: FontFamily;
  grayColor: GrayColor;
  style: 'default' | 'new-york';
};

type Actions = {
  setAccentColor: (color: ThemeColor) => void;
  setGrayColor: (color: GrayColor) => void;
  setFontFamily: (font: FontFamily) => void;
  setBorderRadius: (radius: BorderRadius) => void;
  setStyle: (style: 'default' | 'new-york') => void;
  reset: () => void;
};

const initialState: State = {
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

export const useThemeStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        reset: () => {
          set(initialState);
        },
        setAccentColor: (accentColor) => set(() => ({ accentColor })),
        setBorderRadius: (borderRadius) => set(() => ({ borderRadius })),
        setFontFamily: (fontFamily) => set(() => ({ fontFamily })),
        setGrayColor: (grayColor) => set(() => ({ grayColor })),
        setStyle: (style) => set(() => ({ style })),
      }),
      {
        name: 'dev-grove-ui-theme-store',
        version: 2,
      },
    ),
  ),
);
