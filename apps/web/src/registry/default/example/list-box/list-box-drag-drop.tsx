import { useDragAndDrop } from 'react-aria-components';
import { useListData } from 'react-stately';

import { ListBox, ListBoxItem } from '@/registry/default/ui/list-box';

export function ListBoxDragAndDrop() {
  const list = useListData({
    initialItems: [
      { id: 1, name: 'Adobe Photoshop' },
      { id: 2, name: 'Adobe XD' },
      { id: 3, name: 'Adobe Dreamweaver' },
      { id: 4, name: 'Adobe InDesign' },
      { id: 5, name: 'Adobe Connect' },
    ],
  });

  const { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) =>
      [...keys].map((key) => ({ 'text/plain': list.getItem(key).name })),
    onReorder(e) {
      if (e.target.dropPosition === 'before') {
        list.moveBefore(e.target.key, e.keys);
      } else if (e.target.dropPosition === 'after') {
        list.moveAfter(e.target.key, e.keys);
      }
    },
  });

  return (
    <ListBox
      aria-label="Reorderable list"
      className="max-h-[200px]"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
      selectionMode="multiple"
    >
      {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
    </ListBox>
  );
}

export default ListBoxDragAndDrop;
