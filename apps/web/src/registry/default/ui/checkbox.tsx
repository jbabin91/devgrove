'use client';

import { Check, Minus } from 'lucide-react';
import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  type CheckboxGroupProps as AriaCheckboxGroupProps,
  type CheckboxProps as AriaCheckboxProps,
  composeRenderProps,
  FieldError,
  Label,
  Text,
  type ValidationResult as AriaValidationResult,
} from 'react-aria-components';

import { cn } from '~/lib/utils';

import { labelVariants } from './field';

/**
 * Represents a checkbox group component.
 */
const CheckboxGroup = AriaCheckboxGroup;

/**
 * Renders a checkbox component.
 *
 * @component
 * @param {AriaCheckboxProps} props - The props for the checkbox component.
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
          <div>
            {renderProps.isIndeterminate ? (
              <Minus className="size-4" />
            ) : renderProps.isSelected ? (
              <Check className="size-4" />
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
 * @example
 * ```tsx
 * <GroveCheckboxGroup
 *   label="Fruits"
 *   description="Select your favorite fruits"
 *   errorMessage="Please select at least one fruit"
 * >
 *   <Checkbox value="apple">Apple</Checkbox>
 *   <Checkbox value="banana">Banana</Checkbox>
 *   <Checkbox value="orange">Orange</Checkbox>
 * </GroveCheckboxGroup>
 * ```
 */
function GroveCheckboxGroup({
  label,
  description,
  errorMessage,
  className,
  children,
  ...props
}: GroveCheckboxGroupProps) {
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
            <Text className="text-muted-foreground text-sm" slot="description">
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
