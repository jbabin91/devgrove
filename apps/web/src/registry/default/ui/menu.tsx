'use client';

import { type VariantProps } from 'class-variance-authority';
import {
  composeRenderProps,
  Header as AriaHeader,
  Keyboard as AriaKeyboard,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  type MenuItemProps as AriaMenuItemProps,
  type MenuProps as AriaMenuProps,
  MenuTrigger as AriaMenuTrigger,
  type MenuTriggerProps as AriaMenuTriggerProps,
  type PopoverProps,
  Separator as AriaSeparator,
  type SeparatorProps as AriaSeparatorProps,
  SubmenuTrigger as AriaSubmenuTrigger,
} from 'react-aria-components';

import { cn } from '@/libs/utils';

import { Button, type buttonVariants } from './button';
import { Icons } from './icons';
import { ListBoxCollection, ListBoxSection } from './list-box';
import { SelectPopover } from './select';

/**
 * Represents a menu trigger component.
 */
const MenuTrigger = AriaMenuTrigger;

/**
 * Represents a trigger for a submenu in a menu.
 */
const MenuSubTrigger = AriaSubmenuTrigger;

/**
 * Represents a menu section.
 */
const MenuSection = ListBoxSection;

/**
 * Represents a collection of menu items.
 */
const MenuCollection = ListBoxCollection;

/**
 * Renders a menu popover component.
 *
 * @component
 * @param {PopoverProps} props - The popover component props.
 * @param {string} [props.className] - The class name for the menu popover component.
 * @returns {JSX.Element} The rendered menu popover component.
 */
function MenuPopover({ className, ...props }: PopoverProps): JSX.Element {
  return (
    <SelectPopover
      className={composeRenderProps(className, (className) =>
        cn('w-auto', className),
      )}
      {...props}
    />
  );
}

/**
 * Renders a menu component.
 *
 * @component
 * @template T - The type of the menu items.
 * @param {AriaMenuProps<T>} props - The props for the menu component.
 * @param {string} [props.className] - The class name for the menu component.
 * @returns {JSX.Element} - The rendered menu component.
 */
function Menu<T extends object>({
  className,
  ...props
}: AriaMenuProps<T>): JSX.Element {
  return (
    <AriaMenu
      className={cn(
        'max-h-[inherit] overflow-auto rounded-md p-1 outline outline-0 [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]',
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a menu item component.
 *
 * @component
 * @param {AriaMenuItemProps} props - The props for the menu item.
 * @param {string} [props.className] - The class name for the menu item.
 * @param {React.ReactNode} [props.children] - The children of the menu item.
 * @returns {JSX.Element} The rendered menu item.
 */
function MenuItem({
  className,
  children,
  ...props
}: AriaMenuItemProps): JSX.Element {
  return (
    <AriaMenuItem
      className={composeRenderProps(className, (className) =>
        cn(
          'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
          /* Disabled */
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          /* Focused */
          'data-[focused]:bg-accent data-[focused]:text-accent-foreground ',
          /* Selection Mode */
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
          <span className="absolute left-2 flex size-4 items-center justify-center">
            {renderProps.isSelected && (
              <>
                {renderProps.selectionMode == 'single' && (
                  <Icons.Circle className="size-2 fill-current" />
                )}
                {renderProps.selectionMode == 'multiple' && (
                  <Icons.Check className="size-4" />
                )}
              </>
            )}
          </span>

          {children}

          {renderProps.hasSubmenu && (
            <Icons.ChevronRight className="ml-auto size-4" />
          )}
        </>
      ))}
    </AriaMenuItem>
  );
}

/**
 * Props for the MenuHeader component.
 *
 * @typedef {object} MenuHeaderProps
 * @property {boolean} [inset] - Indicates if the menu header should have an inset style.
 * @property {boolean} [separator] - Indicates if the menu header should have a separator.
 * @property {React.ComponentProps<typeof AriaHeader>} - Additional props for the AriaHeader component.
 */
type MenuHeaderProps = {
  inset?: boolean;
  separator?: boolean;
} & React.ComponentProps<typeof AriaHeader>;

/**
 * Renders the header component for the menu.
 *
 * @component
 * @param {MenuHeaderProps} props - The props for the MenuHeader component.
 * @param {string} [props.className] - The class name for the menu header component.
 * @param {boolean} [props.inset] - Indicates if the menu header should have an inset style.
 * @param {boolean} [props.separator=true] - Indicates if the menu header should have a separator.
 * @returns {JSX.Element} The rendered header component.
 */
function MenuHeader({
  className,
  inset,
  separator = true,
  ...props
}: MenuHeaderProps): JSX.Element {
  return (
    <AriaHeader
      className={cn(
        'px-3 py-1.5 text-sm font-semibold',
        inset && 'pl-8',
        separator && '-mx-1 mb-1 border-b border-b-border pb-2.5',
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a separator for a menu.
 *
 * @component
 * @param {AriaSeparatorProps} props - The props for the MenuSeparator component.
 * @param {string} [props.className] - The class name for the MenuSeparator component.
 * @returns {JSX.Element} The rendered MenuSeparator component.
 */
function MenuSeparator({
  className,
  ...props
}: AriaSeparatorProps): JSX.Element {
  return (
    <AriaSeparator
      className={cn('-mx-1 my-1 h-px bg-muted', className)}
      {...props}
    />
  );
}

/**
 * Renders a keyboard component for the menu.
 *
 * @component
 * @param {React.ComponentProps<typeof AriaKeyboard>} props - The props for the MenuKeyboard component.
 * @param {string} [props.className] - The class name for the MenuKeyboard component.
 * @returns {JSX.Element} The rendered MenuKeyboard component.
 */
function MenuKeyboard({
  className,
  ...props
}: React.ComponentProps<typeof AriaKeyboard>): JSX.Element {
  return (
    <AriaKeyboard
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
      {...props}
    />
  );
}

/**
 * Props for the GroveMenu component.
 *
 * @template T - The type of the menu items.
 *
 * @property {string} [label] - The label for the menu.
 * @property {AriaMenuProps<T>} - Props for the AriaMenu component.
 * @property {VariantProps<typeof buttonVariants>} - Props for the button variants.
 * @property {Omit<AriaMenuTriggerProps, 'children'>} - Props for the AriaMenuTrigger component, excluding the 'children' prop.
 */
type GroveMenuProps<T> = {
  label?: string;
} & AriaMenuProps<T> &
  VariantProps<typeof buttonVariants> &
  Omit<AriaMenuTriggerProps, 'children'>;

/**
 * Renders a GroveMenu component.
 *
 * @component
 * @template T - The type of object.
 * @param {GroveMenuProps<T>} props - The props for the GroveMenu component.
 * @param {string} [props.label] - The label for the GroveMenu component.
 * @param {VariantProps<typeof buttonVariants>} [props.variant] - The variant for the GroveMenu component.
 * @param {VariantProps<typeof buttonVariants>} [props.size] - The size for the GroveMenu component.
 * @param {React.ReactNode} [props.children] - The children of the GroveMenu component.
 * @returns {JSX.Element} - The rendered GroveMenu component.
 */
function GroveMenu<T extends object>({
  label,
  variant,
  size,
  children,
  ...props
}: GroveMenuProps<T>): JSX.Element {
  return (
    <MenuTrigger {...props}>
      <Button size={size} variant={variant}>
        {label}
      </Button>
      <MenuPopover className="min-w-[--trigger-width]">
        <Menu {...props}>{children}</Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}

export type { GroveMenuProps, MenuHeaderProps };
export {
  GroveMenu,
  Menu,
  MenuCollection,
  MenuHeader,
  MenuItem,
  MenuKeyboard,
  MenuPopover,
  MenuSection,
  MenuSeparator,
  MenuSubTrigger,
  MenuTrigger,
};
