import { getLocalTimeZone, today } from '@internationalized/date';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Form } from 'react-aria-components';

import { Button } from '~/registry/new-york/ui/button';
import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  RangeCalendar,
} from '~/registry/new-york/ui/calendar';
import {
  DatePickerContent,
  DateRangePicker,
} from '~/registry/new-york/ui/date-picker';
import { DateInput } from '~/registry/new-york/ui/datefield';
import { FieldError, FieldGroup, Label } from '~/registry/new-york/ui/field';

export function DateRangeCustomValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <DateRangePicker
        className="group min-w-[320px] space-y-1"
        defaultValue={{
          start: today(getLocalTimeZone()),
          end: today(getLocalTimeZone()).add({ weeks: 1, days: 3 }),
        }}
        validate={(range) =>
          range?.end.compare(range.start) > 7
            ? 'Maximum stay duration is 1 week.'
            : null
        }
      >
        <Label>Trip dates</Label>
        <FieldGroup>
          <DateInput slot={'start'} variant="ghost" />
          <span aria-hidden className="px-2 text-sm text-muted-foreground">
            -
          </span>
          <DateInput className="flex-1" slot={'end'} variant="ghost" />

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
          <RangeCalendar>
            <CalendarHeading />
            <CalendarGrid>
              <CalendarGridHeader>
                {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
              </CalendarGridHeader>
              <CalendarGridBody>
                {(date) => <CalendarCell date={date} />}
              </CalendarGridBody>
            </CalendarGrid>
          </RangeCalendar>
        </DatePickerContent>
      </DateRangePicker>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default DateRangeCustomValidation;