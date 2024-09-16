import { GroveDateRangePicker } from '@/registry/new-york/ui/date-picker';

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
