import { Text } from 'react-aria-components';

import { FieldGroup, Label } from '@/registry/default/ui/field';
import { Icons } from '@/registry/default/ui/icons';
import {
  SearchField,
  SearchFieldClear,
  SearchFieldInput,
} from '@/registry/default/ui/searchfield';

export function SearchFieldDescription() {
  return (
    <SearchField isRequired className="group flex min-w-[200px] flex-col gap-2">
      <Label>Search</Label>
      <FieldGroup className="w-fit min-w-[200px]">
        <Icons.Search
          aria-hidden="true"
          className="size-4 text-muted-foreground"
        />
        <SearchFieldInput placeholder="Search..." />
        <SearchFieldClear>
          <Icons.Close aria-hidden="true" className="size-4" />
        </SearchFieldClear>
      </FieldGroup>
      <Text className="text-sm text-muted-foreground" slot="description">
        Enter an email for us to contact you about your order.
      </Text>
    </SearchField>
  );
}

export default SearchFieldDescription;
