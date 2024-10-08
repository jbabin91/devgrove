import { Label } from '@/registry/new-york/ui/field';
import { TextArea, TextField } from '@/registry/new-york/ui/textfield';

export function TextFieldMultiline() {
  return (
    <TextField>
      <Label>Comment</Label>
      <TextArea />
    </TextField>
  );
}

export default TextFieldMultiline;
