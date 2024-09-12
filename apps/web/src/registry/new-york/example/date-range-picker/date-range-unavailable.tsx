import { getLocalTimeZone, today } from '@internationalized/date';
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
import { Icons } from '~/registry/new-york/ui/icons';

export function DateRangeUnavailable() {
  const now = today(getLocalTimeZone());
  const disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })],
  ];

  return (
    <Form className="flex flex-col gap-2">
      <DateRangePicker
        className="group min-w-[320px] space-y-1"
        isDateUnavailable={(date) =>
          disabledRanges.some(
            (interval) =>
              date.compare(interval[0]!) >= 0 &&
              date.compare(interval[1]!) <= 0,
          )
        }
        minValue={today(getLocalTimeZone())}
        validate={(value) =>
          disabledRanges.some(
            (interval) =>
              value &&
              value.end.compare(interval[0]!) >= 0 &&
              value.start.compare(interval[1]!) <= 0,
          )
            ? 'Selected date range may not include unavailable dates.'
            : null
        }
      >
        <Label>Trip dates</Label>
        <FieldGroup>
          <DateInput slot="start" variant="ghost" />
          <span
            aria-hidden="true"
            className="px-2 text-sm text-muted-foreground"
          >
            -
          </span>
          <DateInput className="flex-1" slot="end" variant="ghost" />

          <Button
            className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
            size="icon"
            variant="ghost"
          >
            <Icons.Calendar aria-hidden="true" className="size-4" />
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

export default DateRangeUnavailable;
