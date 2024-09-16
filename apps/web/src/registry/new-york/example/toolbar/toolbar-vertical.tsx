'use client';

import { Group } from 'react-aria-components';

import { Button } from '@/registry/new-york/ui/button';
import { Icons } from '@/registry/new-york/ui/icons';
import { Separator } from '@/registry/new-york/ui/separator';
import { Toolbar } from '@/registry/new-york/ui/toolbar';

export function ToolbarVerticalDemo() {
  return (
    <Toolbar aria-label="Tools" orientation="vertical">
      <Group aria-label="Select" className="flex flex-col gap-2">
        <Button aria-label="Move" size="icon" variant="outline">
          <Icons.Move className="size-4" />
        </Button>
        <Button aria-label="Rectangle" size="icon" variant="outline">
          <Icons.CursorArrow className="size-4" />
        </Button>
        <Button aria-label="Polygon" size="icon" variant="outline">
          <Icons.MagicWand className="size-4" />
        </Button>
      </Group>
      <Separator orientation="horizontal" />
      <Group aria-label="Draw" className="flex flex-col gap-2">
        <Button aria-label="Brush" size="icon" variant="outline">
          <Icons.Pencil2 className="size-4" />
        </Button>
        <Button aria-label="Pencil" size="icon" variant="outline">
          <Icons.Pencil1 className="size-4" />
        </Button>
      </Group>
    </Toolbar>
  );
}

export default ToolbarVerticalDemo;
