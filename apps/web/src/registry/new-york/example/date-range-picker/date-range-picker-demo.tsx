import { Button } from '@/registry/new-york/ui/button';
import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  RangeCalendar,
} from '@/registry/new-york/ui/calendar';
import {
  DatePickerContent,
  DateRangePicker,
} from '@/registry/new-york/ui/date-picker';
import { DateInput } from '@/registry/new-york/ui/datefield';
import { FieldGroup, Label } from '@/registry/new-york/ui/field';
import { Icons } from '@/registry/new-york/ui/icons';

export function DateRangePickerDemo() {
  return (
    <DateRangePicker className="min-w-[320px] space-y-1">
      <Label>Date range</Label>
      <FieldGroup>
        <DateInput slot="start" variant="ghost" />
        <span aria-hidden="true" className="px-2 text-sm text-muted-foreground">
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
  );
}

export default DateRangePickerDemo;
