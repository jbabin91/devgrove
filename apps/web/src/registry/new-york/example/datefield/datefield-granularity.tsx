import {
  parseAbsoluteToLocal,
  parseZonedDateTime,
} from '@internationalized/date';
import { useState } from 'react';

import { DateField, DateInput } from '@/registry/new-york/ui/datefield';
import { Label } from '@/registry/new-york/ui/field';

export function DateFieldGranularity() {
  const [date, setDate] = useState(
    parseAbsoluteToLocal('2021-04-07T18:45:22Z'),
  );
  return (
    <div className="flex flex-col gap-2">
      <DateField
        className="min-w-[150px] space-y-1"
        defaultValue={parseZonedDateTime(
          '2022-11-07T00:45[America/Los_Angeles]',
        )}
        granularity="second"
        value={date}
        onChange={setDate}
      >
        <Label>Date and Time</Label>
        <DateInput />
      </DateField>
      <DateField
        className="min-w-[150px] space-y-1"
        defaultValue={parseZonedDateTime(
          '2022-11-07T00:45[America/Los_Angeles]',
        )}
        granularity="day"
        value={date}
        onChange={setDate}
      >
        <Label>Date</Label>
        <DateInput />
      </DateField>
    </div>
  );
}

export default DateFieldGranularity;
