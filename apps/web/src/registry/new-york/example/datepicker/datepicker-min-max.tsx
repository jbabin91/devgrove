import { getLocalTimeZone, today } from '@internationalized/date';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Form } from 'react-aria-components';

import { Button } from '~/registry/new-york/ui/button';
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from '~/registry/new-york/ui/calendar';
import {
  DatePicker,
  DatePickerContent,
} from '~/registry/new-york/ui/date-picker';
import { DateInput } from '~/registry/new-york/ui/datefield';
import { FieldError, FieldGroup, Label } from '~/registry/new-york/ui/field';

export function DatepickerMinMax() {
  return (
    <Form className="flex flex-col gap-2">
      <DatePicker
        className="group flex min-w-[208px] flex-col gap-2"
        minValue={today(getLocalTimeZone())}
      >
        <Label>Appointment Date</Label>
        <FieldGroup>
          <DateInput className="flex-1" variant="ghost" />
          <Button
            className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
            size="icon"
            variant="ghost"
          >
            <CalendarIcon aria-hidden className="size-4" />
          </Button>
        </FieldGroup>
        <FieldError />
        <DatePickerContent>
          <Calendar>
            <CalendarHeading />
            <CalendarGrid>
              <CalendarGridHeader>
                {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
              </CalendarGridHeader>
              <CalendarGridBody>
                {(date) => <CalendarCell date={date} />}
              </CalendarGridBody>
            </CalendarGrid>
          </Calendar>
        </DatePickerContent>
      </DatePicker>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default DatepickerMinMax;