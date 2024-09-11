'use client';

import {
  Breadcrumb as AriaBreadcrumb,
  type BreadcrumbProps as AriaBreadcrumbProps,
  Breadcrumbs as AriaBreadcrumbs,
  type BreadcrumbsProps as AriaBreadcrumbsProps,
  composeRenderProps,
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
} from 'react-aria-components';

import { cn } from '~/libs/utils';

import { Icons } from './icons';

/**
 * Renders a set of breadcrumbs.
 *
 * @component
 * @template T - The type of the object.
 * @param {AriaBreadcrumbsProps<T>} props - The props for the breadcrumbs.
 * @param {string} [props.className] - The class name for the breadcrumbs.
 * @returns {JSX.Element} - The rendered breadcrumbs component.
 */
function Breadcrumbs<T extends object>({
  className,
  ...props
}: AriaBreadcrumbsProps<T>): JSX.Element {
  return (
    <AriaBreadcrumbs
      className={cn(
        'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a single breadcrumb item.
 *
 * @component
 * @param {AriaBreadcrumbProps} props - The props for the breadcrumb item.
 * @param {string} [props.className] - The class name for the breadcrumb item.
 * @returns {JSX.Element} The rendered breadcrumb item.
 */
function BreadcrumbItem({
  className,
  ...props
}: AriaBreadcrumbProps): JSX.Element {
  return (
    <AriaBreadcrumb
      className={cn('inline-flex items-center gap-1.5 sm:gap-2.5', className)}
      {...props}
    />
  );
}

/**
 * Renders a link for a breadcrumb.
 *
 * @component
 * @param {AriaLinkProps} props - The props for the breadcrumb link.
 * @param {string} [props.className] - The class name for the breadcrumb link.
 * @returns {JSX.Element} The rendered breadcrumb link.
 */
function BreadcrumbLink({ className, ...props }: AriaLinkProps): JSX.Element {
  return (
    <AriaLink
      className={composeRenderProps(className, (className) =>
        cn(
          'transition-colors',
          /* Hover */
          'data-[hovered]:text-foreground',
          /* Disabled */
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          /* Current */
          'data-[current]:pointer-events-auto data-[current]:opacity-100',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Renders a separator for breadcrumbs.
 *
 * @component
 * @param {React.ComponentProps<'span'>} props - The props for the breadcrumb separator.
 * @param {string} [props.className] - The class name for the breadcrumb separator.
 * @param {React.ReactNode} [props.children] - The children for the breadcrumb separator.
 * @returns {JSX.Element} The rendered breadcrumb separator.
 */
function BreadcrumbSeparator({
  className,
  children,
  ...props
}: React.ComponentProps<'span'>): JSX.Element {
  return (
    <span
      aria-hidden
      className={cn('[&>svg]:size-3.5', className)}
      role="presentation"
      {...props}
    >
      {children ?? <Icons.ChevronRight />}
    </span>
  );
}

/**
 * Renders a breadcrumb ellipsis component.
 *
 * @component
 * @param {React.ComponentProps<'span'>} props - The component props.
 * @param {string} [props.className] - The class name for the component.
 * @returns {JSX.Element} The rendered breadcrumb ellipsis component.
 */
function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>): JSX.Element {
  return (
    <span
      aria-hidden
      className={cn('flex size-9 items-center justify-center', className)}
      role="presentation"
      {...props}
    >
      <Icons.MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

/**
 * Props for the BreadcrumbPage component.
 */
type BreadcrumbPageProps = {} & Omit<AriaLinkProps, 'href'>;

/**
 * Renders a breadcrumb page component.
 *
 * @component
 * @param {BreadcrumbPageProps} props - The props for the breadcrumb page component.
 * @param {string} [props.className] - The class name for the breadcrumb page component.
 * @returns {JSX.Element} The rendered breadcrumb page component.
 */
function BreadcrumbPage({
  className,
  ...props
}: BreadcrumbPageProps): JSX.Element {
  return (
    <AriaLink
      className={composeRenderProps(className, (className) =>
        cn('font-normal text-foreground', className),
      )}
      {...props}
    />
  );
}

export type { BreadcrumbPageProps };
export {
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  Breadcrumbs,
  BreadcrumbSeparator,
};
