'use client';

import {
  ColorArea as AriaColorArea,
  type ColorAreaProps as AriaColorAreaProps,
  ColorField as AriaColorField,
  ColorPicker as AriaColorPicker,
  ColorSlider as AriaColorSlider,
  ColorSwatch as AriaColorSwatch,
  ColorSwatchPicker as AriaColorSwatchPicker,
  ColorSwatchPickerItem as AriaColorSwatchPickerItem,
  type ColorSwatchPickerItemProps as AriaColorSwatchPickerItemProps,
  type ColorSwatchPickerProps as AriaColorSwatchPickerProps,
  type ColorSwatchProps as AriaColorSwatchProps,
  ColorThumb as AriaColorThumb,
  type ColorThumbProps as AriaColorThumbProps,
  ColorWheel as AriaColorWheel,
  type ColorWheelProps as AriaColorWheelProps,
  ColorWheelTrack as AriaColorWheelTrack,
  composeRenderProps,
  SliderOutput as AriaSliderOutput,
  SliderTrack as AriaSliderTrack,
  type SliderTrackProps as AriaSliderTrackProps,
} from 'react-aria-components';

import { cn } from '~/lib/utils';

/**
 * Represents a color slider component.
 */
const ColorSlider = AriaColorSlider;

/**
 * Represents a color field component.
 */
const ColorField = AriaColorField;

/**
 * Represents a color wheel track.
 */
const ColorWheelTrack = AriaColorWheelTrack;

/**
 * A color picker component.
 */
const ColorPicker = AriaColorPicker;

/**
 * Represents the output of a slider.
 */
const SliderOutput = AriaSliderOutput;

/**
 * Represents the props for the ColorWheel component.
 */
type ColorWheelProps = {
  outerRadius?: number;
  innerRadius?: number;
} & Omit<AriaColorWheelProps, 'outerRadius' | 'innerRadius'>;

/**
 * Renders a color wheel component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.className] - The CSS class name for the component.
 * @param {number} [props.outerRadius=100] - The outer radius of the color wheel.
 * @param {number} [props.innerRadius=74] - The inner radius of the color wheel.
 * @returns {JSX.Element} The rendered color wheel component.
 */
function ColorWheel({
  className,
  outerRadius = 100,
  innerRadius = 74,
  ...props
}: ColorWheelProps): JSX.Element {
  return (
    <AriaColorWheel
      className={composeRenderProps(className, (className) => cn(className))}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      {...props}
    />
  );
}

/**
 * Renders a color area component.
 *
 * @component
 * @param {AriaColorAreaProps} props - The props for the color area.
 * @returns {JSX.Element} The rendered color area component.
 */
function ColorArea({ className, ...props }: AriaColorAreaProps): JSX.Element {
  return (
    <AriaColorArea
      className={composeRenderProps(className, (className) =>
        cn(
          'size-[192px] shrink-0 rounded-md border border-border shadow-md',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Renders the track component for a slider.
 *
 * @param className - The CSS class name for the component.
 * @param props - Additional props for the component.
 * @returns {JSX.Element} The rendered track component.
 */
function SliderTrack({
  className,
  ...props
}: AriaSliderTrackProps): JSX.Element {
  return (
    <AriaSliderTrack
      className={composeRenderProps(className, (className) =>
        cn('h-7 w-[192px] rounded-md border border-border ', className),
      )}
      {...props}
    />
  );
}

/**
 * Renders a color thumb component.
 *
 * @component
 * @param {AriaColorThumbProps} props - The props for the color thumb component.
 * @returns {JSX.Element} The rendered color thumb component.
 */
function ColorThumb({ className, ...props }: AriaColorThumbProps): JSX.Element {
  return (
    <AriaColorThumb
      className={composeRenderProps(className, (className) =>
        cn(
          'z-10 box-border size-5 rounded-[50%] border-2 border-white shadow-md',
          /* Focus Visible */
          'data-[focus-visible]:size-6',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Renders a color swatch picker component.
 *
 * @component
 * @param {AriaColorSwatchPickerProps} props - The props for the color swatch picker.
 * @returns {JSX.Element} The rendered color swatch picker component.
 */
function ColorSwatchPicker({
  className,
  ...props
}: AriaColorSwatchPickerProps): JSX.Element {
  return (
    <AriaColorSwatchPicker
      className={composeRenderProps(className, (className) =>
        cn('flex flex-wrap gap-2', className),
      )}
      {...props}
    />
  );
}

/**
 * Renders a color swatch picker item.
 *
 * @component
 * @param {AriaColorSwatchPickerItemProps} props - The props for the color swatch picker item.
 * @returns {JSX.Element} The rendered color swatch picker item.
 */
function ColorSwatchPickerItem({
  className,
  ...props
}: AriaColorSwatchPickerItemProps): JSX.Element {
  return (
    <AriaColorSwatchPickerItem
      className={composeRenderProps(className, (className) =>
        cn(
          'size-8 overflow-hidden rounded-md border-2 ring-offset-background transition-colors',
          /* Selected */
          'data-[selected]:border-white',
          /* Disabled */
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          /* Focus Visible */
          'data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Renders a color swatch component.
 *
 * @component
 * @param {AriaColorSwatchProps} props - The props for the color swatch.
 * @returns {JSX.Element} The rendered color swatch component.
 */
function ColorSwatch({
  className,
  ...props
}: AriaColorSwatchProps): JSX.Element {
  return (
    <AriaColorSwatch
      className={composeRenderProps(className, (className) =>
        cn('size-8', className),
      )}
      {...props}
    />
  );
}

export type { ColorWheelProps };
export {
  ColorArea,
  ColorField,
  ColorPicker,
  ColorSlider,
  ColorSwatch,
  ColorSwatchPicker,
  ColorSwatchPickerItem,
  ColorThumb,
  ColorWheel,
  ColorWheelTrack,
  SliderOutput,
  SliderTrack,
};