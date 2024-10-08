import { Checkbox, CheckboxGroup } from '@/registry/new-york/ui/checkbox';
import { Label } from '@/registry/new-york/ui/field';

export function CheckboxGroupDisabledIndividual() {
  return (
    <CheckboxGroup>
      <Label>Favorite sports</Label>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox isDisabled value="baseball">
        Baseball
      </Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
  );
}

export default CheckboxGroupDisabledIndividual;
