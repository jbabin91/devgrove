import { Form } from 'react-aria-components';

import { Button } from '@/registry/new-york/ui/button';
import { FieldError, FieldGroup, Label } from '@/registry/new-york/ui/field';
import { Icons } from '@/registry/new-york/ui/icons';
import {
  SearchField,
  SearchFieldClear,
  SearchFieldInput,
} from '@/registry/new-york/ui/searchfield';

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
