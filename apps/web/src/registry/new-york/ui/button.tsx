'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  composeRenderProps,
} from 'react-aria-components';

import { cn } from '@/lib/utils';

import { Icons } from './icons';

/**
 * Represents the button variants configuration.
 *
 * @remarks
 * This configuration defines the different variants of a button, such as default, destructive, outline, secondary, ghost, and link.
 * Each variant has its own set of styles and sizes.
 *
 * @public
 */
const buttonVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors',
    /* Disabled */
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ',
    /* Focus Visible */
    'data-[focus-visible]:outline-none data-[focus-visible]:ring-1 data-[focus-visible]:ring-ring ',
    /* Resets */
    'focus-visible:outline-none',
  ],
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow data-[hovered]:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm data-[hovered]:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm  data-[hovered]:bg-accent data-[hovered]:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm data-[hovered]:bg-secondary/80',
        ghost: 'data-[hovered]:bg-accent data-[hovered]:text-accent-foreground',
        link: 'text-primary underline-offset-4 data-[hovered]:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'size-9',
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
 *
 * @remarks
 * This object defines the props for the Button component.
 *
 * @public
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
 * @param {ButtonProps} props - The button props.
 * @param {string} [props.className] - The class name for the button component.
 * @param {string} [props.variant] - The variant for the button component.
 * @param {string} [props.size] - The size for the button component.
 * @param {boolean} [props.isLoading] - Indicates if the button is in a loading state.
 * @param {boolean} [props.isDisabled] - Indicates if the button is disabled.
 * @param {React.ReactNode} [props.icon] - The icon for the button component.
 * @param {React.ReactNode} [props.children] - The children to render inside the button component.
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
