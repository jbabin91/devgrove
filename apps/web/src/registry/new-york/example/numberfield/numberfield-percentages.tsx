import { FieldGroup, Label } from '@/registry/new-york/ui/field';
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from '@/registry/new-york/ui/numberfield';

export function NumberFieldPercentages() {
  return (
    <NumberField
      defaultValue={0.05}
      formatOptions={{
        style: 'percent',
      }}
    >
      <Label>Sales tax</Label>
      <FieldGroup>
        <NumberFieldInput />
        <NumberFieldSteppers />
      </FieldGroup>
    </NumberField>
  );
}

export default NumberFieldPercentages;
