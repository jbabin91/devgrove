import { Form } from 'react-aria-components';

import { Button } from '@/registry/default/ui/button';
import { FieldError, FieldGroup, Label } from '@/registry/default/ui/field';
import { Icons } from '@/registry/default/ui/icons';
import {
  SearchField,
  SearchFieldClear,
  SearchFieldInput,
} from '@/registry/default/ui/searchfield';

export function SearchFieldValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <SearchField isRequired className="group max-w-[200px]">
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
        <FieldError />
      </SearchField>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SearchFieldValidation;
