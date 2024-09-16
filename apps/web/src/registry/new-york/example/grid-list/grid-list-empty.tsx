import { GridList } from '@/registry/new-york/ui/grid-list';

export function GridListEmptyState() {
  return (
    <GridList
      aria-label="Search results"
      renderEmptyState={() => 'No results found.'}
    >
      {[]}
    </GridList>
  );
}

export default GridListEmptyState;
