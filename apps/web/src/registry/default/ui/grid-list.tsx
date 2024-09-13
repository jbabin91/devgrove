'use client';

import {
  Button as AriaButton,
  composeRenderProps,
  GridList as AriaGridList,
  GridListItem as AriaGridListItem,
  type GridListItemProps as AriaGridListItemProps,
  type GridListProps as AriaGridListProps,
} from 'react-aria-components';

import { cn } from '~/libs/utils';

import { Checkbox } from './checkbox';
import { Icons } from './icons';

/**
 * Renders a grid list component.
 *
 * @component
 * @template T - The type of the objects in the grid list.
 * @param {AriaGridListProps<T>} props - The props for the grid list.
 * @param {React.ReactNode} [props.children] - The children of the grid list.
 * @returns {JSX.Element} - The rendered grid list component.
 */
function GridList<T extends object>({
  children,
  ...props
}: AriaGridListProps<T>): JSX.Element {
  return (
    <AriaGridList
      {...props}
      className={composeRenderProps(props.className, (className) =>
        cn(
          'dev-grove-GridList group flex flex-col gap-2 overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none',
          /* Empty */
          'data-[empty]:p-6 data-[empty]:text-center data-[empty]:text-sm',
          className,
        ),
      )}
    >
      {children}
    </AriaGridList>
  );
}

/**
 * Renders a grid list item component.
 *
 * @component
 * @param {AriaGridListItemProps} props - The props for the GridListItem component.
 * @param {string} [props.className] - The class name for the GridListItem component.
 * @param {React.ReactNode} [props.children] - The children of the GridListItem component.
 * @returns {JSX.Element} The rendered GridListItem component.
 */
function GridListItem({
  className,
  children,
  ...props
}: AriaGridListItemProps): JSX.Element {
  const textValue = typeof children === 'string' ? children : undefined;
  return (
    <AriaGridListItem
      className={composeRenderProps(className, (className) =>
        cn(
          'dev-grove-GridListItem relative flex w-full cursor-default select-none items-center gap-3 rounded-sm px-2 py-1.5 text-sm outline-none',
          /* Disabled */
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          /* Focus Visible */
          'data-[focus-visible]:z-10 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 data-[focus-visible]:ring-offset-background',
          /* Hovered */
          'data-[hovered]:bg-accent data-[hovered]:text-accent-foreground',
          /* Selected */
          'data-[selected]:bg-accent data-[selected]:text-accent-foreground',
          /* Dragging */
          'data-[dragging]:opacity-60',
          className,
        ),
      )}
      textValue={textValue}
      {...props}
    >
      {composeRenderProps(children, (children, renderProps) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          {renderProps.allowsDragging && (
            <AriaButton slot="drag">
              <Icons.GripHorizontal className="size-4" />
            </AriaButton>
          )}
          {renderProps.selectionMode === 'multiple' &&
            renderProps.selectionBehavior === 'toggle' && (
              <Checkbox slot="selection" />
            )}
          {children}
        </>
      ))}
    </AriaGridListItem>
  );
}

export { GridList, GridListItem };
