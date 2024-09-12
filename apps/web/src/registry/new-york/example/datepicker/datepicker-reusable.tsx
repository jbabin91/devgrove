import { GroveDatePicker } from '~/registry/new-york/ui/date-picker';

export function DatepickerReusable() {
  return (
    <GroveDatePicker isRequired className="min-w-[200px]" label="Event date" />
  );
}

export default DatepickerReusable;
