import { Text } from 'react-aria-components';

import { FieldGroup, Label } from '~/registry/default/ui/field';
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from '~/registry/default/ui/numberfield';

export function NumberFieldDescription() {
  return (
    <NumberField isRequired className="group" name="width">
      <Label>Width</Label>
      <FieldGroup>
        <NumberFieldInput />
        <NumberFieldSteppers />
      </FieldGroup>
      <Text className="text-sm text-muted-foreground" slot="description">
        Enter a width in centimeters.
      </Text>
    </NumberField>
  );
}

export default NumberFieldDescription;