'use client';

import {
  Separator as AriaSeparator,
  type SeparatorProps as AriaSeparatorProps,
} from 'react-aria-components';

import { cn } from '@/lib/utils';

/**
 * Renders a separator component.
 *
 * @component
 * @param {AriaSeparatorProps} props - The props for the separator component.
 * @param {string} [props.className] - The class name for the separator component.
 * @param {'horizontal' | 'vertical'} [props.orientation='horizontal'] - The orientation of the separator. Can be 'horizontal' or 'vertical'.
 * @returns {JSX.Element} The rendered separator component.
 */
function Separator({
  className,
  orientation = 'horizontal',
  ...props
}: AriaSeparatorProps): JSX.Element {
  return (
    <AriaSeparator
      className={cn(
        'bg-border',
        /* Orientation */
        orientation === 'horizontal' ? 'h-px w-full' : 'w-px',
        className,
      )}
      orientation={orientation}
      {...props}
    />
  );
}

export { Separator };
