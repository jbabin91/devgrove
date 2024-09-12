import { Text } from 'react-aria-components';

import { DateField, DateInput } from '~/registry/new-york/ui/datefield';
import { Label } from '~/registry/new-york/ui/field';

export function DateFieldDescription() {
  return (
    <DateField isRequired className="flex flex-col gap-2" granularity="hour">
      <Label>Appointment date</Label>
      <DateInput className="w-[180px]" />
      <Text className="text-sm text-muted-foreground" slot="description">
        Please select a weekday between 9 AM and 5 PM.
      </Text>
    </DateField>
  );
}

export default DateFieldDescription;
