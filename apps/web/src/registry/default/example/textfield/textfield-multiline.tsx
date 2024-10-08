import { Label } from '@/registry/default/ui/field';
import { TextArea, TextField } from '@/registry/default/ui/textfield';

export function TextFieldMultiline() {
  return (
    <TextField>
      <Label>Comment</Label>
      <TextArea />
    </TextField>
  );
}

export default TextFieldMultiline;
