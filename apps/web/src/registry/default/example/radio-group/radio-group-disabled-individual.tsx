import { Label } from '~/registry/default/ui/field';
import { Radio, RadioGroup } from '~/registry/default/ui/radio-group';

export function RadioGroupDisabledIndividual() {
  return (
    <RadioGroup>
      <Label>Favorite sport</Label>
      <Radio value="soccer">Soccer</Radio>
      <Radio isDisabled value="baseball">
        Baseball
      </Radio>
      <Radio value="basketball">Basketball</Radio>
    </RadioGroup>
  );
}

export default RadioGroupDisabledIndividual;