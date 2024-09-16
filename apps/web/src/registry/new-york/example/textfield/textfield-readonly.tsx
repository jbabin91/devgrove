import { Label } from '@/registry/new-york/ui/field';
import { Input, TextField } from '@/registry/new-york/ui/textfield';

export function TextFieldReadonly() {
  return (
    <TextField isReadOnly defaultValue="abc@adobe.com">
      <Label>Email</Label>
      <Input />
    </TextField>
  );
}

export default TextFieldReadonly;
