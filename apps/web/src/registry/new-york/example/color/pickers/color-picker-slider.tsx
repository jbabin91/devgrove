'use client';

import { useState } from 'react';
import {
  type ColorSpace,
  getColorChannels,
  parseColor,
} from 'react-aria-components';

import { Button } from '~/registry/new-york/ui/button';
import {
  ColorPicker,
  ColorSlider,
  ColorSwatch,
  ColorThumb,
  SliderOutput,
  SliderTrack,
} from '~/registry/new-york/ui/color';
import { Dialog, DialogTrigger } from '~/registry/new-york/ui/dialog';
import { Label } from '~/registry/new-york/ui/field';
import { Popover } from '~/registry/new-york/ui/popover';
import {
  Select,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from '~/registry/new-york/ui/select';

export function PickerSliders() {
  const [color, setColor] = useState(parseColor('hsl(60, 100%, 50%)'));
  const [space, setSpace] = useState<ColorSpace>('rgb');

  return (
    <ColorPicker value={color} onChange={setColor}>
      <DialogTrigger>
        <Button className="flex h-fit items-center gap-2 p-1" variant="ghost">
          <ColorSwatch className="size-8 rounded-md border-2" />
          Fill Color
        </Button>
        <Popover className="w-fit" placement="bottom start">
          <Dialog className="flex flex-col gap-4 p-3 outline-none">
            <Select
              aria-label="Color Space"
              selectedKey={space}
              onSelectionChange={(s) => setSpace(s as ColorSpace)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectPopover>
                <SelectListBox aria-label="items">
                  <SelectItem id="rgb" textValue="rgb">
                    RGB
                  </SelectItem>
                  <SelectItem id="hsl" textValue="hsl">
                    HSL
                  </SelectItem>
                  <SelectItem id="hsb" textValue="hsb">
                    HSB
                  </SelectItem>
                </SelectListBox>
              </SelectPopover>
            </Select>
            {getColorChannels(space).map((channel) => (
              <ColorSlider key={channel} channel={channel} colorSpace={space}>
                <div className="flex justify-between">
                  <Label className="capitalize">{channel}</Label>
                  <SliderOutput />
                </div>
                <SliderTrack>
                  <ColorThumb className="top-1/2" />
                </SliderTrack>
              </ColorSlider>
            ))}
            <ColorSlider channel="alpha">
              <div className="flex justify-between">
                <Label className="capitalize">Alpha</Label>
                <SliderOutput />
              </div>
              <SliderTrack>
                <ColorThumb className="top-1/2" />
              </SliderTrack>
            </ColorSlider>
          </Dialog>
        </Popover>
      </DialogTrigger>
    </ColorPicker>
  );
}

export default PickerSliders;
