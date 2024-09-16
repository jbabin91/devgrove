import { isWeekend } from '@internationalized/date';
import { Form, useLocale } from 'react-aria-components';

import { Button } from '@/registry/default/ui/button';
import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  RangeCalendar,
} from '@/registry/default/ui/calendar';
import {
  DatePickerContent,
  DateRangePicker,
} from '@/registry/default/ui/date-picker';
import { DateInput } from '@/registry/default/ui/datefield';
import { FieldError, FieldGroup, Label } from '@/registry/default/ui/field';
import { Icons } from '@/registry/default/ui/icons';

export function DateRangeNonContinuous() {
  const { locale } = useLocale();

  return (
    <Form className="flex flex-col gap-2">
      <DateRangePicker
        allowsNonContiguousRanges
        className="group min-w-[320px] space-y-1"
        isDateUnavailable={(date) => isWeekend(date, locale)}
      >
        <Label>Time off request</Label>
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

export default DateRangeNonContinuous;
