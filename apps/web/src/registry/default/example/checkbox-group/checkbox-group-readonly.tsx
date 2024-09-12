import { Checkbox, CheckboxGroup } from '~/registry/default/ui/checkbox';
import { Label } from '~/registry/default/ui/field';

export function CheckboxGroupReadonly() {
  return (
    <CheckboxGroup isReadOnly defaultValue={['baseball']}>
      <Label>Favorite sports</Label>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
  );
}

export default CheckboxGroupReadonly;
