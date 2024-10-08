import { FieldGroup, Label } from '@/registry/new-york/ui/field';
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from '@/registry/new-york/ui/numberfield';

export function NumberFieldDisabled() {
  return (
    <NumberField isDisabled value={25}>
      <Label>Disabled</Label>
      <FieldGroup>
        <NumberFieldInput />
        <NumberFieldSteppers />
      </FieldGroup>
    </NumberField>
  );
}

export default NumberFieldDisabled;
