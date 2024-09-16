import { GroveNumberField } from '@/registry/new-york/ui/numberfield';

export function NumberfieldReusable() {
  return (
    <GroveNumberField
      isRequired
      description="Please enter a number"
      label="Cookies"
    />
  );
}

export default NumberfieldReusable;
