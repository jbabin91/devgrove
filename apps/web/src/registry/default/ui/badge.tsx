import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

/**
 * Represents the configuration options for the badge variants.
 *
 * @typedef {Object} BadgeVariants
 * @property {string} default - The default variant style.
 * @property {string} secondary - The secondary variant style.
 * @property {string} destructive - The destructive variant style.
 * @property {string} outline - The outline variant style.
 */
const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

/**
 * Represents the props for the Badge component.
 */
type BadgeProps = {} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

/**
 * Renders a badge component with the specified variant and children.
 *
 * @param {BadgeProps} props - The props for the Badge component.
 * @param {string} [props.className] - The CSS class name for the badge.
 * @param {string} [props.variant] - The variant of the badge.
 * @param {React.ReactNode} [props.children] - The children to be rendered inside the badge.
 * @returns {JSX.Element} The rendered Badge component.
 */
function Badge({
  className,
  variant,
  children,
  ...props
}: BadgeProps): JSX.Element {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
}

export type { BadgeProps };
export { Badge, badgeVariants };
