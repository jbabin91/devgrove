'use client';

import { cva } from 'class-variance-authority';
import {
  Button as AriaButton,
  composeRenderProps,
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  type TagGroupProps as AriaTagGroupProps,
  TagList as AriaTagList,
  type TagListProps as AriaTagListProps,
  type TagProps as AriaTagProps,
  Text,
} from 'react-aria-components';

import { cn } from '~/lib/utils';

import { Label } from './field';
import { Icons } from './icons';

/**
 * Represents a tag group component.
 */
const TagGroup = AriaTagGroup;

/**
 * Renders a list of tags.
 *
 * @component
 * @template T - The type of the tag object.
 * @param {AriaTagListProps<T>} props - The props for the TagList component.
 * @param {string} [props.className] - The class name for the TagList component.
 * @returns {JSX.Element} - The rendered TagList component.
 */
function TagList<T extends object>({
  className,
  ...props
}: AriaTagListProps<T>): JSX.Element {
  return (
    <AriaTagList
      className={composeRenderProps(className, (className) =>
        cn(
          'flex flex-wrap gap-2',
          /* Empty */
          'data-[empty]:text-sm data-[empty]:text-muted-foreground',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Represents the configuration options for badge variants.
 *
 * @remarks
 * The `badgeVariants` object is used to define the styles and variants for badges.
 * It provides a set of CSS classes that can be applied to the badge component.
 *
 * @public
 */
const badgeVariants = cva(
  [
    'inline-flex items-center gap-2 rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors',
    /* Focus */
    'data-[focused]:outline-none data-[focused]:ring-1 data-[focused]:ring-ring ',
    /* Disabled */
    'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-transparent bg-primary text-primary-foreground shadow',
          /* Hover */
          'data-[hovered]:bg-primary/80',
        ],
        secondary: [
          'border-transparent bg-secondary text-secondary-foreground',
          /* Hover */
          'data-[hovered]:bg-secondary/80',
        ],
        destructive: [
          'border-transparent bg-destructive text-destructive-foreground shadow',
          /* Hover */
          'data-[hovered]:bg-destructive/80',
        ],
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

/**
 * Renders a tag component.
 *
 * @component
 * @param {AriaTagProps} props - The props for the tag component.
 * @param {React.ReactNode} [props.children] - The children for the tag component.
 * @param {string} [props.className] - The class name for the tag component.
 * @returns {JSX.Element} The rendered tag component.
 */
function Tag({ children, className, ...props }: AriaTagProps): JSX.Element {
  const textValue = typeof children === 'string' ? children : undefined;
  return (
    <AriaTag
      className={composeRenderProps(className, (className, renderProps) =>
        cn(
          badgeVariants({
            variant:
              renderProps.selectionMode === 'none' || renderProps.isSelected
                ? 'default'
                : 'secondary',
          }),
          renderProps.allowsRemoving && 'pr-1',
          className,
        ),
      )}
      textValue={textValue}
      {...props}
    >
      {composeRenderProps(children, (children, renderProps) => (
        <>
          {children}
          {renderProps.allowsRemoving && (
            <AriaButton
              className={cn(
                'rounded-sm opacity-70 ring-offset-background transition-opacity',
                /* Hover */
                'data-[hovered]:opacity-100',
                /* Resets */
                'focus-visible:outline-none',
                className,
              )}
              slot="remove"
            >
              <Icons.Cross2 aria-hidden className="size-3" />
            </AriaButton>
          )}
        </>
      ))}
    </AriaTag>
  );
}

/**
 * Props for the GroveTagGroup component.
 *
 * @template T - The type of items in the tag list.
 * @property {string} [label] - The label for the tag group.
 * @property {string} [description] - The description for the tag group.
 * @property {string} [errorMessage] - The error message for the tag group.
 * @property {Omit<AriaTagGroupProps, 'children'>} - Props for the AriaTagGroup component.
 * @property {Pick<AriaTagListProps<T>, 'items' | 'children' | 'renderEmptyState'>} - Props for the AriaTagList component.
 */
type GroveTagGroupProps<T> = {
  label?: string;
  description?: string;
  errorMessage?: string;
} & Omit<AriaTagGroupProps, 'children'> &
  Pick<AriaTagListProps<T>, 'items' | 'children' | 'renderEmptyState'>;

/**
 * Renders a group of tags with optional label, description, and error message.
 *
 * @component
 * @template T - The type of the items in the tag group.
 * @param {GroveTagGroupProps<T>} props - The props for the GroveTagGroup component.
 * @param {string} [props.label] - The label for the GroveTagGroup component.
 * @param {string} [props.description] - The description for the GroveTagGroup component.
 * @param {string} [props.className] - The class name for the GroveTagGroup component.
 * @param {string} [props.errorMessage] - The error message for the GroveTagGroup component.
 * @param {T[]} props.items - The items for the tag list.
 * @param {React.ReactNode} [props.children] - The children for the tag list.
 * @returns {JSX.Element} The rendered GroveTagGroup component.
 */
function GroveTagGroup<T extends object>({
  label,
  description,
  className,
  errorMessage,
  items,
  children,
  renderEmptyState,
  ...props
}: GroveTagGroupProps<T>): JSX.Element {
  return (
    <TagGroup className={cn('group flex flex-col gap-2', className)} {...props}>
      <Label>{label}</Label>
      <TagList items={items} renderEmptyState={renderEmptyState}>
        {children}
      </TagList>
      {description && (
        <Text className="text-sm text-muted-foreground" slot="description">
          {description}
        </Text>
      )}
      {errorMessage && (
        <Text className="text-sm text-destructive" slot="errorMessage">
          {errorMessage}
        </Text>
      )}
    </TagGroup>
  );
}

export type { GroveTagGroupProps };
export { badgeVariants, GroveTagGroup, Tag, TagGroup, TagList };