'use client';

import { ChevronDown } from 'lucide-react';
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  composeRenderProps,
  ListBox as AriaListBox,
  type ListBoxProps as AriaListBoxProps,
  type PopoverProps as AriaPopoverProps,
  Select as AriaSelect,
  type SelectProps as AriaSelectProps,
  SelectValue as AriaSelectValue,
  type SelectValueProps as AriaSelectValueProps,
  Text,
  type ValidationResult as AriaValidationResult,
} from 'react-aria-components';

import { cn } from '~/lib/utils';

import { FieldError, Label } from './field';
import {
  ListBoxCollection,
  ListBoxHeader,
  ListBoxItem,
  ListBoxSection,
} from './list-box';
import { Popover } from './popover';

/**
 * A custom select component.
 */
const Select = AriaSelect;

/**
 * Represents a select item in a list box.
 */
const SelectItem = ListBoxItem;

/**
 * Represents the header component for a select box.
 */
const SelectHeader = ListBoxHeader;

/**
 * Represents a section in a select box.
 */
const SelectSection = ListBoxSection;

/**
 * Represents a collection of items for a select component.
 */
const SelectCollection = ListBoxCollection;

/**
 * Renders the value of a select component.
 *
 * @template T - The type of the select value.
 * @param {AriaSelectValueProps<T>} props - The props for the select value component.
 * @returns {JSX.Element} - The rendered select value component.
 */
function SelectValue<T extends object>({
  className,
  ...props
}: AriaSelectValueProps<T>): JSX.Element {
  return (
    <AriaSelectValue
      className={composeRenderProps(className, (className) =>
        cn(
          'line-clamp-1 data-[placeholder]:text-muted-foreground',
          /* Description */
          '[&>[slot=description]]:hidden',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Renders a select trigger component.
 *
 * @component
 * @param {AriaButtonProps} props - The props for the select trigger.
 * @returns {JSX.Element} The rendered select trigger component.
 */
function SelectTrigger({
  className,
  children,
  ...props
}: AriaButtonProps): JSX.Element {
  return (
    <AriaButton
      className={composeRenderProps(className, (className) =>
        cn(
          'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
          /* Disabled */
          'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
          /* Focused */
          'data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2',
          /* Resets */
          'focus-visible:outline-none',
          className,
        ),
      )}
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          {children}
          <ChevronDown aria-hidden="true" className="size-4 opacity-50" />
        </>
      ))}
    </AriaButton>
  );
}

/**
 * Renders a select popover component.
 *
 * @param className - The class name for the select popover.
 * @param props - Additional props for the select popover.
 *@returns {JSX.Element} The rendered select popover component.
 */
function SelectPopover({ className, ...props }: AriaPopoverProps): JSX.Element {
  return (
    <Popover
      className={composeRenderProps(className, (className) =>
        cn('w-[--trigger-width]', className),
      )}
      {...props}
    />
  );
}

/**
 * Renders a select list box component.
 *
 * @template T - The type of the objects in the list box.
 * @param {AriaListBoxProps<T>} props - The props for the select list box.
 * @returns {JSX.Element} - The rendered select list box component.
 */
function SelectListBox<T extends object>({
  className,
  ...props
}: AriaListBoxProps<T>): JSX.Element {
  return (
    <AriaListBox
      className={composeRenderProps(className, (className) =>
        cn(
          'max-h-[inherit] overflow-auto p-1 outline-none [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Props for the GroveSelect component.
 *
 * @template T - The type of items in the select.
 * @property {string} [label] - The label for the select.
 * @property {string} [description] - The description for the select.
 * @property {string | ((validation: AriaValidationResult) => string)} [errorMessage] - The error message for the select.
 * @property {Iterable<T>} [items] - The items for the select.
 * @property {React.ReactNode | ((item: T) => React.ReactNode)} children - The children for the select.
 */
type GroveSelectProps<T extends object> = {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
} & Omit<AriaSelectProps<T>, 'children'>;

/**
 * Renders a custom select component with Grove styling.
 *
 * @template T - The type of the select items.
 * @param {GroveSelectProps<T>} props - The props for the GroveSelect component.
 * @returns {JSX.Element} - The rendered GroveSelect component.
 */
function GroveSelect<T extends object>({
  label,
  description,
  errorMessage,
  children,
  className,
  items,
  ...props
}: GroveSelectProps<T>): JSX.Element {
  return (
    <Select
      className={composeRenderProps(className, (className) =>
        cn('group flex flex-col gap-2', className),
      )}
      {...props}
    >
      <Label>{label}</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      {description && (
        <Text className="text-muted-foreground text-sm" slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
      <SelectPopover>
        <SelectListBox items={items}>{children}</SelectListBox>
      </SelectPopover>
    </Select>
  );
}

export type { GroveSelectProps };
export {
  GroveSelect,
  Select,
  SelectCollection,
  SelectHeader,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectSection,
  SelectTrigger,
  SelectValue,
};