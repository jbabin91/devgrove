import { Label } from '~/registry/default/ui/field';
import { Input, TextField } from '~/registry/default/ui/textfield';

export function TextFieldDisabled() {
  return (
    <TextField isDisabled>
      <Label>Email</Label>
      <Input />
    </TextField>
  );
}

export default TextFieldDisabled;