import { GroveDateRangePicker } from '@/registry/default/ui/date-picker';

export function DateRangePickerReusable() {
  return (
    <GroveDateRangePicker
      isRequired
      className="min-w-[300px]"
      label="Trip dates"
    />
  );
}

export default DateRangePickerReusable;
