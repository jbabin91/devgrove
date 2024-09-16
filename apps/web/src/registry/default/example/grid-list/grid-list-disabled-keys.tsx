import { GridList, GridListItem } from '@/registry/default/ui/grid-list';

export function GridListDisabledKeys() {
  const rows = [
    { id: 1, name: 'Games' },
    { id: 2, name: 'Program Files' },
    { id: 3, name: 'bootmgr' },
    { id: 4, name: 'log.txt' },
  ];

  return (
    <GridList
      aria-label="Example dynamic collection List"
      disabledKeys={[3]}
      items={rows}
      selectionMode="multiple"
    >
      {(item) => <GridListItem>{item.name}</GridListItem>}
    </GridList>
  );
}

export default GridListDisabledKeys;
