import { GroveDateField } from '@/registry/new-york/ui/datefield';

export function DatefieldReusable() {
  return (
    <GroveDateField isRequired className="min-w-[150px]" label="Event date" />
  );
}

export default DatefieldReusable;
