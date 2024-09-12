import { Pipette } from 'lucide-react';
import { useContext, useState } from 'react';
import {
  ColorPickerStateContext,
  type ColorSpace,
  getColorChannels,
  parseColor,
} from 'react-aria-components';

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
import { Popover } from '~/registry/default/ui/popover';
import {
  Select,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from '~/registry/default/ui/select';
import { Input } from '~/registry/default/ui/textfield';

function EyeDropperButton() {
  const state = useContext(ColorPickerStateContext);

  // Check browser support.
  // @ts-expect-error - EyeDropper is not defined
  if (typeof EyeDropper === 'undefined') {
    return null;
  }

  return (
    <Button
      aria-label="Eye dropper"
      size="icon"
      variant="outline"
      onPress={() => {
        //@ts-expect-error - EyeDropper is not defined
        new EyeDropper()
          .open()
          .then((result: { sRGBHex: string }) =>
            state.setColor(parseColor(result.sRGBHex)),
          );
      }}
    >
      <Pipette />
    </Button>
  );
}

export function PickerMulti() {
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
            <div className="grid w-[192px] grid-cols-3 gap-1">
              {getColorChannels(space).map((channel) => (
                <ColorField key={channel} channel={channel} colorSpace={space}>
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
            <EyeDropperButton />
          </Dialog>
        </Popover>
      </DialogTrigger>
    </ColorPicker>
  );
}

export default PickerMulti;
