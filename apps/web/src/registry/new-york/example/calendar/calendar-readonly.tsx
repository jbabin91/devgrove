import { getLocalTimeZone, today } from '@internationalized/date';

import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from '~/registry/new-york/ui/calendar';

export function CalendarReadonly() {
  return (
    <Calendar
      isReadOnly
      aria-label="Appointment date"
      value={today(getLocalTimeZone())}
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
    </Calendar>
  );
}

export default CalendarReadonly;
