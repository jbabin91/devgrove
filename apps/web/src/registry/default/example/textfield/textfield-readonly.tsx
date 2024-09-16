import { Label } from '@/registry/default/ui/field';
import { Input, TextField } from '@/registry/default/ui/textfield';

export function TextFieldReadonly() {
  return (
    <TextField isReadOnly defaultValue="abc@adobe.com">
      <Label>Email</Label>
      <Input />
    </TextField>
  );
}

export default TextFieldReadonly;
