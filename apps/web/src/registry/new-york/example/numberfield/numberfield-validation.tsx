import { FieldGroup, Label } from '~/registry/new-york/ui/field';
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from '~/registry/new-york/ui/numberfield';

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
