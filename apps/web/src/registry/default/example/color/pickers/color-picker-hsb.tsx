import { useState } from 'react';
import { getColorChannels, parseColor } from 'react-aria-components';

import { Button } from '~/registry/default/ui/button';
import {
  ColorArea,
  ColorField,
  ColorPicker,
  ColorSlider,
  ColorSwatch,
  ColorSwatchPicker,
  ColorSwatchPickerItem,
  ColorThumb,
  SliderTrack,
} from '~/registry/default/ui/color';
import { Dialog, DialogTrigger } from '~/registry/default/ui/dialog';
import { Label } from '~/registry/default/ui/field';
import { Popover } from '~/registry/default/ui/popover';
import { Input } from '~/registry/default/ui/textfield';

export function HsbPicker() {
  const [color, setColor] = useState(parseColor('hsb(120, 100%, 100%)'));

  return (
    <ColorPicker value={color} onChange={setColor}>
      <DialogTrigger>
        <Button className="flex h-fit items-center gap-2 p-1" variant="ghost">
          <ColorSwatch className="size-8 rounded-md border-2" />
          HSB Color
        </Button>
        <Popover className="w-fit" placement="bottom start">
          <Dialog className="flex flex-col gap-4 p-3 outline-none">
            <div>
              <ColorArea
                className="h-[164px] rounded-b-none border-b-0"
                colorSpace="hsb"
                xChannel="saturation"
                yChannel="brightness"
              >
                <ColorThumb className="z-50" />
              </ColorArea>
              <ColorSlider channel="hue" colorSpace="hsb">
                <SliderTrack className="rounded-t-none border-t-0">
                  <ColorThumb className="top-1/2" />
                </SliderTrack>
              </ColorSlider>
            </div>
            <div className="grid w-[192px] grid-cols-3 gap-1">
              <Label className="col-span-3 capitalize">HSB</Label>
              {getColorChannels('hsb').map((channel) => (
                <ColorField key={channel} channel={channel} colorSpace="hsb">
                  <Input aria-label={channel.toString()} />
                </ColorField>
              ))}
            </div>

            <ColorSwatchPicker className="w-[192px]">
              <ColorSwatchPickerItem color="#F00">
                <ColorSwatch />
              </ColorSwatchPickerItem>
              <ColorSwatchPickerItem color="#f90">
                <ColorSwatch />
              </ColorSwatchPickerItem>
              <ColorSwatchPickerItem color="#0F0">
                <ColorSwatch />
              </ColorSwatchPickerItem>
              <ColorSwatchPickerItem color="#08f">
                <ColorSwatch />
              </ColorSwatchPickerItem>
              <ColorSwatchPickerItem color="#00f">
                <ColorSwatch />
              </ColorSwatchPickerItem>
            </ColorSwatchPicker>
          </Dialog>
        </Popover>
      </DialogTrigger>
    </ColorPicker>
  );
}

export default HsbPicker;
