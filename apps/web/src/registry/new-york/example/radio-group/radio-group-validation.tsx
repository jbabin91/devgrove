import { Form } from 'react-aria-components';

import { Button } from '~/registry/new-york/ui/button';
import { FieldError, Label } from '~/registry/new-york/ui/field';
import { Radio, RadioGroup } from '~/registry/new-york/ui/radio-group';

export function RadioGroupValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <RadioGroup isRequired className="group" name="pet">
        <Label>Favorite pet</Label>
        <Radio value="dogs">Dog</Radio>
        <Radio value="cats">Cat</Radio>
        <Radio value="dragon">Dragon</Radio>
        <FieldError />
      </RadioGroup>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default RadioGroupValidation;
