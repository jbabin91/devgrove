import { FieldGroup, Label } from '@/registry/new-york/ui/field';
import { Icons } from '@/registry/new-york/ui/icons';
import {
  SearchField,
  SearchFieldClear,
  SearchFieldInput,
} from '@/registry/new-york/ui/searchfield';

export function SearchFieldDisabled() {
  return (
    <SearchField isDisabled className="max-w-[200px]">
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

export default SearchFieldDisabled;
