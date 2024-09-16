import { getLocalTimeZone, today } from '@internationalized/date';

import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from '@/registry/new-york/ui/calendar';

export function CalendarValidation() {
  return (
    <Calendar
      aria-label="Appointment date"
      minValue={today(getLocalTimeZone())}
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

export default CalendarValidation;
