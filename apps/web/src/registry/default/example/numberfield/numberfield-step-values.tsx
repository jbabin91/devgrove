import { FieldGroup, Label } from '@/registry/default/ui/field';
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from '@/registry/default/ui/numberfield';

export function NumberFieldStepValues() {
  return (
    <div className="flex flex-col gap-2">
      <NumberField step={10}>
        <Label>Step</Label>
        <FieldGroup>
          <NumberFieldInput />
          <NumberFieldSteppers />
        </FieldGroup>
      </NumberField>
      <NumberField minValue={2} step={3}>
        <Label>Step + minValue</Label>
        <FieldGroup>
          <NumberFieldInput />
          <NumberFieldSteppers />
        </FieldGroup>
      </NumberField>
      <NumberField maxValue={21} minValue={2} step={3}>
        <Label>Step + minValue + maxValue</Label>
        <FieldGroup>
          <NumberFieldInput />
          <NumberFieldSteppers />
        </FieldGroup>
      </NumberField>
    </div>
  );
}

export default NumberFieldStepValues;
