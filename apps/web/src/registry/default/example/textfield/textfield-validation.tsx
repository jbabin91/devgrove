import { Form } from 'react-aria-components';

import { Button } from '~/registry/default/ui/button';
import { FieldError, Label } from '~/registry/default/ui/field';
import { Input, TextField } from '~/registry/default/ui/textfield';

export function TextFieldValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <TextField isRequired className="group" name="email" type="email">
        <Label>Email</Label>
        <Input />
        <FieldError />
      </TextField>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TextFieldValidation;
