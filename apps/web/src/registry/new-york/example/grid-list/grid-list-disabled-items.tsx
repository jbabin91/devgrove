import { GridList, GridListItem } from '@/registry/new-york/ui/grid-list';

export function GridListDisabledItems() {
  return (
    <GridList aria-label="List with disabled rows" selectionMode="multiple">
      <GridListItem>Charizard</GridListItem>
      <GridListItem>Blastoise</GridListItem>
      <GridListItem isDisabled>Venusaur</GridListItem>
      <GridListItem>Pikachu</GridListItem>
    </GridList>
  );
}

export default GridListDisabledItems;
