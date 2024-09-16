import { FieldGroup, Label } from '@/registry/default/ui/field';
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from '@/registry/default/ui/numberfield';

export function NumberFieldUnits() {
  return (
    <NumberField
      defaultValue={4}
      formatOptions={{
        style: 'unit',
        unit: 'inch',
        unitDisplay: 'long',
      }}
    >
      <Label>Package width</Label>
      <FieldGroup>
        <NumberFieldInput />
        <NumberFieldSteppers />
      </FieldGroup>
    </NumberField>
  );
}

export default NumberFieldUnits;
