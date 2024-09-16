import { parseZonedDateTime } from '@internationalized/date';

import { Button } from '@/registry/default/ui/button';
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from '@/registry/default/ui/calendar';
import {
  DatePicker,
  DatePickerContent,
} from '@/registry/default/ui/date-picker';
import { DateInput } from '@/registry/default/ui/datefield';
import { FieldGroup, Label } from '@/registry/default/ui/field';
import { Icons } from '@/registry/default/ui/icons';

export function DatepickerTimezone() {
  return (
    <DatePicker
      className="min-w-[208px] space-y-1"
      defaultValue={parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]')}
    >
      <Label>Date</Label>
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
  );
}

export default DatepickerTimezone;
