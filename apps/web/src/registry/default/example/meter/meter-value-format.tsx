import { Label } from '@/registry/default/ui/field';
import { Meter } from '@/registry/default/ui/meter';

export function MeterValueFormat() {
  return (
    <Meter
      className="w-3/5"
      formatOptions={{ style: 'currency', currency: 'JPY' }}
      value={60}
    >
      {({ valueText }) => (
        <div className="flex w-full justify-between">
          <Label>Currency</Label>
          <span className="value">{valueText}</span>
        </div>
      )}
    </Meter>
  );
}

export default MeterValueFormat;
