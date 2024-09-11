'use client';

import { useContext } from 'react';
import {
  composeRenderProps,
  Slider as AriaSlider,
  SliderOutput as AriaSliderOutput,
  type SliderOutputProps as AriaSliderOutputProps,
  type SliderProps as AriaSliderProps,
  SliderStateContext as AriaSliderStateContext,
  SliderThumb as AriaSliderThumb,
  type SliderThumbProps as AriaSliderThumbProps,
  SliderTrack as AriaSliderTrack,
  type SliderTrackProps as AriaSliderTrackProps,
} from 'react-aria-components';

import { cn } from '~/libs/utils';

import { labelVariants } from './field';

/**
 * Renders a slider output component.
 *
 * @component
 * @param {AriaSliderOutputProps} props - The props for the SliderOutput component.
 * @param {string} [props.className] - The class name for the SliderOutput component.
 * @returns {JSX.Element} The rendered slider output component.
 */
function SliderOutput({
  className,
  ...props
}: AriaSliderOutputProps): JSX.Element {
  return (
    <AriaSliderOutput className={cn(labelVariants(), className)} {...props} />
  );
}

/**
 * Renders a slider component.
 *
 * @component
 * @param {AriaSliderProps} props - The props for the Slider component.
 * @param {string} [props.className] - The class name for the Slider component.
 * @param {'horizontal' | 'vertical'} [props.orientation='horizontal'] - The orientation of the slider. Can be 'horizontal' or 'vertical'.
 * @returns {JSX.Element} The rendered slider component.
 */
function Slider({
  className,
  orientation = 'horizontal',
  ...props
}: AriaSliderProps): JSX.Element {
  return (
    <AriaSlider
      className={composeRenderProps(className, (className) =>
        cn(
          'relative flex touch-none select-none items-center',
          {
            'h-full': orientation === 'vertical',
            'w-full': orientation === 'horizontal',
          },
          className,
        ),
      )}
      orientation={orientation}
      {...props}
    />
  );
}

/**
 * Renders the track component for the slider.
 *
 * @component
 * @param {AriaSliderTrackProps} props - The props for the SliderTrack component.
 * @param {string} [props.className] - The class name for the SliderTrack component.
 * @returns {JSX.Element} The rendered SliderTrack component.
 */
function SliderTrack({
  className,
  ...props
}: AriaSliderTrackProps): JSX.Element {
  return (
    <AriaSliderTrack
      className={composeRenderProps(className, (className, renderProps) =>
        cn(
          {
            'h-1.5 w-full': renderProps.orientation === 'horizontal',
            'h-full w-1.5': renderProps.orientation === 'vertical',
          },
          'relative grow rounded-full bg-primary/20',
          /* Disabled */
          'data-[disabled]:opacity-50',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Represents the fill track component for a slider.
 *
 * @component
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The HTML attributes for the div element.
 * @param {string} [props.className] - The class name for the fill track component.
 * @returns {JSX.Element} The rendered fill track component.
 */
function SliderFillTrack({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  const state = useContext(AriaSliderStateContext);
  const orientation = state.orientation === 'vertical' ? 'height' : 'width';
  return (
    <div
      className={cn(
        'absolute rounded-full bg-primary',
        {
          'h-full': state.orientation === 'horizontal',
          'w-full bottom-0': state.orientation === 'vertical',
        },
        className,
      )}
      style={{ [orientation]: state.getThumbPercent(0) * 100 + '%' }}
      {...props}
    />
  );
}

/**
 * Renders the slider thumb component for the slider.
 *
 * @component
 * @param {AriaSliderThumbProps} props - The props for the SliderThumb component.
 * @param {string} [props.className] - The class name for the SliderThumb component.
 * @returns {JSX.Element} The rendered slider thumb component.
 */
function SliderThumb({
  className,
  ...props
}: AriaSliderThumbProps): JSX.Element {
  return (
    <AriaSliderThumb
      className={composeRenderProps(className, (className) =>
        cn(
          'left-1/2 top-1/2 block size-4 rounded-full border border-primary/50 bg-background shadow transition-colors',
          /* Disabled */
          'data-[disabled]:pointer-events-none',
          /* Focus Visible */
          'data-[focus-visible]:outline-none data-[focus-visible]:ring-1 data-[focus-visible]:ring-ring',
          className,
        ),
      )}
      {...props}
    />
  );
}

export { Slider, SliderFillTrack, SliderOutput, SliderThumb, SliderTrack };
