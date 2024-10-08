import { FieldGroup, Label } from '@/registry/default/ui/field';
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from '@/registry/default/ui/numberfield';

export function NumberFieldReadonly() {
  return (
    <NumberField isReadOnly value={32}>
      <Label>Read only</Label>
      <FieldGroup>
        <NumberFieldInput />
        <NumberFieldSteppers />
      </FieldGroup>
    </NumberField>
  );
}

export default NumberFieldReadonly;
