'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import {
  composeRenderProps,
  ToggleButton as AriaToggleButton,
  type ToggleButtonProps as AriaToggleButtonProps,
} from 'react-aria-components';

import { cn } from '@/lib/utils';

/**
 * Represents the configuration options for the toggle component.
 *
 * @remarks
 * The `toggleVariants` object defines the CSS classes and styles for different variants and sizes of the toggle component.
 * It is used to customize the appearance of the toggle component based on different states and user interactions.
 */
const toggleVariants = cva(
  [
    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors',
    /* Disabled */
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    /* Hover */
    'data-[hovered]:bg-muted data-[hovered]:text-muted-foreground',
    /* Selected */
    'data-[selected]:bg-accent data-[selected]:text-accent-foreground',
    /* Focus Visible */
    'data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2',
    /* Resets */
    'focus-visible:outline-none',
  ],
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-input bg-transparent data-[hovered]:bg-accent data-[hovered]:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 px-2.5',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

/**
 * Represents the props for the Toggle component.
 */
type ToggleProps = {} & AriaToggleButtonProps &
  VariantProps<typeof toggleVariants>;

/**
 * Renders a toggle component.
 *
 * @component
 * @param {ToggleProps} props - The toggle component props.
 * @param {string} [props.className] - The class name for the toggle component.
 * @param {string} [props.variant] - The variant for the toggle component.
 * @param {string} [props.size] - The size for the toggle component.
 * @returns {JSX.Element} The rendered toggle component.
 */
function Toggle({
  className,
  variant,
  size,
  ...props
}: ToggleProps): JSX.Element {
  return (
    <AriaToggleButton
      className={composeRenderProps(className, (className) =>
        cn(
          toggleVariants({
            variant,
            size,
            className,
          }),
        ),
      )}
      {...props}
    />
  );
}

export type { ToggleProps };
export { Toggle, toggleVariants };
