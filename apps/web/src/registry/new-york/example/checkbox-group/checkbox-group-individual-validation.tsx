import { Form } from 'react-aria-components';

import { Button } from '~/registry/new-york/ui/button';
import { Checkbox, CheckboxGroup } from '~/registry/new-york/ui/checkbox';
import { FieldError, Label } from '~/registry/new-york/ui/field';

export function CheckboxGroupIndividualValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <CheckboxGroup className="space-y-1">
        <Label>Agree to the following</Label>
        <Checkbox isRequired value="terms">
          Terms and conditions
        </Checkbox>
        <Checkbox isRequired value="privacy">
          Privacy policy
        </Checkbox>
        <Checkbox isRequired value="cookies">
          Cookie policy
        </Checkbox>
        <FieldError />
      </CheckboxGroup>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CheckboxGroupIndividualValidation;