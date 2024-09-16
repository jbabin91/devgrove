import { GroveDatePicker } from '@/registry/default/ui/date-picker';

export function DatepickerReusable() {
  return (
    <GroveDatePicker isRequired className="min-w-[200px]" label="Event date" />
  );
}

export default DatepickerReusable;
