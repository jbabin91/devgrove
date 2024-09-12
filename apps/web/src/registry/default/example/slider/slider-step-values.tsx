import { Label } from '~/registry/default/ui/field';
import {
  Slider,
  SliderFillTrack,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from '~/registry/default/ui/slider';

export function SliderStepValues() {
  return (
    <Slider
      className="flex w-3/5 flex-col items-start gap-2"
      formatOptions={{ style: 'currency', currency: 'USD' }}
      maxValue={100}
      minValue={0}
      step={5}
    >
      <div className="flex w-full justify-between">
        <Label>Amount</Label>
        <SliderOutput />
      </div>
      <SliderTrack>
        <SliderFillTrack />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  );
}

export default SliderStepValues;
