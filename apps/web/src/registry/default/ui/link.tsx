'use client';

import { type VariantProps } from 'class-variance-authority';
import {
  composeRenderProps,
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
} from 'react-aria-components';

import { cn } from '@/lib/utils';

import { buttonVariants } from './button';

/**
 * Represents the props for the Link component.
 */
type LinkProps = {} & AriaLinkProps & VariantProps<typeof buttonVariants>;

/**
 * Renders a link component.
 *
 * @component
 * @param {LinkProps} props - The props for the Link component.
 * @param {string} [props.className] - The class name for the link.
 * @param {string} [props.variant] - The variant of the link.
 * @param {string} [props.size] - The size of the link.
 * @returns {JSX.Element} The rendered Link component.
 */
function Link({ className, variant, size, ...props }: LinkProps): JSX.Element {
  return (
    <AriaLink
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

export type { LinkProps };
export { Link };
