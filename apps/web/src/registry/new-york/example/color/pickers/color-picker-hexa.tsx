import { useState } from 'react';
import { parseColor } from 'react-aria-components';

import { Button } from '~/registry/new-york/ui/button';
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
} from '~/registry/new-york/ui/color';
import { Dialog, DialogTrigger } from '~/registry/new-york/ui/dialog';
import { Label } from '~/registry/new-york/ui/field';
import { Popover } from '~/registry/new-york/ui/popover';
import { Input } from '~/registry/new-york/ui/textfield';

export function HexaPicker() {
  const [color, setColor] = useState(parseColor('#FF000050'));

  return (
    <ColorPicker value={color} onChange={setColor}>
      <DialogTrigger>
        <Button className="flex h-fit items-center gap-2 p-1" variant="ghost">
          <ColorSwatch className="size-8 rounded-md border-2" />
          Hex Alpha Color
        </Button>
        <Popover className="w-fit" placement="bottom start">
          <Dialog className="flex flex-col gap-4 p-3 outline-none">
            <div>
              <ColorArea
                className="h-[136px] rounded-b-none border-b-0"
                colorSpace="hsb"
                xChannel="saturation"
                yChannel="brightness"
              >
                <ColorThumb className="z-50" />
              </ColorArea>
              <ColorSlider channel="hue" colorSpace="hsb">
                <SliderTrack className="rounded-none border-y-0">
                  <ColorThumb className="top-1/2" />
                </SliderTrack>
              </ColorSlider>
              <ColorSlider channel="alpha" colorSpace="hsb">
                <SliderTrack
                  className="rounded-t-none border-t-0"
                  style={({ defaultStyle }) => ({
                    background: `${defaultStyle.background},
            repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
                  })}
                >
                  <ColorThumb className="top-1/2" />
                </SliderTrack>
              </ColorSlider>
            </div>
            <ColorField className="w-[192px]">
              <Label>Hex</Label>
              <Input className="" />
            </ColorField>
            <ColorField channel="alpha" className="w-[192px]">
              <Label>Alpha</Label>
              <Input className="" />
            </ColorField>
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

export default HexaPicker;