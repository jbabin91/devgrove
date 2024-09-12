import { Label } from '~/registry/new-york/ui/field';
import { Progress } from '~/registry/new-york/ui/progress';

export function ProgressCustomFormat() {
  return (
    <Progress className={'w-3/5'} value={30} valueLabel="30 of 100 dogs">
      {({ valueText }) => (
        <div className="flex w-full justify-between">
          <Label>Feeding...</Label>
          <span className="value">{valueText}</span>
        </div>
      )}
    </Progress>
  );
}

export default ProgressCustomFormat;
