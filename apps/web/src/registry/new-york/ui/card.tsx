import { cn } from '@/lib/utils';

/**
 * Represents the props for a Card component.
 */
type CardProps = {} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Renders a card component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.className] - The class name for the card component.
 * @param {React.ReactNode} [props.children] - The content to be rendered inside the card component.
 * @returns {JSX.Element} The rendered card component.
 */
function Card({ className, children, ...props }: CardProps): JSX.Element {
  return (
    <div
      className={cn(
        'rounded-xl border bg-card text-card-foreground shadow',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Props for the CardHeader component.
 */
type CardHeaderProps = {} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Renders the header for a card component.
 *
 * @param {CardHeaderProps} props - The properties for the CardHeader component.
 * @param {string} [props.className] - The CSS class name for the card header.
 * @param {React.ReactNode} [props.children] - The children elements to be rendered within the card header.
 * @returns {JSX.Element} The rendered card header.
 */
function CardHeader({
  className,
  children,
  ...props
}: CardHeaderProps): JSX.Element {
  return (
    <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Props for the CardTitle component.
 */
type CardTitleProps = {} & React.HTMLAttributes<HTMLHeadingElement>;

/**
 * Renders a title for a card component.
 *
 * @component
 * @param {Object} props - The properties of the CardTitle component.
 * @param {string} [props.className] - The CSS class name for the title.
 * @param {React.ReactNode} [props.children] - The content of the title.
 * @returns {JSX.Element} The rendered title element.
 */
function CardTitle({
  className,
  children,
  ...props
}: CardTitleProps): JSX.Element {
  return (
    <h3
      className={cn('font-semibold leading-none tracking-tight', className)}
      {...props}
    >
      {children}
    </h3>
  );
}

/**
 * Props for the CardDescription component.
 */
type CardDescriptionProps = {} & React.HTMLAttributes<HTMLParagraphElement>;

/**
 * Renders a description for a card.
 *
 * @component
 * @param {CardDescriptionProps} props - The props for the CardDescription component.
 * @param {string} [props.className] - The class name for the component.
 * @param {React.ReactNode} [props.children] - The content to be rendered inside the component.
 * @returns {JSX.Element} The rendered CardDescription component.
 */
function CardDescription({
  className,
  children,
  ...props
}: CardDescriptionProps): JSX.Element {
  return (
    <p className={cn('text-sm text-muted-foreground', className)} {...props}>
      {children}
    </p>
  );
}

/**
 * Props for the CardContent component.
 */
type CardContentProps = {} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Renders the content of a card.
 *
 * @component
 * @param {CardContentProps} props - The component props.
 * @param {string} [props.className] - The CSS class name for the card content.
 * @param {ReactNode} [props.children] - The content to be rendered inside the card.
 * @returns {JSX.Element} The rendered card content.
 */
function CardContent({
  className,
  children,
  ...props
}: CardContentProps): JSX.Element {
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Props for the CardFooter component.
 */
type CardFooterProps = {} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Represents the footer component of a card.
 *
 * @component
 * @param {CardFooterProps} props - The properties of the CardFooter component.
 * @param {string} [props.className] - The CSS class name for the component.
 * @param {React.ReactNode} [props.children] - The content of the component.
 * @returns {JSX.Element} The rendered CardFooter component.
 */
function CardFooter({
  className,
  children,
  ...props
}: CardFooterProps): JSX.Element {
  return (
    <div className={cn('flex items-center p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
}

export type {
  CardContentProps,
  CardDescriptionProps,
  CardFooterProps,
  CardHeaderProps,
  CardProps,
  CardTitleProps,
};
export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
