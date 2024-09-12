import { useState } from 'react';
import type { Selection } from 'react-aria-components';

import { Label } from '~/registry/default/ui/field';
import { Tag, TagGroup, TagList } from '~/registry/default/ui/tag-group';

export function TagGroupSelection() {
  const [selected, setSelected] = useState<Selection>(new Set(['parking']));

  return (
    <TagGroup
      className="space-y-1"
      selectedKeys={selected}
      selectionMode="multiple"
      onSelectionChange={setSelected}
    >
      <Label>Amenities</Label>
      <TagList>
        <Tag id="laundry">Laundry</Tag>
        <Tag id="fitness">Fitness center</Tag>
        <Tag id="parking">Parking</Tag>
        <Tag id="pool">Swimming pool</Tag>
        <Tag id="breakfast">Breakfast</Tag>
      </TagList>
    </TagGroup>
  );
}

export default TagGroupSelection;
