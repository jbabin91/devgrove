import { GroveSelect, SelectItem } from '~/registry/new-york/ui/select';

export function SelectReusable() {
  return (
    <GroveSelect
      isRequired
      className="w-[200px]"
      description="Select a flavor"
      label="Ice cream flavor"
    >
      <SelectItem>Chocolate</SelectItem>
      <SelectItem>Mint</SelectItem>
      <SelectItem>Strawberry</SelectItem>
      <SelectItem>Vanilla</SelectItem>
    </GroveSelect>
  );
}

export default SelectReusable;
