'use client';

import { Input as AriaInput } from 'react-aria-components';

import { FieldGroup, Label } from '~/registry/default/ui/field';

export function GroupLabel() {
  return (
    <div className="flex flex-col gap-2">
      <Label id="label-id">Serial number</Label>
      <FieldGroup aria-labelledby="label-id" className="w-[200px]">
        <AriaInput
          aria-label="First 3 digits"
          className="min-w-0 flex-1 bg-background px-2 py-1.5 outline outline-0 placeholder:text-muted-foreground"
          placeholder="000"
          size={3}
        />
        -
        <AriaInput
          aria-label="Middle 2 digits"
          className="min-w-0 flex-1 bg-background px-2 py-1.5 outline outline-0 placeholder:text-muted-foreground"
          placeholder="00"
          size={2}
        />
        -
        <AriaInput
          aria-label="Last 4 digits"
          className="min-w-0 flex-1 bg-background px-2 py-1.5 outline outline-0 placeholder:text-muted-foreground"
          placeholder="0000"
          size={4}
        />
      </FieldGroup>
    </div>
  );
}

export default GroupLabel;
