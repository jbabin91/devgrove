import { Label } from '~/registry/default/ui/field';
import { Progress } from '~/registry/default/ui/progress';

export function ProgressValueFormat() {
  return (
    <Progress
      className={'w-3/5'}
      formatOptions={{ style: 'currency', currency: 'JPY' }}
      value={60}
    >
      {({ valueText }) => (
        <div className="flex w-full justify-between">
          <Label>Sending...</Label>
          <span className="value">{valueText}</span>
        </div>
      )}
    </Progress>
  );
}

export default ProgressValueFormat;