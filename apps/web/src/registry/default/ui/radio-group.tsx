'use client';

import {
  composeRenderProps,
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  type RadioGroupProps as AriaRadioGroupProps,
  type RadioProps as AriaRadioProps,
  Text,
  type ValidationResult as AriaValidationResult,
} from 'react-aria-components';

import { cn } from '~/libs/utils';

import { FieldError, Label, labelVariants } from './field';
import { Icons } from './icons';

/**
 * Renders a radio group component.
 *
 * @component
 * @param {AriaRadioGroupProps} props - The component props.
 * @param {string} [props.className] - The class name for the radio group.
 * @param {'horizontal' | 'vertical'} [props.orientation='vertical'] - The orientation of the radio group.
 * @returns {JSX.Element} The rendered radio group component.
 */
function RadioGroup({
  className,
  orientation = 'vertical',
  ...props
}: AriaRadioGroupProps): JSX.Element {
  return (
    <AriaRadioGroup
      className={composeRenderProps(className, (className) =>
        cn(
          {
            'grid gap-2': orientation === 'vertical',
            'flex items-center gap-2': orientation === 'horizontal',
          },
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Renders a radio button component.
 *
 * @component
 * @param {AriaRadioProps} props - The component props.
 * @param {string} [props.className] - The class name for the radio button.
 * @param {React.ReactNode} [props.children] - The children of the radio button.
 * @returns {JSX.Element} The rendered radio button component.
 */
function Radio({ className, children, ...props }: AriaRadioProps): JSX.Element {
  return (
    <AriaRadio
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
          <span
            className={cn(
              'dev-grove-Radio flex aspect-square size-4 items-center justify-center rounded-full border border-primary text-primary ring-offset-background',
              /* Focus */
              'group-data-[focused]:outline-none',
              /* Focus Visible */
              'group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-ring group-data-[focus-visible]:ring-offset-2',
              /* Disabled */
              'group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-50',
              /* Invalid */
              'group-data-[invalid]:border-destructive',
            )}
          >
            {renderProps.isSelected && (
              <Icons.Circle className="size-2.5 fill-current text-current" />
            )}
          </span>
          {children}
        </>
      ))}
    </AriaRadio>
  );
}

/**
 * Props for the GroveRadioGroup component.
 *
 * @typedef {Object} GroveRadioGroupProps
 * @property {string} [label] - The label for the radio group.
 * @property {string} [description] - The description for the radio group.
 * @property {string | ((validation: AriaValidationResult) => string)} [errorMessage] - The error message for the radio group.
 * @property {AriaRadioGroupProps} [AriaRadioGroupProps] - Additional props for the radio group.
 */
type GroveRadioGroupProps = {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
} & AriaRadioGroupProps;

/**
 * Renders a radio group component with optional label, description, className, errorMessage, and children.
 *
 * @component
 * @param {GroveRadioGroupProps} props - The props for the GroveRadioGroup component.
 * @param {string} [props.className] - The class name for the GroveRadioGroup component.
 * @param {string} [props.label] - The label for the GroveRadioGroup component.
 * @param {string} [props.description] - The description for the GroveRadioGroup component.
 * @param {string} [props.errorMessage] - The error message for the GroveRadioGroup component.
 * @param {React.ReactNode} [props.children] - The children of the GroveRadioGroup component.
 * @returns {JSX.Element} The rendered GroveRadioGroup component.
 */
function GroveRadioGroup({
  className,
  label,
  description,
  errorMessage,
  children,
  ...props
}: GroveRadioGroupProps): JSX.Element {
  return (
    <RadioGroup
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
    </RadioGroup>
  );
}

export type { GroveRadioGroupProps };
export { GroveRadioGroup, Radio, RadioGroup };
