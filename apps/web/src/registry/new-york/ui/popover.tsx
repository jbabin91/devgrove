'use client';

import {
  composeRenderProps,
  Dialog as AriaDialog,
  type DialogProps as AriaDialogProps,
  DialogTrigger as AriaDialogTrigger,
  Popover as AriaPopover,
  type PopoverProps as AriaPopoverProps,
} from 'react-aria-components';

import { cn } from '~/libs/utils';

/**
 * Represents a popover trigger component.
 * This component is used to trigger the display of a popover dialog.
 */
const PopoverTrigger = AriaDialogTrigger;

/**
 * Renders a popover component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.className] - The class name for the popover.
 * @param {number} [props.offset=4] - The offset value for the popover.
 * @returns {JSX.Element} The rendered popover component.
 */
function Popover({
  className,
  offset = 4,
  ...props
}: AriaPopoverProps): JSX.Element {
  return (
    <AriaPopover
      className={composeRenderProps(className, (className) =>
        cn(
          'z-50 rounded-md border bg-popover text-popover-foreground shadow-md outline-none',
          /* Entering */
          'data-[entering]:animate-in data-[entering]:fade-in-0 data-[entering]:zoom-in-95',
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

/**
 * Renders a popover dialog component.
 *
 * @component
 * @param {AriaDialogProps} props - The props for the popover dialog.
 * @param {string} [props.className] - The class name for the popover dialog.
 * @returns {JSX.Element} The rendered popover dialog component.
 */
function PopoverDialog({ className, ...props }: AriaDialogProps): JSX.Element {
  return (
    <AriaDialog className={cn('p-4 outline outline-0', className)} {...props} />
  );
}

export { Popover, PopoverDialog, PopoverTrigger };
