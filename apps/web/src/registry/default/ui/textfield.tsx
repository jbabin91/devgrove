'use client';

import {
  composeRenderProps,
  Input as AriaInput,
  type InputProps as AriaInputProps,
  Text,
  TextArea as AriaTextArea,
  type TextAreaProps as AriaTextAreaProps,
  TextField as AriaTextField,
  type TextFieldProps as AriaTextFieldProps,
  type ValidationResult as AriaValidationResult,
} from 'react-aria-components';

import { cn } from '~/lib/utils';

import { FieldError, Label } from './field';

/**
 * Represents a text field component.
 */
const TextField = AriaTextField;

/**
 * Renders an input component.
 *
 * @component
 * @param {AriaInputProps} props - The input component props.
 * @returns {JSX.Element} The rendered input component.
 */
function Input({ className, ...props }: AriaInputProps): JSX.Element {
  return (
    <AriaInput
      className={composeRenderProps(className, (className) =>
        cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground',
          /* Disabled */
          'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
          /* Focused */
          'data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2',
          /* Resets */
          'focus-visible:outline-none',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Renders a TextArea component.
 *
 * @component
 * @param {AriaTextAreaProps} props - The props for the TextArea component.
 * @param {string} props.className - The class name for the TextArea component.
 * @returns {JSX.Element} The rendered TextArea component.
 */
function TextArea({ className, ...props }: AriaTextAreaProps): JSX.Element {
  return (
    <AriaTextArea
      className={composeRenderProps(className, (className) =>
        cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground',
          /* Focused */
          'data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2',
          /* Disabled */
          'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
          /* Resets */
          'focus-visible:outline-none',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Props for the GroveTextField component.
 *
 * @typedef {Object} GroveTextFieldProps
 * @property {string} [label] - The label for the text field.
 * @property {string} [description] - The description for the text field.
 * @property {string | ((validation: AriaValidationResult) => string)} [errorMessage] - The error message for the text field.
 * @property {boolean} [textArea] - Indicates whether the text field is a textarea.
 * @property {AriaTextFieldProps} [AriaTextFieldProps] - Additional props for the AriaTextField component.
 */
type GroveTextFieldProps = {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
  textArea?: boolean;
} & AriaTextFieldProps;

/**
 * Renders a GroveTextField component.
 *
 * @component
 * @example
 * @param {GroveTextFieldProps} props - The props for the GroveTextField component.
 * @param {string} props.label - The label for the text field.
 * @param {string} props.description - The description for the text field.
 * @param {string | ((validation: AriaValidationResult) => string)} props.errorMessage - The error message for the text field.
 * @param {boolean} props.textArea - Indicates whether the text field is a textarea.
 * @param {string} props.className - The class name for the text field.
 * @returns {JSX.Element} The rendered GroveTextField component.
 */
function GroveTextField({
  label,
  description,
  errorMessage,
  textArea,
  className,
  ...props
}: GroveTextFieldProps): JSX.Element {
  return (
    <TextField
      className={composeRenderProps(className, (className) =>
        cn('group flex flex-col gap-2', className),
      )}
      {...props}
    >
      <Label>{label}</Label>
      {textArea ? <TextArea /> : <Input />}
      {description && (
        <Text className="text-muted-foreground text-sm" slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </TextField>
  );
}

export type { GroveTextFieldProps };
export { GroveTextField, Input, TextArea, TextField };
