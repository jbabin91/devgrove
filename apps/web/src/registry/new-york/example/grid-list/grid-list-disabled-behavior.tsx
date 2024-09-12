import { GridList, GridListItem } from '~/registry/new-york/ui/grid-list';

export function GridListDisabledBehavior() {
  return (
    <GridList
      aria-label="List with disabled rows"
      disabledBehavior="selection"
      selectionMode="multiple"
    >
      <GridListItem>Charizard</GridListItem>
      <GridListItem>Blastoise</GridListItem>
      <GridListItem isDisabled>Venusaur</GridListItem>
      <GridListItem>Pikachu</GridListItem>
    </GridList>
  );
}

export default GridListDisabledBehavior;
