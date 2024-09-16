'use client';

import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  type CheckboxGroupProps as AriaCheckboxGroupProps,
  type CheckboxProps as AriaCheckboxProps,
  composeRenderProps,
  Text,
  type ValidationResult as AriaValidationResult,
} from 'react-aria-components';

import { cn } from '@/libs/utils';

import { FieldError, Label, labelVariants } from './field';
import { Icons } from './icons';

/**
 * Represents a checkbox group component.
 */
const CheckboxGroup = AriaCheckboxGroup;

/**
 * Renders a checkbox component.
 *
 * @component
 * @param {AriaCheckboxProps} props - The props for the checkbox component.
 * @param {string} [props.className] - The class name for the checkbox component.
 * @param {React.ReactNode} [props.children] - The children for the checkbox component.
 * @returns {JSX.Element} The rendered checkbox component.
 */
function Checkbox({
  className,
  children,
  ...props
}: AriaCheckboxProps): JSX.Element {
  return (
    <AriaCheckbox
      className={composeRenderProps(className, (className) =>
        cn(
          'group flex items-center gap-x-2',
          /* Disabled */
          'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70',
          labelVariants,
          className,
        ),
      )}
      {...props}
    >
      {composeRenderProps(children, (children, renderProps) => (
        <>
          <div
            className={cn(
              'flex size-4 shrink-0 items-center justify-center rounded-sm border border-primary text-current ring-offset-background',
              /* Focus Visible */
              'group-data-[focus-visible]:outline-none group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-ring group-data-[focus-visible]:ring-offset-2',
              /* Selected */
              'group-data-[indeterminate]:bg-primary group-data-[selected]:bg-primary group-data-[indeterminate]:text-primary-foreground  group-data-[selected]:text-primary-foreground',
              /* Disabled */
              'group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-50',
              /* Invalid */
              'group-data-[invalid]:border-destructive group-data-[invalid]:group-data-[selected]:bg-destructive group-data-[invalid]:group-data-[selected]:text-destructive-foreground',
              /* Resets */
              'focus-visible:outline-none',
            )}
          >
            {renderProps.isIndeterminate ? (
              <Icons.Minus className="size-4" />
            ) : renderProps.isSelected ? (
              <Icons.Check className="size-4" />
            ) : null}
          </div>
          {children}
        </>
      ))}
    </AriaCheckbox>
  );
}

/**
 * Props for the GroveCheckboxGroup component.
 *
 * @typedef {Object} GroveCheckboxGroupProps
 * @property {string} [label] - The label for the checkbox group.
 * @property {string} [description] - The description for the checkbox group.
 * @property {string | ((validation: AriaValidationResult) => string)} [errorMessage] - The error message for the checkbox group.
 * @property {AriaCheckboxGroupProps} [AriaCheckboxGroupProps] - Additional props for the AriaCheckboxGroup component.
 */
type GroveCheckboxGroupProps = {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
} & AriaCheckboxGroupProps;

/**
 * Renders a group of checkboxes with a label, description, and error message.
 *
 * @component
 * @param {GroveCheckboxGroupProps} props - The props for the GroveCheckboxGroup component.
 * @param {string} [props.className] - The class name for the checkbox group.
 * @param {string} [props.label] - The label for the checkbox group.
 * @param {string} [props.description] - The description for the checkbox group.
 * @param {string | ((validation: AriaValidationResult) => string)} [props.errorMessage] - The error message for the checkbox group.
 * @param {React.ReactNode} [props.children] - The children for the checkbox group.
 * @returns {JSX.Element} The rendered checkbox group component.
 */
function GroveCheckboxGroup({
  className,
  label,
  description,
  errorMessage,
  children,
  ...props
}: GroveCheckboxGroupProps): JSX.Element {
  return (
    <CheckboxGroup
      className={composeRenderProps(className, (className) =>
        cn('group flex flex-col gap-2', className),
      )}
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          <Label>{label}</Label>
          {children}
          {description && (
            <Text className="text-sm text-muted-foreground" slot="description">
              {description}
            </Text>
          )}
          <FieldError>{errorMessage}</FieldError>
        </>
      ))}
    </CheckboxGroup>
  );
}

export type { GroveCheckboxGroupProps };
export { Checkbox, CheckboxGroup, GroveCheckboxGroup };
