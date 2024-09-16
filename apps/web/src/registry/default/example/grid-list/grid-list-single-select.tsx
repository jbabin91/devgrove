import { GridList, GridListItem } from '@/registry/default/ui/grid-list';

export function GridListItemSingleSelection() {
  return (
    <GridList aria-label="Favorite pokemon" selectionMode="single">
      <GridListItem>Charizard</GridListItem>
      <GridListItem>Blastoise</GridListItem>
      <GridListItem>Venusaur</GridListItem>
      <GridListItem>Pikachu</GridListItem>
    </GridList>
  );
}

export default GridListItemSingleSelection;
