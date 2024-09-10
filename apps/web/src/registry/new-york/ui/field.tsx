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

import { cn } from '~/lib/utils';

/**
 * Represents the variants for the label in the field component.
 * @typedef {string[]} LabelVariants
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
 * @param {Object} props - The props object.
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
 * @param {Object} props - The props for the FormDescription component.
 * @param {string} [props.className] - The class name for the component.
 * @returns {JSX.Element} The rendered FormDescription component.
 */
function FormDescription({ className, ...props }: AriaTextProps): JSX.Element {
  return (
    <AriaText
      className={cn('text-[0.8rem] text-muted-foreground', className)}
      {...props}
      slot="description"
    />
  );
}

/**
 * Renders an error message for a field.
 *
 * @component
 * @param {AriaFieldErrorProps} props - The props for the FieldError component.
 * @param {string} [props.className] - The class name for the error message.
 * @returns {JSX.Element} The rendered FieldError component.
 */
function FieldError({ className, ...props }: AriaFieldErrorProps): JSX.Element {
  return (
    <AriaFieldError
      className={cn('text-[0.8rem] font-medium text-destructive', className)}
      {...props}
    />
  );
}

/**
 * Represents the variants for a field group.
 *
 * @remarks
 * This object defines the different variants that can be applied to a field group.
 * The `variant` property can be set to either `'default'` or `'ghost'`.
 * The `'default'` variant includes a set of CSS classes for styling the field group.
 * The `'ghost'` variant does not include any additional CSS classes.
 *
 * @public
 */
const fieldGroupVariants = cva('', {
  variants: {
    variant: {
      default: [
        'relative flex h-9 w-full items-center overflow-hidden rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors',
        /* Focus Within */
        'data-[focus-within]:outline-none data-[focus-within]:ring-1 data-[focus-within]:ring-ring',
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
 * Represents the props for the Group component.
 *
 * @remarks
 * This object defines the props for the FieldGroup component.
 *
 * @public
 */
type GroupProps = {} & AriaGroupProps & VariantProps<typeof fieldGroupVariants>;

/**
 * Renders a group of fields.
 *
 * @component
 * @param {GroupProps} props - The props for the FieldGroup component.
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
