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

import { cn } from '~/lib/utils';

import { FieldError, Label, labelVariants } from './field';
import { Icons } from './icons';

/**
 * Renders a radio group component.
 *
 * @component
 * @param {GroveRadioGroupProps} props - The props for the GroveRadioGroup component.
 * @param {string} [props.className] - The class name for the radio group component.
 * @param {string} [props.orientation='vertical'] - The orientation of the radio group. Can be 'vertical' or 'horizontal'.
 * @returns {JSX.Element} The rendered GroveRadioGroup component.
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
 * @param {AriaRadioProps} props - Additional props for the radio button.
 * @param {string} [props.className] - The class name for the radio button.
 * @param {React.ReactNode} [props.children] - The children elements for the radio button.
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
              'flex aspect-square size-4 items-center justify-center rounded-full border border-primary text-primary shadow',
              /* Focus */
              'group-data-[focused]:outline-none',
              /* Focus Visible */
              'group-data-[focus-visible]:ring-1 group-data-[focus-visible]:ring-ring',
              /* Disabled */
              'group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-50',
              /* Invalid */
              'group-data-[invalid]:border-destructive',
            )}
          >
            {renderProps.isSelected && (
              <Icons.Check className="size-3.5 fill-primary" />
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
 * @property {AriaRadioGroupProps} [AriaRadioGroupProps] - Additional props for the AriaRadioGroup component.
 */
type GroveRadioGroupProps = {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
} & AriaRadioGroupProps;

/**
 * Renders a radio group component.
 *
 * @component
 * @param {GroveRadioGroupProps} props - The props for the radio group component.
 * @param {string} [props.label] - The label for the radio group component.
 * @param {string} [props.description] - The description for the radio group component.
 * @param {string | ((validation: AriaValidationResult) => string)} [props.errorMessage] - The error message for the radio group component.
 * @param {string} [props.className] - The class name for the radio group component.
 * @param {React.ReactNode} [props.children] - The children elements for the radio group component.
 * @returns {JSX.Element} The rendered radio group component.
 */
function GroveRadioGroup({
  label,
  description,
  className,
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
