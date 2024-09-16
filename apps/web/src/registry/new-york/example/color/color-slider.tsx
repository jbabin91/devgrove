import {
  ColorSlider,
  ColorThumb,
  SliderTrack,
} from '@/registry/new-york/ui/color';

export function ColorSliderDemo() {
  return (
    <ColorSlider channel="hue" defaultValue="hsl(0, 100%, 50%)">
      <SliderTrack>
        <ColorThumb className="top-1/2" />
      </SliderTrack>
    </ColorSlider>
  );
}

export default ColorSliderDemo;
