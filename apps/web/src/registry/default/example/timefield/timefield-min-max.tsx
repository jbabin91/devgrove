import { Time } from '@internationalized/date';
import { Form } from 'react-aria-components';

import { Button } from '@/registry/default/ui/button';
import { DateInput, TimeField } from '@/registry/default/ui/datefield';
import { FieldError, Label } from '@/registry/default/ui/field';

export function TimeFieldMinMax() {
  return (
    <Form className="flex flex-col gap-2">
      <TimeField
        className="group"
        defaultValue={new Time(8)}
        maxValue={new Time(17)}
        minValue={new Time(9)}
        name="time"
      >
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

export default TimeFieldMinMax;
