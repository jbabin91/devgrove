'use client';

import { Group } from 'react-aria-components';

import { Button } from '~/registry/new-york/ui/button';
import { Checkbox } from '~/registry/new-york/ui/checkbox';
import { Icons } from '~/registry/new-york/ui/icons';
import { Separator } from '~/registry/new-york/ui/separator';
import { Toggle } from '~/registry/new-york/ui/toggle';
import { Toolbar } from '~/registry/new-york/ui/toolbar';

export function ToolbarDemo() {
  return (
    <Toolbar aria-label="Text formatting">
      <Group aria-label="Style" className="space-x-2">
        <Toggle aria-label="Bold" className="w-10" variant="outline">
          <Icons.FontBold className="size-4" />
        </Toggle>
        <Toggle aria-label="Italic" className="w-10" variant="outline">
          <Icons.FontItalic className="size-4" />
        </Toggle>
        <Toggle aria-label="Underline" className="w-10" variant="outline">
          <Icons.Underline className="size-4" />
        </Toggle>
      </Group>
      <Separator orientation="vertical" />
      <Group aria-label="Clipboard" className="space-x-2">
        <Button variant="outline">Copy</Button>
        <Button variant="outline">Paste</Button>
        <Button variant="outline">Cut</Button>
      </Group>
      <Separator orientation="vertical" />
      <Checkbox>Night Mode</Checkbox>
    </Toolbar>
  );
}

export default ToolbarDemo;
