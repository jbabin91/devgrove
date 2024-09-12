import { ComboboxItem, GroveComboBox } from '~/registry/default/ui/combobox';

export function CheckboxReusable() {
  return (
    <GroveComboBox
      isRequired
      description="Select a flavor"
      label="Ice cream flavor"
    >
      <ComboboxItem>Chocolate</ComboboxItem>
      <ComboboxItem>Mint</ComboboxItem>
      <ComboboxItem>Strawberry</ComboboxItem>
      <ComboboxItem>Vanilla</ComboboxItem>
    </GroveComboBox>
  );
}

export default CheckboxReusable;
