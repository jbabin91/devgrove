import { useState } from 'react';
import { type Selection } from 'react-aria-components';

import { Button } from '~/registry/default/ui/button';
import {
  Menu,
  MenuCollection,
  MenuHeader,
  MenuItem,
  MenuPopover,
  MenuSection,
  MenuTrigger,
} from '~/registry/default/ui/menu';

export function MenuSectionsDynamic() {
  const [selected, setSelected] = useState<Selection>(new Set([1, 3]));
  const openWindows = [
    {
      name: 'Left Panel',
      id: 'left',
      children: [{ id: 1, name: 'Final Copy (1)' }],
    },
    {
      name: 'Right Panel',
      id: 'right',
      children: [
        { id: 2, name: 'index.ts' },
        { id: 3, name: 'package.json' },
        { id: 4, name: 'license.txt' },
      ],
    },
  ];

  return (
    <MenuTrigger>
      <Button variant="outline">Window</Button>
      <MenuPopover>
        <Menu
          items={openWindows}
          selectedKeys={selected}
          selectionMode="multiple"
          onSelectionChange={setSelected}
        >
          {(section) => (
            <MenuSection>
              <MenuHeader separator={false}>{section.name}</MenuHeader>
              <MenuCollection items={section.children}>
                {(item) => <MenuItem>{item.name}</MenuItem>}
              </MenuCollection>
            </MenuSection>
          )}
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}

export default MenuSectionsDynamic;
