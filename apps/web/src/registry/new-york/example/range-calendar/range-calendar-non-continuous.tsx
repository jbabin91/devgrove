import { isWeekend } from '@internationalized/date';
import { useLocale } from 'react-aria-components';

import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  RangeCalendar,
} from '~/registry/new-york/ui/calendar';

export function RangeCalendarNonContinuous() {
  const { locale } = useLocale();

  return (
    <RangeCalendar
      allowsNonContiguousRanges
      aria-label="Trip dates"
      isDateUnavailable={(date) => isWeekend(date, locale)}
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

export default RangeCalendarNonContinuous;
