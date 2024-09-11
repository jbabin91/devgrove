import { useObservable, useSelector } from '@legendapp/state/react';

import {
  type GrayColor,
  grayColors,
  type ThemeColor,
  themes,
} from '~/registry/themes';

import { initialState, type Style, themeStore$ } from './use-theme-store';

const borderRadius = ['0', '0.3', '0.5', '0.75', '1'] as const;

export type BorderRadius = (typeof borderRadius)[number];

export const useThemeGenerator = () => {
  const currentAccentColor = useSelector(() => themeStore$.accentColor.get());
  const currentGrayColor = useSelector(() => themeStore$.grayColor.get());
  const currentFontFamily = useSelector(() => themeStore$.fontFamily.get());
  const currentBorderRadius = useSelector(() => themeStore$.borderRadius.get());
  const currentStyle = useSelector(() => themeStore$.style.get());

  const updateAccentColor = useObservable((value: ThemeColor) =>
    themeStore$.accentColor.set(value),
  );
  const updateGrayColor = useObservable((value: GrayColor) =>
    themeStore$.grayColor.set(value),
  );
  const updateFontFamily = useObservable((value: FontFamily) =>
    themeStore$.fontFamily.set(value),
  );
  const updateBorderRadius = useObservable((value: BorderRadius) =>
    themeStore$.borderRadius.set(value),
  );
  const updateStyle = useObservable((value: Style) =>
    themeStore$.style.set(value),
  );

  const reset = useObservable(() => themeStore$.set(initialState));

  return {
    borderRadius,
    currentAccentColor,
    currentBorderRadius,
    currentFontFamily,
    currentGrayColor,
    currentStyle,
    fontFamilies,
    grayColors,
    reset,
    themes,
    updateAccentColor,
    updateBorderRadius,
    updateFontFamily,
    updateGrayColor,
    updateStyle,
  };
};

export type ThemeConfig = {
  code: string;
  config: string;
};

export const syncGrayColor = (
  color: GrayColor,
  resolvedTheme: string | undefined,
) => {
  const root = document.querySelector<HTMLHtmlElement>(':root');
  if (!root) return;

  const grayColor = grayColors.find((c) => c.name === color);

  const vars = (
    resolvedTheme === 'light'
      ? { ...grayColor?.cssVars.light }
      : { ...grayColor?.cssVars.dark }
  ) as Record<string, string>;

  if (Object.keys(vars))
    for (const variable of Object.keys(vars)) {
      root.style.setProperty(`--${variable}`, `${vars[variable]}`);
    }

  root.style.setProperty(
    '--background',
    resolvedTheme === 'light'
      ? `${grayColor?.cssVars.light.background}`
      : `${grayColor?.cssVars.dark.background}`,
  );
};

export const syncThemeColor = (
  color: ThemeColor,
  resolvedTheme: string | undefined,
) => {
  const root = document.querySelector<HTMLHtmlElement>(':root');
  if (!root) return;

  const grayColor = themes.find((c) => c.name === color);

  const vars = (
    resolvedTheme === 'light'
      ? { ...grayColor?.cssVars.light }
      : { ...grayColor?.cssVars.dark }
  ) as Record<string, string>;

  if (Object.keys(vars))
    for (const variable of Object.keys(vars)) {
      root.style.setProperty(`--${variable}`, `${vars[variable]}`);
    }
};

export const syncBorderRadius = (borderRadius: BorderRadius) => {
  const root = document.querySelector<HTMLHtmlElement>(':root');
  if (!root) return;
  root.style.setProperty('--radius', `${borderRadius}rem`);
};

export const syncFontFamily = (fontFamily: FontFamily) => {
  const root = document.querySelector<HTMLHtmlElement>(':root');
  if (root) {
    root.style.setProperty('--font-sans', `var(${fontFamily.value})`);
  }
};

export type FontFamily = (typeof fontFamilies)[number];
export const fontFamilies = [
  {
    label: 'Jakarta',
    link: 'https://fonts.google.com/specimen/Plus+Jakarta+Sans',
    value: '--font-jakarta',
  },
  {
    label: 'Inter',
    link: 'https://fonts.google.com/specimen/Inter',
    value: '--font-inter',
  },
  {
    label: 'Outfit',
    link: 'https://fonts.google.com/specimen/Outfit',
    value: '--font-outfit',
  },
  {
    label: 'Raleway',
    link: 'https://fonts.google.com/specimen/Raleway',
    value: '--font-raleway',
  },
  {
    label: 'Geist',
    link: 'https://vercel.com/font',
    value: '--font-geist-sans',
  },
] as const;
