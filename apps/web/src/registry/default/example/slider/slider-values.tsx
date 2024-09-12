import { Label } from '~/registry/default/ui/field';
import {
  Slider,
  SliderFillTrack,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from '~/registry/default/ui/slider';

export function SliderValues() {
  return (
    <Slider
      className="flex w-3/5 flex-col items-start gap-2"
      defaultValue={100}
      maxValue={150}
      minValue={50}
    >
      <div className="flex w-full justify-between">
        <Label>Cookies to Buy</Label>
        <SliderOutput />
      </div>
      <SliderTrack>
        <SliderFillTrack />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  );
}

export default SliderValues;
