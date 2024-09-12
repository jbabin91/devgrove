import { parseZonedDateTime } from '@internationalized/date';

import { DateInput, TimeField } from '~/registry/default/ui/datefield';
import { Label } from '~/registry/default/ui/field';

export function TimeFieldTimezone() {
  return (
    <TimeField
      className="space-y-1"
      defaultValue={parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]')}
    >
      <Label>Event time</Label>
      <DateInput className="min-w-[100px]" />
    </TimeField>
  );
}

export default TimeFieldTimezone;
