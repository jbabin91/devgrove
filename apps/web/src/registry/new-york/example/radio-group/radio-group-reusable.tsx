import { GroveRadioGroup, Radio } from '@/registry/new-york/ui/radio-group';

export function RadioGroupReusable() {
  return (
    <GroveRadioGroup
      isRequired
      description="Select a favorite sport"
      label="Favorite sport"
    >
      <Radio value="soccer">Soccer</Radio>
      <Radio value="baseball">Baseball</Radio>
      <Radio value="basketball">Basketball</Radio>
    </GroveRadioGroup>
  );
}

export default RadioGroupReusable;
