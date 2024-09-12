import { FieldGroup, Label } from '~/registry/default/ui/field';
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from '~/registry/default/ui/numberfield';

export function NumberFieldValidation() {
  return (
    <NumberField minValue={0}>
      <Label>Enter your age</Label>
      <FieldGroup>
        <NumberFieldInput />
        <NumberFieldSteppers />
      </FieldGroup>
    </NumberField>
  );
}

export default NumberFieldValidation;
