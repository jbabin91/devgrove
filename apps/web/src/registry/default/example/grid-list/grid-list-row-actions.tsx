import { GridList, GridListItem } from '@/registry/default/ui/grid-list';

export function GridListRowActions() {
  return (
    <div className="flex flex-col gap-3">
      Selection Mode: Toggle
      <GridList
        aria-label="Favorite pokemon"
        selectionMode="multiple"
        onAction={(key) => alert(`Selecting pokemon ${key}...`)}
      >
        <GridListItem id={1}>Charizard</GridListItem>
        <GridListItem id={2}>Blastoise</GridListItem>
        <GridListItem id={3}>Venusaur</GridListItem>
        <GridListItem id={4}>Pikachu</GridListItem>
      </GridList>
      Selection Mode: Replace
      <GridList
        aria-label="Favorite pokemon"
        selectionBehavior="replace"
        selectionMode="multiple"
        onAction={(key) => alert(`Selecting pokemon ${key}...`)}
      >
        <GridListItem id={1}>Charizard</GridListItem>
        <GridListItem id={2}>Blastoise</GridListItem>
        <GridListItem id={3}>Venusaur</GridListItem>
        <GridListItem id={4}>Pikachu</GridListItem>
      </GridList>
    </div>
  );
}

export default GridListRowActions;
