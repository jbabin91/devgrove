import { useState } from 'react';
import type { Selection } from 'react-aria-components';

import { Button } from '@/registry/default/ui/button';
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from '@/registry/default/ui/menu';

export function MenuSelectionSingle() {
  const [selected, setSelected] = useState<Selection>(new Set(['center']));

  return (
    <MenuTrigger>
      <Button variant="outline">Align</Button>
      <MenuPopover>
        <Menu
          selectedKeys={selected}
          selectionMode="single"
          onSelectionChange={setSelected}
        >
          <MenuItem id="left">Left</MenuItem>
          <MenuItem id="center">Center</MenuItem>
          <MenuItem id="right">Right</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}

export default MenuSelectionSingle;
