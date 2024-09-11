'use client';

import { useSelector } from '@legendapp/state/react';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

import {
  syncBorderRadius,
  syncFontFamily,
  syncGrayColor,
  syncThemeColor,
} from '~/lib/use-theme-generator';
import { themeStore$ } from '~/lib/use-theme-store';
import { Button } from '~/registry/new-york/ui/button';
import { Icons } from '~/registry/new-york/ui/icons';
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from '~/registry/new-york/ui/menu';

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const currentAccentColor = useSelector(() => themeStore$.accentColor.get());
  const currentGrayColor = useSelector(() => themeStore$.grayColor.get());
  const currentFontFamily = useSelector(() => themeStore$.fontFamily.get());
  const currentBorderRadius = useSelector(() => themeStore$.borderRadius.get());

  useEffect(() => {
    syncGrayColor(currentGrayColor, resolvedTheme);
  }, [currentGrayColor, resolvedTheme]);

  useEffect(() => {
    syncThemeColor(currentAccentColor, resolvedTheme);
  }, [currentAccentColor, resolvedTheme]);

  useEffect(() => {
    syncFontFamily(currentFontFamily);
  }, [currentFontFamily]);

  useEffect(() => {
    syncBorderRadius(currentBorderRadius);
  }, [currentBorderRadius]);

  return (
    <MenuTrigger>
      <Button className="w-9 px-0" variant="ghost">
        <Icons.Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icons.Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <MenuPopover placement="bottom end">
        <Menu
          onAction={(key) => {
            setTheme(key as string);
          }}
        >
          <MenuItem id="light">Light</MenuItem>
          <MenuItem id="dark">Dark</MenuItem>
          <MenuItem id="system">System</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}
