import { GridList, GridListItem } from '@/registry/default/ui/grid-list';

export function GridListLinks() {
  return (
    <GridList aria-label="Links" selectionMode="multiple">
      <GridListItem href="https://adobe.com/" target="_blank">
        Adobe
      </GridListItem>
      <GridListItem href="https://apple.com/" target="_blank">
        Apple
      </GridListItem>
      <GridListItem href="https://google.com/" target="_blank">
        Google
      </GridListItem>
      <GridListItem href="https://microsoft.com/" target="_blank">
        Microsoft
      </GridListItem>
    </GridList>
  );
}

export default GridListLinks;
