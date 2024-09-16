import { GridList, GridListItem } from '@/registry/default/ui/grid-list';

export function GridListReplaceSelection() {
  return (
    <GridList
      aria-label="Favorite pokemon"
      defaultSelectedKeys={[1]}
      selectionBehavior="replace"
      selectionMode="multiple"
    >
      <GridListItem id={1}>Charizard</GridListItem>
      <GridListItem id={2}>Blastoise</GridListItem>
      <GridListItem id={3}>Venusaur</GridListItem>
      <GridListItem id={4}>Pikachu</GridListItem>
    </GridList>
  );
}

export default GridListReplaceSelection;
