import { Cross2Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { FieldGroup, Label } from '~/registry/new-york/ui/field';
import {
  SearchField,
  SearchFieldClear,
  SearchFieldInput,
} from '~/registry/new-york/ui/searchfield';

export function SearchFieldReadonly() {
  return (
    <SearchField isReadOnly className="max-w-[200px]" defaultValue="jolly-ui">
      <Label>Search</Label>
      <FieldGroup>
        <MagnifyingGlassIcon
          aria-hidden
          className="size-4 text-muted-foreground"
        />
        <SearchFieldInput placeholder="Search..." />
        <SearchFieldClear>
          <Cross2Icon aria-hidden className="size-4" />
        </SearchFieldClear>
      </FieldGroup>
    </SearchField>
  );
}

export default SearchFieldReadonly;
