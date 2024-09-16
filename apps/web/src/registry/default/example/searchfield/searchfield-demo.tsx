import { FieldGroup, Label } from '@/registry/default/ui/field';
import { Icons } from '@/registry/default/ui/icons';
import {
  SearchField,
  SearchFieldClear,
  SearchFieldInput,
} from '@/registry/default/ui/searchfield';

export function SearchFieldDemo() {
  return (
    <SearchField className="max-w-[200px]">
      <Label>Search</Label>
      <FieldGroup>
        <Icons.Search
          aria-hidden="true"
          className="size-4 text-muted-foreground"
        />
        <SearchFieldInput placeholder="Search..." />
        <SearchFieldClear>
          <Icons.Close aria-hidden="true" className="size-4" />
        </SearchFieldClear>
      </FieldGroup>
    </SearchField>
  );
}

export default SearchFieldDemo;
