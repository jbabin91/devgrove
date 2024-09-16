import { parseAbsoluteToLocal } from '@internationalized/date';
import { useState } from 'react';

import { Button } from '@/registry/new-york/ui/button';
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from '@/registry/new-york/ui/calendar';
import {
  DatePicker,
  DatePickerContent,
} from '@/registry/new-york/ui/date-picker';
import { DateInput } from '@/registry/new-york/ui/datefield';
import { FieldGroup, Label } from '@/registry/new-york/ui/field';
import { Icons } from '@/registry/new-york/ui/icons';

export function DatepickerGranularity() {
  const [date, setDate] = useState(
    parseAbsoluteToLocal('2021-04-07T18:45:22Z'),
  );

  return (
    <div className="flex flex-col gap-2">
      <DatePicker
        className="min-w-[208px] space-y-1"
        granularity="second"
        value={date}
        onChange={setDate}
      >
        <Label>Date and Time</Label>
        <FieldGroup>
          <DateInput className="flex-1" variant="ghost" />
          <Button
            className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
            size="icon"
            variant="ghost"
          >
            <Icons.Calendar aria-hidden="true" className="size-4" />
          </Button>
        </FieldGroup>
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

      <DatePicker
        className="min-w-[208px] space-y-1"
        granularity="day"
        value={date}
        onChange={setDate}
      >
        <Label>Day</Label>
        <FieldGroup>
          <DateInput className="flex-1" variant="ghost" />
          <Button
            className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
            size="icon"
            variant="ghost"
          >
            <Icons.Calendar aria-hidden="true" className="size-4" />
          </Button>
        </FieldGroup>
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
    </div>
  );
}

export default DatepickerGranularity;
