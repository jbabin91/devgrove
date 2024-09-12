import { Time } from '@internationalized/date';
import { Form } from 'react-aria-components';

import { Button } from '~/registry/default/ui/button';
import { DateInput, TimeField } from '~/registry/default/ui/datefield';
import { FieldError, Label } from '~/registry/default/ui/field';

export function TimeFieldCustomValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <TimeField
        className={'group'}
        defaultValue={new Time(9, 25)}
        validate={(time) =>
          time?.minute % 15 === 0 ? null : 'Meetings start every 15 minutes.'
        }
      >
        <Label>Meeting time</Label>
        <DateInput className={'w-fit min-w-[100px]'} />
        <FieldError />
      </TimeField>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TimeFieldCustomValidation;
