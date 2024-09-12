import { Checkbox, GroveCheckboxGroup } from '~/registry/new-york/ui/checkbox';

export function CheckboxReusable() {
  return (
    <GroveCheckboxGroup
      isRequired
      description="Select a favorite sport"
      label="Favorite sports"
    >
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </GroveCheckboxGroup>
  );
}

export default CheckboxReusable;
