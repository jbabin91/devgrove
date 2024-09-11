'use client';

import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  composeRenderProps,
  Group as AriaGroup,
  type GroupProps as AriaGroupProps,
  Input as AriaInput,
  type InputProps as AriaInputProps,
  SearchField as AriaSearchField,
  type SearchFieldProps as AriaSearchFieldProps,
  Text,
  type ValidationResult as AriaValidationResult,
} from 'react-aria-components';

import { cn } from '~/libs/utils';

import { FieldError, FieldGroup, Label } from './field';
import { Icons } from './icons';

/**
 * Renders a search field component.
 *
 * @component
 * @param {AriaSearchFieldProps} props - The props for the search field.
 * @param {string} [props.className] - The class name for the search field.
 * @returns {JSX.Element} The rendered search field component.
 */
function SearchField({
  className,
  ...props
}: AriaSearchFieldProps): JSX.Element {
  return (
    <AriaSearchField
      className={composeRenderProps(className, (className) =>
        cn('group', className),
      )}
      {...props}
    />
  );
}

/**
 * Renders a search field input component.
 *
 * @component
 * @param {AriaInputProps} props - The input props.
 * @param {string} [props.className] - The class name for the search field input.
 * @returns {JSX.Element} The rendered search field input component.
 */
function SearchFieldInput({
  className,
  ...props
}: AriaInputProps): JSX.Element {
  return (
    <AriaInput
      className={composeRenderProps(className, (className) =>
        cn(
          'min-w-0 flex-1 bg-background px-2 py-1.5 outline outline-0 placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Renders a search field group component.
 *
 * @component
 * @param {AriaGroupProps} props - The component props.
 * @param {string} [props.className] - The class name for the component.
 * @returns {JSX.Element} The rendered search field group component.
 */
function SearchFieldGroup({
  className,
  ...props
}: AriaGroupProps): JSX.Element {
  return (
    <AriaGroup
      className={composeRenderProps(className, (className) =>
        cn(
          'flex h-10 w-full items-center overflow-hidden rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
          /* Focus Within */
          'data-[focus-within]:outline-none data-[focus-within]:ring-2 data-[focus-within]:ring-ring data-[focus-within]:ring-offset-2',
          /* Disabled */
          'data-[disabled]:opacity-50',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Renders a clear button for a search field.
 *
 * @component
 * @param {AriaButtonProps} props - The props for the clear button.
 * @param {string} [props.className] - The class name for the clear button.
 * @returns {JSX.Element} - The rendered clear button.
 */
function SearchFieldClear({
  className,
  ...props
}: AriaButtonProps): JSX.Element {
  return (
    <AriaButton
      className={composeRenderProps(className, (className) =>
        cn(
          'mr-1 rounded-sm opacity-70 ring-offset-background transition-opacity',
          /* Hover */
          'data-[hovered]:opacity-100',
          /* Disabled */
          'data-[disabled]:pointer-events-none',
          /* Empty */
          'group-data-[empty]:invisible',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Props for the GroveSearchField component.
 *
 * @typedef {Object} GroveSearchFieldProps
 * @property {string} [label] - The label for the search field.
 * @property {string} [description] - The description for the search field.
 * @property {(string | ((validation: AriaValidationResult) => string))} [errorMessage] - The error message for the search field.
 * @property {AriaSearchFieldProps} - Additional props for the search field.
 */
type GroveSearchFieldProps = {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
} & AriaSearchFieldProps;

/**
 * Renders a search field component with optional label, description, and error message.
 *
 * @component
 * @param {GroveSearchFieldProps} props - The props for the GroveSearchField component.
 * @param {string} [props.className] - The class name for the GroveSearchField component.
 * @param {string} [props.label] - The label for the GroveSearchField component.
 * @param {string} [props.description] - The description for the GroveSearchField component.
 * @param {string} [props.errorMessage] - The error message for the GroveSearchField component.
 * @returns {JSX.Element} The rendered GroveSearchField component.
 */
function GroveSearchField({
  className,
  label,
  description,
  errorMessage,
  ...props
}: GroveSearchFieldProps): JSX.Element {
  return (
    <SearchField
      className={composeRenderProps(className, (className) =>
        cn('group flex flex-col gap-2', className),
      )}
      {...props}
    >
      <Label>{label}</Label>
      <FieldGroup>
        <Icons.Search aria-hidden className="size-4 text-muted-foreground" />
        <SearchFieldInput placeholder="Search..." />
        <SearchFieldClear>
          <Icons.Close aria-hidden className="size-4" />
        </SearchFieldClear>
      </FieldGroup>
      {description && (
        <Text className="text-sm text-muted-foreground" slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </SearchField>
  );
}

export type { GroveSearchFieldProps };
export {
  GroveSearchField,
  SearchField,
  SearchFieldClear,
  SearchFieldGroup,
  SearchFieldInput,
};
