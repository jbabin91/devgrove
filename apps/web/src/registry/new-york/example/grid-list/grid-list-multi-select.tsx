import { GridList, GridListItem } from '~/registry/new-york/ui/grid-list';

export function GridListItemMultiSelection() {
  return (
    <GridList
      aria-label="Favorite pokemon"
      defaultSelectedKeys={[1, 3]}
      selectionMode="multiple"
    >
      <GridListItem id={1}>Charizard</GridListItem>
      <GridListItem id={2}>Blastoise</GridListItem>
      <GridListItem id={3}>Venusaur</GridListItem>
      <GridListItem id={4}>Pikachu</GridListItem>
    </GridList>
  );
}

export default GridListItemMultiSelection;
