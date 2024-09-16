'use client';

import { useCallback, useEffect, useState } from 'react';

import { Icons } from '@/components/icons';
import { type Event, trackEvent } from '@/lib/events';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/registry/new-york/ui/button';
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from '@/registry/new-york/ui/menu';
import { type NpmCommands } from '@/types/unist';

export function copyToClipboardWithMeta(value: string, event?: Event) {
  navigator.clipboard.writeText(value);
  if (event) {
    trackEvent(event);
  }
}

type CopyButtonProps = {
  value: string;
  src?: string;
  event?: Event['name'];
} & ButtonProps;

export function CopyButton({
  className,
  value,
  event,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, []);

  return (
    <Button
      className={cn(
        'relative z-10 size-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50',
        className,
      )}
      size="icon"
      variant="ghost"
      onPress={() => {
        copyToClipboardWithMeta(
          value,
          event ? { name: event, properties: { code: value } } : undefined,
        );
        setHasCopied(true);
      }}
      {...props}
    >
      {hasCopied ? (
        <Icons.Check className="size-3" />
      ) : (
        <Icons.Copy className="size-3" />
      )}
      <span className="sr-only">Copy</span>
    </Button>
  );
}

type CopyWithClassNamesProps = {
  value: string;
  classNames: string;
  className?: string;
};

export function CopyWithClassNames({
  className,
  classNames,
  value,
}: CopyWithClassNamesProps) {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, []);

  const copyToClipboard = useCallback((value: string) => {
    copyToClipboardWithMeta(value);
    setHasCopied(true);
  }, []);

  return (
    <MenuTrigger>
      <Button
        className={cn(
          'relative z-10 size-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50',
          className,
        )}
        size="icon"
        variant="ghost"
      >
        {hasCopied ? (
          <Icons.Check className="size-3" />
        ) : (
          <Icons.Copy className="size-3" />
        )}
        <span className="sr-only">Copy</span>
      </Button>
      <MenuPopover placement="bottom end">
        <Menu
          onAction={(key) => {
            if (key === 'component') {
              copyToClipboard(value);
            }
            if (key === 'classname') {
              copyToClipboard(classNames);
            }
          }}
        >
          <MenuItem id="component">Component</MenuItem>
          <MenuItem id="classname">Classname</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}

type CopyNpmCommandButtonProps = {
  commands: Required<NpmCommands>;
  className?: string;
};

export function CopyNpmCommandButton({
  commands,
  className,
}: CopyNpmCommandButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  const commandMap: Record<string, string> = {
    bun: commands.__bunCommand__,
    npm: commands.__npmCommand__,
    pnpm: commands.__pnpmCommand__,
    yarn: commands.__yarnCommand__,
  };

  const copyCommand = useCallback(
    (value: string, pm: 'npm' | 'pnpm' | 'yarn' | 'bun') => {
      copyToClipboardWithMeta(value, {
        name: 'copy_npm_command',
        properties: {
          command: value,
          pm,
        },
      });
      setHasCopied(true);
    },
    [],
  );

  return (
    <MenuTrigger>
      <Button
        className={cn(
          'relative z-10 size-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50',
          className,
        )}
        size="icon"
        variant="ghost"
      >
        {hasCopied ? (
          <Icons.Check className="size-3" />
        ) : (
          <Icons.Copy className="size-3" />
        )}
        <span className="sr-only">Copy</span>
      </Button>
      <MenuPopover placement="bottom end">
        <Menu
          onAction={(key) => {
            copyCommand(commandMap[key as string]!, key as any);
          }}
        >
          <MenuItem id="npm">npm</MenuItem>
          <MenuItem id="yarn">yarn</MenuItem>
          <MenuItem id="pnpm">pnpm</MenuItem>
          <MenuItem id="bun">bun</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}
