import { Label } from '~/registry/new-york/ui/field';
import { Meter } from '~/registry/new-york/ui/meter';

export function MeterCustomFormat() {
  return (
    <Meter className={'w-3/5'} value={54} valueLabel="54 of 60GB">
      {({ valueText }) => (
        <div className="flex w-full justify-between">
          <Label>Space used</Label>
          <span className="value">{valueText}</span>
        </div>
      )}
    </Meter>
  );
}

export default MeterCustomFormat;