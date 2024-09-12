import { Form } from 'react-aria-components';

import { Button } from '~/registry/new-york/ui/button';
import { FieldError, FieldGroup, Label } from '~/registry/new-york/ui/field';
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from '~/registry/new-york/ui/numberfield';

export function NumberFieldValidationError() {
  return (
    <Form className="flex flex-col gap-2">
      <NumberField isRequired className="group" name="width">
        <Label>Width</Label>
        <FieldGroup>
          <NumberFieldInput />
          <NumberFieldSteppers />
        </FieldGroup>
        <FieldError />
      </NumberField>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NumberFieldValidationError;
