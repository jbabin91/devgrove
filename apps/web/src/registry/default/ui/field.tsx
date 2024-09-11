'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import {
  composeRenderProps,
  FieldError as AriaFieldError,
  type FieldErrorProps as AriaFieldErrorProps,
  Group as AriaGroup,
  type GroupProps as AriaGroupProps,
  Label as AriaLabel,
  type LabelProps as AriaLabelProps,
  Text as AriaText,
  type TextProps as AriaTextProps,
} from 'react-aria-components';

import { cn } from '~/libs/utils';

/**
 * Represents the variants for the label in the field component.
 * @remarks
 * The label variants can include the following classes:
 * - 'text-sm font-medium leading-none'
 * - 'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70' (for disabled state)
 * - 'group-data-[invalid]:text-destructive' (for invalid state)
 */
const labelVariants = cva([
  'text-sm font-medium leading-none',
  /* Disabled */
  'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70',
  /* Invalid */
  'group-data-[invalid]:text-destructive',
]);

/**
 * Renders a label component.
 *
 * @component
 * @param {AriaLabelProps} props - The props object.
 * @param {string} [props.className] - The class name for the label component.
 * @returns {JSX.Element} The rendered label component.
 */
function Label({ className, ...props }: AriaLabelProps): JSX.Element {
  return <AriaLabel className={cn(labelVariants(), className)} {...props} />;
}

/**
 * Renders a form description component.
 *
 * @component
 * @param {AriaTextProps} props - The props for the form description.
 * @param {string} [props.className] - The class name for the form description component.
 * @returns {JSX.Element} The rendered form description component.
 */
function FormDescription({ className, ...props }: AriaTextProps): JSX.Element {
  return (
    <AriaText
      className={cn('text-sm text-muted-foreground', className)}
      slot="description"
      {...props}
    />
  );
}

/**
 * Renders a field error component.
 *
 * @component
 * @param {AriaFieldErrorProps} props - The props for the FieldError component.
 * @param {string} [props.className] - The class name for the FieldError component.
 * @returns {JSX.Element} The rendered FieldError component.
 */
function FieldError({ className, ...props }: AriaFieldErrorProps): JSX.Element {
  return (
    <AriaFieldError
      className={cn('text-sm font-medium text-destructive', className)}
      {...props}
    />
  );
}

/**
 * Represents the variants for the field group.
 */
const fieldGroupVariants = cva('', {
  variants: {
    variant: {
      default: [
        'relative flex h-10 w-full items-center overflow-hidden rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
        /* Focus Within */
        'data-[focus-within]:outline-none data-[focus-within]:ring-2 data-[focus-within]:ring-ring data-[focus-within]:ring-offset-2',
        /* Disabled */
        'data-[disabled]:opacity-50',
      ],
      ghost: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

/**
 * Represents the props for a group of fields.
 *
 * @remarks
 * This type extends `AriaGroupProps` and `VariantProps<typeof fieldGroupVariants>`.
 */
type GroupProps = {} & AriaGroupProps & VariantProps<typeof fieldGroupVariants>;

/**
 * Renders a group of fields.
 *
 * @component
 * @param {GroupProps} props - The props for the field group.
 * @param {string} [props.className] - The class name for the field group.
 * @param {string} [props.variant] - The variant for the field group.
 * @returns {JSX.Element} The rendered field group.
 */
function FieldGroup({ className, variant, ...props }: GroupProps): JSX.Element {
  return (
    <AriaGroup
      className={composeRenderProps(className, (className) =>
        cn(fieldGroupVariants({ variant }), className),
      )}
      {...props}
    />
  );
}

export type { GroupProps };
export {
  FieldError,
  FieldGroup,
  fieldGroupVariants,
  FormDescription,
  Label,
  labelVariants,
};
