'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  composeRenderProps,
} from 'react-aria-components';

import { cn } from '@/libs/utils';

import { Icons } from './icons';

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
    'data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2',
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
          'border border-input bg-background data-[hovered]:bg-accent data-[hovered]:text-accent-foreground',
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
type ButtonProps = {
  isLoading?: boolean;
  icon?: React.ReactNode;
} & AriaButtonProps &
  VariantProps<typeof buttonVariants>;

/**
 * Renders a button component.
 *
 * @component
 * @param {ButtonProps} props - The button component props.
 * @param {string} [props.className] - The CSS class name for the button.
 * @param {string} [props.variant] - The variant of the button (e.g., "primary", "secondary").
 * @param {string} [props.size] - The size of the button (e.g., "small", "medium", "large").
 * @param {boolean} [props.isLoading] - Indicates whether the button is in a loading state.
 * @param {boolean} [props.isDisabled] - Indicates whether the button is disabled.
 * @param {React.ReactNode} [props.icon] - The icon for the button component.
 * @param {React.ReactNode} [props.children] - The children of the button component.
 * @returns {JSX.Element} The rendered button component.
 */
function Button({
  className,
  variant,
  size,
  isLoading = false,
  isDisabled = false,
  icon,
  children,
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
      isDisabled={isDisabled ?? isLoading}
      {...props}
    >
      {isLoading ? <Icons.Reload className="mr-2 size-4 animate-spin" /> : null}
      {!isLoading && icon ? <span className="mr-2">{icon}</span> : null}
      <>{children}</>
    </AriaButton>
  );
}

export type { ButtonProps };
export { Button, buttonVariants };
