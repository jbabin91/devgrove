'use client';

import { Check } from 'lucide-react';
import {
  Collection as AriaCollection,
  composeRenderProps,
  Header as AriaHeader,
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  type ListBoxItemProps as AriaListBoxItemProps,
  type ListBoxProps as AriaListBoxProps,
  Section as AriaSection,
} from 'react-aria-components';

import { cn } from '~/lib/utils';

/**
 * Represents a ListBoxSection component.
 * This component is used for creating sections within a list box.
 */
const ListBoxSection = AriaSection;

/**
 * Represents a collection of list box items.
 */
const ListBoxCollection = AriaCollection;

/**
 * ListBox component.
 *
 * @template T - The type of objects in the ListBox.
 * @param {AriaListBoxProps<T>} props - The props for the ListBox component.
 * @returns {JSX.Element} - The rendered ListBox component.
 */
function ListBox<T extends object>({
  className,
  ...props
}: AriaListBoxProps<T>): JSX.Element {
  return (
    <AriaListBox
      className={composeRenderProps(className, (className) =>
        cn(
          className,
          'group overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none',
          /* Empty */
          'data-[empty]:p-6 data-[empty]:text-center data-[empty]:text-sm',
        ),
      )}
      {...props}
    />
  );
}

/**
 * ListBoxItem component represents an item in a list box.
 *
 * @template T - The type of the item.
 * @param {AriaListBoxItemProps<T>} props - The props for the ListBoxItem component.
 * @returns {JSX.Element} - The rendered ListBoxItem component.
 */
function ListBoxItem<T extends object>({
  className,
  children,
  ...props
}: AriaListBoxItemProps<T>): JSX.Element {
  return (
    <AriaListBoxItem
      className={composeRenderProps(className, (className) =>
        cn(
          'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
          /* Disabled */
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          /* Focused */
          'data-[focused]:bg-accent data-[focused]:text-accent-foreground',
          /* Hovered */
          'data-[hovered]:bg-accent data-[hovered]:text-accent-foreground',
          /* Selection */
          'data-[selection-mode]:pl-8',
          className,
        ),
      )}
      textValue={
        props.textValue ?? (typeof children === 'string' ? children : undefined)
      }
      {...props}
    >
      {composeRenderProps(children, (children, renderProps) => (
        <>
          {renderProps.isSelected && (
            <span className="absolute left-2 flex size-4 items-center justify-center">
              <Check className="size-4" />
            </span>
          )}
          {children}
        </>
      ))}
    </AriaListBoxItem>
  );
}

/**
 * Renders the header component for the ListBox.
 *
 * @component
 * @param {React.ComponentProps<typeof AriaHeader>} props - The props for the ListBoxHeader component.
 * @returns {JSX.Element} The rendered ListBoxHeader component.
 */
function ListBoxHeader({
  className,
  ...props
}: React.ComponentProps<typeof AriaHeader>): JSX.Element {
  return (
    <AriaHeader
      className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
      {...props}
    />
  );
}

export {
  ListBox,
  ListBoxCollection,
  ListBoxHeader,
  ListBoxItem,
  ListBoxSection,
};