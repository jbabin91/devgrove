import { getLocalTimeZone, isWeekend, today } from '@internationalized/date';
import { type DateValue, useLocale } from 'react-aria-components';

import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from '@/registry/new-york/ui/calendar';

export function CalendarUnavailable() {
  const now = today(getLocalTimeZone());
  const disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })],
  ];

  const { locale } = useLocale();
  const isDateUnavailable = (date: DateValue) =>
    isWeekend(date, locale) ??
    disabledRanges.some(
      (interval) =>
        date.compare(interval[0]!) >= 0 && date.compare(interval[1]!) <= 0,
    );
  return (
    <Calendar
      aria-label="Appointment date"
      isDateUnavailable={isDateUnavailable}
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

export default CalendarUnavailable;
