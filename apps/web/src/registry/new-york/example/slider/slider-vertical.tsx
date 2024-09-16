import {
  Slider,
  SliderFillTrack,
  SliderThumb,
  SliderTrack,
} from '@/registry/new-york/ui/slider';

export function SliderVertical() {
  return (
    <Slider
      aria-label="Opacity"
      className="flex h-[150px] flex-col items-start gap-2"
      maxValue={1}
      orientation="vertical"
      step={0.01}
    >
      <SliderTrack>
        <SliderFillTrack />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  );
}

export default SliderVertical;
