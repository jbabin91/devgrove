import { getLocalTimeZone, isWeekend, today } from '@internationalized/date';
import { useState } from 'react';
import { Text, useLocale } from 'react-aria-components';

import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from '~/registry/new-york/ui/calendar';

export function CalendarError() {
  const [date, setDate] = useState(today(getLocalTimeZone()));
  const { locale } = useLocale();
  const isInvalid = isWeekend(date, locale);

  return (
    <Calendar
      aria-label="Appointment date"
      isInvalid={isInvalid}
      minValue={today(getLocalTimeZone())}
      value={date}
      onChange={setDate}
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
          We are closed on weekends.
        </Text>
      )}
    </Calendar>
  );
}

export default CalendarError;
