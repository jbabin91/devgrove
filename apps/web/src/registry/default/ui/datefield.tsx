'use client';

import { type VariantProps } from 'class-variance-authority';
import {
  composeRenderProps,
  DateField as AriaDateField,
  type DateFieldProps as AriaDateFieldProps,
  DateInput as AriaDateInput,
  type DateInputProps as AriaDateInputProps,
  DateSegment as AriaDateSegment,
  type DateSegmentProps as AriaDateSegmentProps,
  type DateValue as AriaDateValue,
  Text,
  TimeField as AriaTimeField,
  type TimeFieldProps as AriaTimeFieldProps,
  type TimeValue as AriaTimeValue,
  type ValidationResult as AriaValidationResult,
} from 'react-aria-components';

import { cn } from '~/lib/utils';

import { FieldError, fieldGroupVariants, Label } from './field';

/**
 * A custom date field component.
 */
const DateField = AriaDateField;

/**
 * Represents a time field component.
 */
const TimeField = AriaTimeField;

/**
 * Renders a date segment component.
 *
 * @component
 * @param {AriaDateSegmentProps} props - The props for the component.
 * @param {string} [props.className] - The CSS class name for the component.
 * @returns {JSX.Element} The rendered DateSegment component.
 */
function DateSegment({
  className,
  ...props
}: AriaDateSegmentProps): JSX.Element {
  return (
    <AriaDateSegment
      className={composeRenderProps(className, (className) =>
        cn(
          'type-literal:px-0 inline rounded p-0.5 caret-transparent outline outline-0',
          /* Placeholder */
          'data-[placeholder]:text-muted-foreground',
          /* Disabled */
          'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
          /* Focused */
          'data-[focused]:bg-accent data-[focused]:text-accent-foreground',
          /* Invalid */
          'data-[invalid]:data-[focused]:bg-destructive data-[invalid]:data-[focused]:data-[placeholder]:text-destructive-foreground data-[invalid]:data-[focused]:text-destructive-foreground data-[invalid]:data-[placeholder]:text-destructive data-[invalid]:text-destructive',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Represents the props for the DateInput component.
 */
type DateInputProps = {} & AriaDateInputProps &
  VariantProps<typeof fieldGroupVariants>;

/**
 * Renders a date input component.
 *
 * @component
 * @param {DateInputProps} props - The props for the DateInput component.
 * @param {string} [props.className] - The CSS class name for the component.
 * @param {string} [props.variant] - The variant for the component.
 * @returns {JSX.Element} The rendered DateInput component.
 */
function DateInput({
  className,
  variant,
  ...props
}: Omit<DateInputProps, 'children'>): JSX.Element {
  return (
    <AriaDateInput
      className={composeRenderProps(className, (className) =>
        cn(fieldGroupVariants({ variant }), 'text-sm', className),
      )}
      {...props}
    >
      {(segment) => <DateSegment segment={segment} />}
    </AriaDateInput>
  );
}

/**
 * Props for the GroveDateField component.
 *
 * @template T - The type of the date value.
 * @property {string} [label] - The label for the date field.
 * @property {string} [description] - The description for the date field.
 * @property {string | ((validation: AriaValidationResult) => string)} [errorMessage] - The error message for the date field.
 * @extends {AriaDateFieldProps<T>} - The props inherited from AriaDateFieldProps.
 */
type GroveDateFieldProps<T extends AriaDateValue> = {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
} & AriaDateFieldProps<T>;

/**
 * Renders a GroveDateField component.
 *
 * @component
 * @template T - The type of the AriaDateValue.
 * @param {GroveDateFieldProps<T>} props - The props for the GroveDateField component.
 * @param {string} [props.className] - The class name for the GroveDateField component.
 * @param {string} [props.label] - The label for the GroveDateField component.
 * @param {string} [props.description] - The description for the GroveDateField component.
 * @param {string | ((validation: AriaValidationResult) => string)} [props.errorMessage] - The error message for the GroveDateField component.
 * @returns {JSX.Element} - The rendered GroveDateField component.
 */
function GroveDateField<T extends AriaDateValue>({
  className,
  label,
  description,
  errorMessage,
  ...props
}: GroveDateFieldProps<T>): JSX.Element {
  return (
    <DateField
      className={composeRenderProps(className, (className) =>
        cn('group flex flex-col gap-2', className),
      )}
      {...props}
    >
      <Label>{label}</Label>
      <DateInput />
      {description && (
        <Text className="text-sm text-muted-foreground" slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </DateField>
  );
}

/**
 * Props for the GroveTimeField component.
 *
 * @template T - The type of the time value.
 * @property {string} [label] - The label for the time field.
 * @property {string} [description] - The description for the time field.
 * @property {string | ((validation: AriaValidationResult) => string)} [errorMessage] - The error message for the time field.
 * @extends AriaTimeFieldProps<T>
 */
type GroveTimeFieldProps<T extends AriaTimeValue> = {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
} & AriaTimeFieldProps<T>;

/**
 * Renders a time field component.
 *
 * @component
 * @template T - The type of the AriaTimeValue.
 * @param {GroveTimeFieldProps<T>} props - The props for the GroveTimeField component.
 * @param {string} [props.className] - The class name for the GroveTimeField component.
 * @param {string} [props.label] - The label for the GroveTimeField component.
 * @param {string} [props.description] - The description for the GroveTimeField component.
 * @param {string | ((validation: AriaValidationResult) => string)} [props.errorMessage] - The error message for the GroveTimeField component.
 * @returns {JSX.Element} - The rendered GroveTimeField component.
 */
function GroveTimeField<T extends AriaTimeValue>({
  className,
  label,
  description,
  errorMessage,
  ...props
}: GroveTimeFieldProps<T>): JSX.Element {
  return (
    <TimeField
      className={composeRenderProps(className, (className) =>
        cn('group flex flex-col gap-2', className),
      )}
      {...props}
    >
      <Label>{label}</Label>
      <DateInput />
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </TimeField>
  );
}

export type { DateInputProps, GroveDateFieldProps, GroveTimeFieldProps };
export {
  DateField,
  DateInput,
  DateSegment,
  GroveDateField,
  GroveTimeField,
  TimeField,
};
