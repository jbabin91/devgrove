'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  composeRenderProps,
} from 'react-aria-components';

import { cn } from '~/lib/utils';

/**
 * Represents the variants and default styles for a button component.
 *
 * @remarks
 * The `buttonVariants` object contains the following properties:
 * - `variants`: An object that defines different variants of the button, such as `default`, `destructive`, `outline`, `secondary`, `ghost`, and `link`.
 * - `size`: An object that defines different sizes of the button, such as `default`, `sm`, `lg`, and `icon`.
 * - `defaultVariants`: An object that specifies the default variant and size for the button.
 */
const buttonVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors',
    /* Disabled */
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ',
    /* Focus Visible */
    'data-[focus-visible]:ring-ring data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-offset-2',
    /* Resets */
    'focus-visible:outline-none',
  ],
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground data-[hovered]:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground data-[hovered]:bg-destructive/90',
        outline:
          'border-input data-[hovered]:bg-accent data-[hovered]:text-accent-foreground border bg-background',
        secondary:
          'bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80',
        ghost: 'data-[hovered]:bg-accent data-[hovered]:text-accent-foreground',
        link: 'text-primary underline-offset-4 data-[hovered]:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

/**
 * Represents the props for the Button component.
 */
type ButtonProps = {} & AriaButtonProps & VariantProps<typeof buttonVariants>;

/**
 * Renders a button component.
 *
 * @component
 * @example
 * ```tsx
 * <Button variant="primary" size="large" onClick={handleClick}>Click me</Button>
 * ```
 *
 * @param {ButtonProps} props - The button component props.
 * @param {string} props.className - The CSS class name for the button.
 * @param {string} props.variant - The variant of the button (e.g., "primary", "secondary").
 * @param {string} props.size - The size of the button (e.g., "small", "medium", "large").
 * @returns {JSX.Element} The rendered button component.
 */
function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <AriaButton
      className={composeRenderProps(className, (className) =>
        cn(
          buttonVariants({
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

export type { ButtonProps };
export { Button, buttonVariants };