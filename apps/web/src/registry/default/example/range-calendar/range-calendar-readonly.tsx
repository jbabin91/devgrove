import { getLocalTimeZone, today } from '@internationalized/date';

import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  RangeCalendar,
} from '~/registry/default/ui/calendar';

export function RangeCalendarReadonly() {
  return (
    <RangeCalendar
      isReadOnly
      aria-label="Trip dates"
      value={{
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()).add({ weeks: 1 }),
      }}
    >
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
  );
}

export default RangeCalendarReadonly;
