import { Form } from 'react-aria-components';

import { FieldError, Label } from '~/registry/new-york/ui/field';
import { Input, TextField } from '~/registry/new-york/ui/textfield';

export function FormValidation() {
  return (
    <Form validationErrors={{ username: 'Sorry, this username is taken.' }}>
      <TextField name="username">
        <Label>Username</Label>
        <Input />
        <FieldError />
      </TextField>
    </Form>
  );
}

export default FormValidation;