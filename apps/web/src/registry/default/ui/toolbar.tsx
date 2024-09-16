'use client';

import {
  composeRenderProps,
  Toolbar as AriaToolbar,
  type ToolbarProps,
} from 'react-aria-components';

import { cn } from '@/lib/utils';

/**
 * Renders a toolbar component.
 *
 * @component
 * @param {Object} props - The properties of the toolbar.
 * @param {string} [props.className] - The class name for the toolbar.
 * @returns {JSX.Element} The rendered toolbar component.
 */
function Toolbar({ className, ...props }: ToolbarProps): JSX.Element {
  return (
    <AriaToolbar
      {...props}
      className={composeRenderProps(className, (className) =>
        cn(
          'flex gap-2',
          /* Orientation */
          'data-[orientation=vertical]:flex-col',
          className,
        ),
      )}
    />
  );
}

export { Toolbar };
