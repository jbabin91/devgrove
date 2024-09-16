import {
  parseAbsoluteToLocal,
  parseZonedDateTime,
} from '@internationalized/date';

import { DateField, DateInput } from '@/registry/new-york/ui/datefield';
import { Label } from '@/registry/new-york/ui/field';

export function DateFieldTimeZone() {
  return (
    <div className="flex flex-col gap-2">
      <DateField
        className="min-w-[150px] space-y-1"
        defaultValue={parseZonedDateTime(
          '2022-11-07T00:45[America/Los_Angeles]',
        )}
      >
        <Label>Event date</Label>
        <DateInput />
      </DateField>
      <DateField
        className="min-w-[150px] space-y-1"
        defaultValue={parseAbsoluteToLocal('2021-11-07T07:45:00Z')}
      >
        <Label>Event date</Label>
        <DateInput />
      </DateField>
    </div>
  );
}

export default DateFieldTimeZone;
