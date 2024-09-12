'use client';

import {
  CursorArrowIcon,
  MagicWandIcon,
  MoveIcon,
  Pencil1Icon,
  Pencil2Icon,
} from '@radix-ui/react-icons';
import { Group } from 'react-aria-components';

import { Button } from '~/registry/new-york/ui/button';
import { Separator } from '~/registry/new-york/ui/separator';
import { Toolbar } from '~/registry/new-york/ui/toolbar';

export function ToolbarVerticalDemo() {
  return (
    <Toolbar aria-label="Tools" orientation="vertical">
      <Group aria-label="Select" className="flex flex-col gap-2">
        <Button aria-label="Move" size="icon" variant="outline">
          <MoveIcon className="size-4" />
        </Button>
        <Button aria-label="Rectangle" size="icon" variant="outline">
          <CursorArrowIcon className="size-4" />
        </Button>
        <Button aria-label="Polygon" size="icon" variant="outline">
          <MagicWandIcon className="size-4" />
        </Button>
      </Group>
      <Separator orientation="horizontal" />
      <Group aria-label="Draw" className={'flex flex-col gap-2'}>
        <Button aria-label="Brush" size="icon" variant="outline">
          <Pencil2Icon className="size-4" />
        </Button>
        <Button aria-label="Pencil" size="icon" variant="outline">
          <Pencil1Icon className="size-4" />
        </Button>
      </Group>
    </Toolbar>
  );
}

export default ToolbarVerticalDemo;
