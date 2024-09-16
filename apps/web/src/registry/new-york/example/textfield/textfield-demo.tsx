import { Label } from '@/registry/new-york/ui/field';
import { Input, TextField } from '@/registry/new-york/ui/textfield';

export function TextFieldDemo() {
  return (
    <TextField>
      <Label>First name</Label>
      <Input />
    </TextField>
  );
}

export default TextFieldDemo;
