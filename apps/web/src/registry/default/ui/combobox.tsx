'use client';

import { ChevronsUpDown } from 'lucide-react';
import {
  ComboBox as AriaComboBox,
  type ComboBoxProps as AriaComboBoxProps,
  composeRenderProps,
  FieldError,
  Input as AriaInput,
  type InputProps as AriaInputProps,
  Label,
  ListBox as AriaListBox,
  ListBoxItem,
  type ListBoxProps as AriaListBoxProps,
  Popover,
  type PopoverProps as AriaPopoverProps,
  Text,
  type ValidationResult as AriaValidationResult,
} from 'react-aria-components';

import { cn } from '~/lib/utils';

import { Button } from './button';
import { FieldGroup } from './field';
import { ListBoxCollection, ListBoxHeader, ListBoxSection } from './list-box';

/**
 * A custom combobox component.
 */
const Combobox = AriaComboBox;

/**
 * Represents an item in a combobox.
 */
const ComboboxItem = ListBoxItem;

/**
 * Represents the header component for a combobox.
 */
const ComboboxHeader = ListBoxHeader;

/**
 * Represents a section in a combobox.
 */
const ComboboxSection = ListBoxSection;

/**
 * Represents a collection of items for a combobox.
 */
const ComboboxCollection = ListBoxCollection;

/**
 * Renders the input component for the Combobox.
 *
 * @component
 * @param {AriaInputProps} props - The props for the input component.
 * @returns {JSX.Element} The rendered input component.
 */
function ComboboxInput({ className, ...props }: AriaInputProps): JSX.Element {
  return (
    <AriaInput
      className={composeRenderProps(className, (className) =>
        cn(
          'flex h-10 w-full bg-background px-3 py-2 outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground',
          /* Disabled */
          'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Renders a popover component for the Combobox.
 *
 * @param className - The CSS class name for the popover.
 * @param props - Additional props for the popover component.
 * @returns {JSX.Element} The rendered popover component.
 */
function ComboboxPopover({
  className,
  ...props
}: AriaPopoverProps): JSX.Element {
  return (
    <Popover
      className={composeRenderProps(className, (className) =>
        cn('w-[calc(var(--trigger-width)+4px)]', className),
      )}
      {...props}
    />
  );
}

/**
 * Renders a list box component for the Combobox.
 *
 * @template T - The type of the items in the list box.
 * @param {AriaListBoxProps<T>} props - The props for the list box.
 * @returns {JSX.Element} - The rendered list box component.
 */
function ComboboxListBox<T extends object>({
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
 * Props for the GroveComboBox component.
 *
 * @template T - The type of the items in the combobox.
 * @property {string} [label] - The label for the combobox.
 * @property {string | null} [description] - The description for the combobox.
 * @property {string | ((validation: AriaValidationResult) => string)} [errorMessage] - The error message for the combobox.
 * @property {React.ReactNode | ((item: T) => React.ReactNode)} children - The children of the combobox.
 */
type GroveComboBoxProps<T extends object> = {
  label?: string;
  description?: string | null;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
  children: React.ReactNode | ((item: T) => React.ReactNode);
} & Omit<AriaComboBoxProps<T>, 'children'>;

/**
 * Renders a GroveComboBox component.
 *
 * @template T - The type of the object.
 * @param {GroveComboBoxProps<T>} props - The props for the GroveComboBox component.
 * @returns {JSX.Element} - The rendered GroveComboBox component.
 */
function GroveComboBox<T extends object>({
  label,
  description,
  errorMessage,
  className,
  children,
  ...props
}: GroveComboBoxProps<T>): JSX.Element {
  return (
    <Combobox
      className={composeRenderProps(className, (className) =>
        cn('group flex flex-col gap-2', className),
      )}
      {...props}
    >
      <Label>{label}</Label>
      <FieldGroup className="p-0">
        <ComboboxInput />
        <Button className="mr-1 size-6 p-1" size="icon" variant="ghost">
          <ChevronsUpDown aria-hidden="true" className="size-4 opacity-50" />
        </Button>
      </FieldGroup>
      {description && (
        <Text className="text-muted-foreground text-sm" slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
      <ComboboxPopover>
        <ComboboxListBox>{children}</ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  );
}

export type { GroveComboBoxProps };
export {
  Combobox,
  ComboboxCollection,
  ComboboxHeader,
  ComboboxInput,
  ComboboxItem,
  ComboboxListBox,
  ComboboxPopover,
  ComboboxSection,
  GroveComboBox,
};