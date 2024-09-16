import { Label } from '@/registry/new-york/ui/field';
import {
  Slider,
  SliderFillTrack,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from '@/registry/new-york/ui/slider';

export function SliderDemo() {
  return (
    <Slider className="flex w-3/5 flex-col items-start gap-2" defaultValue={30}>
      <div className="flex w-full justify-between">
        <Label>Opacity</Label>
        <SliderOutput />
      </div>
      <SliderTrack>
        <SliderFillTrack />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  );
}

export default SliderDemo;
