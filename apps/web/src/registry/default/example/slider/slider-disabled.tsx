import { Label } from '~/registry/default/ui/field';
import {
  Slider,
  SliderFillTrack,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from '~/registry/default/ui/slider';

export function SliderDisabled() {
  return (
    <Slider
      isDisabled
      className="flex w-3/5 flex-col items-start gap-2"
      defaultValue={25}
    >
      <div className="flex w-full justify-between">
        <Label>Cookies to share</Label>
        <SliderOutput />
      </div>
      <SliderTrack>
        <SliderFillTrack />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  );
}

export default SliderDisabled;
