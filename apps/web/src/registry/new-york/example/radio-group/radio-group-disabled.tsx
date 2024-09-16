import { Label } from '@/registry/new-york/ui/field';
import { Radio, RadioGroup } from '@/registry/new-york/ui/radio-group';

export function RadioGroupDisabled() {
  return (
    <RadioGroup isDisabled>
      <Label>Favorite sport</Label>
      <Radio value="soccer">Soccer</Radio>
      <Radio value="baseball">Baseball</Radio>
      <Radio value="basketball">Basketball</Radio>
    </RadioGroup>
  );
}

export default RadioGroupDisabled;
