'use client';

import { type VariantProps } from 'class-variance-authority';
import {
  composeRenderProps,
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
} from 'react-aria-components';

import { cn } from '@/libs/utils';

import { buttonVariants } from './button';

/**
 * Represents the props for the Link component.
 *
 * @remarks
 * This interface extends the AriaLinkProps interface and adds additional props for the Link component.
 *
 * @public
 */
type LinkProps = {} & AriaLinkProps & VariantProps<typeof buttonVariants>;

/**
 * Renders a link component.
 *
 * @component
 * @param {LinkProps} props - The link component props.
 * @param {string} [props.className] - The class name for the link component.
 * @param {string} [props.variant] - The variant for the link component.
 * @param {string} [props.size] - The size for the link component.
 * @returns {JSX.Element} The rendered link component.
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
