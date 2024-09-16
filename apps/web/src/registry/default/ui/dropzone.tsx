'use client';

import {
  composeRenderProps,
  DropZone as AriaDropZone,
  type DropZoneProps as AriaDropZoneProps,
} from 'react-aria-components';

import { cn } from '@/libs/utils';

/**
 * Renders a drop zone component.
 *
 * @component
 * @param {AriaDropZoneProps} props - The props for the drop zone.
 * @param {string} [props.className] - The CSS class name for the drop zone.
 * @returns {JSX.Element} The rendered drop zone component.
 */
function DropZone({ className, ...props }: AriaDropZoneProps): JSX.Element {
  return (
    <AriaDropZone
      className={composeRenderProps(className, (className) =>
        cn(
          'flex h-[150px] w-[300px] flex-col items-center justify-center gap-2 rounded-md border border-dashed text-sm ring-offset-background',
          /* Drop Target */
          'data-[drop-target]:border-solid data-[drop-target]:border-primary data-[drop-target]:bg-accent',
          /* Focus Visible */
          'data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2',
          className,
        ),
      )}
      {...props}
    />
  );
}

export { DropZone };
