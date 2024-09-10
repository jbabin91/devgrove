'use client';

import {
  composeRenderProps,
  Tooltip as AriaTooltip,
  type TooltipProps as AriaTooltipProps,
  TooltipTrigger as AriaTooltipTrigger,
} from 'react-aria-components';

import { cn } from '~/lib/utils';

/**
 * TooltipTrigger is a component that triggers the display of a tooltip.
 */
const TooltipTrigger = AriaTooltipTrigger;

/**
 * Renders a tooltip component.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string} [props.className] - The class name for the tooltip.
 * @param {number} [props.offset=4] - The offset value for the tooltip.
 * @returns {JSX.Element} The rendered tooltip component.
 */
function Tooltip({
  className,
  offset = 4,
  ...props
}: AriaTooltipProps): JSX.Element {
  return (
    <AriaTooltip
      className={composeRenderProps(className, (className) =>
        cn(
          'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0',
          /* Entering */
          'data-[entering]:zoom-in-95',
          /* Exiting */
          'data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95',
          /* Placement */
          'data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2',
          className,
        ),
      )}
      offset={offset}
      {...props}
    />
  );
}

export { Tooltip, TooltipTrigger };
