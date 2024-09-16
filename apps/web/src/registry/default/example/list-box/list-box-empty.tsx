import { ListBox } from '@/registry/default/ui/list-box';

export function ListBoxEmpty() {
  return (
    <ListBox
      aria-label="Search results"
      className="max-h-[200px]"
      renderEmptyState={() => 'No results found.'}
    >
      {[]}
    </ListBox>
  );
}

export default ListBoxEmpty;
