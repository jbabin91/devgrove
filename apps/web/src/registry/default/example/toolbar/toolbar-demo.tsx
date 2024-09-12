'use client';

import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';
import { Group } from 'react-aria-components';

import { Button } from '~/registry/default/ui/button';
import { Checkbox } from '~/registry/default/ui/checkbox';
import { Separator } from '~/registry/default/ui/separator';
import { Toggle } from '~/registry/default/ui/toggle';
import { Toolbar } from '~/registry/default/ui/toolbar';

export function ToolbarDemo() {
  return (
    <Toolbar aria-label="Text formatting">
      <Group aria-label="Style" className="space-x-2">
        <Toggle aria-label="Bold" className="w-10" variant="outline">
          <BoldIcon className="size-4" />
        </Toggle>
        <Toggle aria-label="Italic" className="w-10" variant="outline">
          <ItalicIcon className="size-4" />
        </Toggle>
        <Toggle aria-label="Underline" className="w-10" variant="outline">
          <UnderlineIcon className="size-4" />
        </Toggle>
      </Group>
      <Separator orientation="vertical" />
      <Group aria-label="Clipboard" className={'space-x-2'}>
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
