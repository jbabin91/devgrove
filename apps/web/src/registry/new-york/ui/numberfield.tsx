'use client';

import {
  type ButtonProps as AriaButtonProps,
  composeRenderProps,
  Input as AriaInput,
  type InputProps as AriaInputProps,
  NumberField as AriaNumberField,
  type NumberFieldProps as AriaNumberFieldProps,
  Text,
  type ValidationResult as AriaValidationResult,
} from 'react-aria-components';

import { cn } from '~/lib/utils';

import { Button } from './button';
import { FieldError, FieldGroup, Label } from './field';
import { Icons } from './icons';

/**
 * A custom number field component.
 */
const NumberField = AriaNumberField;

/**
 * Renders a number input field.
 *
 * @component
 * @param {AriaInputProps} props - The input props.
 * @param {string} [props.className] - The class name for the input field.
 * @returns {JSX.Element} - The rendered number input field.
 */
function NumberFieldInput({
  className,
  ...props
}: AriaInputProps): JSX.Element {
  return (
    <AriaInput
      className={composeRenderProps(className, (className) =>
        cn(
          'w-fit min-w-0 flex-1 border-r border-transparent bg-background pr-2 outline outline-0 placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Renders a set of steppers for a number field.
 *
 * @component
 * @param {React.ComponentProps<'div'>} props - The component props.
 * @param {string} [props.className] - The class name for the component.
 * @returns {JSX.Element} The rendered component.
 */
function NumberFieldSteppers({
  className,
  ...props
}: React.ComponentProps<'div'>): JSX.Element {
  return (
    <div
      className={cn(
        'absolute right-0 flex h-full flex-col border-l',
        className,
      )}
      {...props}
    >
      <NumberFieldStepper slot="increment">
        <Icons.CaretUp aria-hidden className="size-4" />
      </NumberFieldStepper>
      <div className="border-b" />
      <NumberFieldStepper slot="decrement">
        <Icons.CaretDown aria-hidden className="size-4" />
      </NumberFieldStepper>
    </div>
  );
}

/**
 * Renders a stepper button for a number field.
 *
 * @component
 * @param {AriaButtonProps} props - The button props.
 * @param {string} [props.className] - The class name for the button.
 * @returns {JSX.Element} The rendered component.
 */
function NumberFieldStepper({
  className,
  ...props
}: AriaButtonProps): JSX.Element {
  return (
    <Button
      className={composeRenderProps(className, (className) =>
        cn('w-auto grow rounded-none px-0.5 text-muted-foreground', className),
      )}
      size={'icon'}
      variant={'ghost'}
      {...props}
    />
  );
}

/**
 * Props for the GroveNumberField component.
 *
 * @typedef {Object} GroveNumberFieldProps
 * @property {string} [label] - The label for the number field.
 * @property {string} [description] - The description for the number field.
 * @property {(string | ((validation: AriaValidationResult) => string))} [errorMessage] - The error message for the number field.
 * @property {AriaNumberFieldProps} [AriaNumberFieldProps] - Additional props for the AriaNumberField component.
 */
type GroveNumberFieldProps = {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
} & AriaNumberFieldProps;

/**
 * Renders a GroveNumberField component.
 *
 * @component
 * @param {GroveNumberFieldProps} props - The props for the GroveNumberField component.
 * @param {string} [props.label] - The label for the number field.
 * @param {string} [props.description] - The description for the number field.
 * @param {(string | ((validation: AriaValidationResult) => string))} [props.errorMessage] - The error message for the number field.
 * @param {string} [props.className] - The class name for the number field.
 * @returns {JSX.Element} The rendered GroveNumberField component.
 */
function GroveNumberField({
  label,
  description,
  errorMessage,
  className,
  ...props
}: GroveNumberFieldProps): JSX.Element {
  return (
    <NumberField
      className={composeRenderProps(className, (className) =>
        cn('group flex flex-col gap-2', className),
      )}
      {...props}
    >
      <Label>{label}</Label>
      <FieldGroup>
        <NumberFieldInput />
        <NumberFieldSteppers />
      </FieldGroup>
      {description && (
        <Text className="text-sm text-muted-foreground" slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </NumberField>
  );
}

export type { GroveNumberFieldProps };
export {
  GroveNumberField,
  NumberField,
  NumberFieldInput,
  NumberFieldStepper,
  NumberFieldSteppers,
};