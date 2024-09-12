import { parseAbsoluteToLocal } from '@internationalized/date';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';

import { Button } from '~/registry/default/ui/button';
import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  RangeCalendar,
} from '~/registry/default/ui/calendar';
import {
  DatePickerContent,
  DateRangePicker,
} from '~/registry/default/ui/date-picker';
import { DateInput } from '~/registry/default/ui/datefield';
import { FieldGroup, Label } from '~/registry/default/ui/field';

export function DateRangePickerGranularity() {
  const [date, setDate] = useState({
    start: parseAbsoluteToLocal('2021-04-07T18:45:22Z'),
    end: parseAbsoluteToLocal('2021-04-08T20:00:00Z'),
  });

  return (
    <div className="flex flex-col gap-2">
      <DateRangePicker
        className="min-w-[320px] space-y-1"
        granularity="second"
        value={date}
        onChange={setDate}
      >
        <Label>Date and time range</Label>
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

      <DateRangePicker
        className="min-w-[320px] space-y-1"
        granularity="day"
        value={date}
        onChange={setDate}
      >
        <Label>Date range</Label>
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
    </div>
  );
}

export default DateRangePickerGranularity;
