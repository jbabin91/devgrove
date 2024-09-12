import { Checkbox, CheckboxGroup } from '~/registry/new-york/ui/checkbox';
import { Label } from '~/registry/new-york/ui/field';

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
