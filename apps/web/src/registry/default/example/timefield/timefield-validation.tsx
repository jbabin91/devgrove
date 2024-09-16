import { Form } from 'react-aria-components';

import { Button } from '@/registry/default/ui/button';
import { DateInput, TimeField } from '@/registry/default/ui/datefield';
import { FieldError, Label } from '@/registry/default/ui/field';

export function TimeFieldValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <TimeField isRequired className="group" name="time">
        <Label>Meeting time</Label>
        <DateInput className="w-fit min-w-[100px]" />
        <FieldError />
      </TimeField>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TimeFieldValidation;
