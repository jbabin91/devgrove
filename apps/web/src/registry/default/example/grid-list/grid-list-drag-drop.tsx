import { useDragAndDrop } from 'react-aria-components';
import { useListData } from 'react-stately';

import { GridList, GridListItem } from '~/registry/default/ui/grid-list';

export function GridListDragAndDrop() {
  //useListData is a convenience hook, not a requirement. You can manage your state however you wish.
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
    <GridList
      aria-label="Reorderable list"
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
      selectionMode="multiple"
    >
      {(item) => <GridListItem>{item.name}</GridListItem>}
    </GridList>
  );
}

export default GridListDragAndDrop;
