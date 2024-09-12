import { useState } from 'react';
import type { Selection } from 'react-aria-components';

import { Button } from '~/registry/new-york/ui/button';
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from '~/registry/new-york/ui/menu';

export function MenuSelectionMultiple() {
  const [selected, setSelected] = useState<Selection>(
    new Set(['sidebar', 'console']),
  );

  return (
    <MenuTrigger>
      <Button variant="outline">View</Button>
      <MenuPopover>
        <Menu
          selectedKeys={selected}
          selectionMode="multiple"
          onSelectionChange={setSelected}
        >
          <MenuItem id="sidebar">Sidebar</MenuItem>
          <MenuItem id="searchbar">Searchbar</MenuItem>
          <MenuItem id="tools">Tools</MenuItem>
          <MenuItem id="console">Console</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}

export default MenuSelectionMultiple;
