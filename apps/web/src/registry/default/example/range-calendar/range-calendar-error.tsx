import { getLocalTimeZone, today } from '@internationalized/date';
import { useState } from 'react';
import { Text } from 'react-aria-components';

import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  RangeCalendar,
} from '@/registry/default/ui/calendar';

export function RangeCalendarError() {
  const [range, setRange] = useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ weeks: 1, days: 3 }),
  });
  const isInvalid = range.end.compare(range.start) > 7;

  return (
    <RangeCalendar
      aria-label="Trip dates"
      isInvalid={isInvalid}
      value={range}
      onChange={(val) => val && setRange(val)}
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
      {isInvalid && (
        <Text className="text-sm text-destructive" slot="errorMessage">
          Maximum stay duration is 1 week
        </Text>
      )}
    </RangeCalendar>
  );
}

export default RangeCalendarError;
