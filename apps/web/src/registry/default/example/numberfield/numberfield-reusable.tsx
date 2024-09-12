import { GroveNumberField } from '~/registry/default/ui/numberfield';

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
