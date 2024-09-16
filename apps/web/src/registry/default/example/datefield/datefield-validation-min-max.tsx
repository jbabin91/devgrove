import { getLocalTimeZone, today } from '@internationalized/date';
import { Form } from 'react-aria-components';

import { Button } from '@/registry/default/ui/button';
import { DateField, DateInput } from '@/registry/default/ui/datefield';
import { FieldError, Label } from '@/registry/default/ui/field';

export function DateFieldValidationMinMax() {
  return (
    <Form className="flex flex-col gap-2">
      <DateField
        isRequired
        className="flex min-w-[150px] flex-col gap-2"
        minValue={today(getLocalTimeZone())}
      >
        <Label>Appointment date</Label>
        <DateInput className="w-[180px]" />
        <FieldError />
      </DateField>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default DateFieldValidationMinMax;
