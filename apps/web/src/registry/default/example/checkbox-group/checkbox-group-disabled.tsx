import { Checkbox, CheckboxGroup } from '@/registry/default/ui/checkbox';
import { Label } from '@/registry/default/ui/field';

export function CheckboxGroupDisabled() {
  return (
    <CheckboxGroup isDisabled>
      <Label>Favorite sports</Label>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
  );
}

export default CheckboxGroupDisabled;
