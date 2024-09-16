import { useState } from 'react';
import type { Selection } from 'react-aria-components';

import {
  ListBox,
  ListBoxCollection,
  ListBoxHeader,
  ListBoxItem,
  ListBoxSection,
} from '@/registry/default/ui/list-box';

export function ListBoxDynamic() {
  const options = [
    {
      name: 'Australian',
      children: [
        { id: 2, name: 'Koala' },
        { id: 3, name: 'Kangaroo' },
        { id: 4, name: 'Platypus' },
      ],
    },
    {
      name: 'American',
      children: [
        { id: 6, name: 'Bald Eagle' },
        { id: 7, name: 'Bison' },
        { id: 8, name: 'Skunk' },
      ],
    },
  ];
  const [selected, setSelected] = useState<Selection>(new Set());

  return (
    <ListBox
      aria-label="Pick an animal"
      className="max-h-[200px]"
      items={options}
      selectedKeys={selected}
      selectionMode="single"
      onSelectionChange={setSelected}
    >
      {(section) => (
        <ListBoxSection id={section.name}>
          <ListBoxHeader>{section.name}</ListBoxHeader>
          <ListBoxCollection items={section.children}>
            {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
          </ListBoxCollection>
        </ListBoxSection>
      )}
    </ListBox>
  );
}

export default ListBoxDynamic;
