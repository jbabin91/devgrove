import { parseAbsoluteToLocal } from '@internationalized/date';

import { DateInput, TimeField } from '@/registry/new-york/ui/datefield';
import { Label } from '@/registry/new-york/ui/field';

export function TimeFieldGranularity() {
  return (
    <TimeField
      className="space-y-1"
      defaultValue={parseAbsoluteToLocal('2021-04-07T18:45:22Z')}
      granularity="second"
    >
      <Label>Event time</Label>
      <DateInput className="min-w-[100px]" />
    </TimeField>
  );
}

export default TimeFieldGranularity;
