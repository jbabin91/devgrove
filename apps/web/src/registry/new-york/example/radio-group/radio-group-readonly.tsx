import { Label } from '~/registry/new-york/ui/field';
import { Radio, RadioGroup } from '~/registry/new-york/ui/radio-group';

export function RadioGroupReadonly() {
  return (
    <RadioGroup isReadOnly defaultValue="wizard">
      <Label>Favorite avatar</Label>

      <Radio value="wizard">Wizard</Radio>
      <Radio value="dragon">Dragon</Radio>
    </RadioGroup>
  );
}

export default RadioGroupReadonly;