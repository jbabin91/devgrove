'use client';

import {
  composeRenderProps,
  Tab as AriaTab,
  TabList as AriaTabList,
  type TabListProps as AriaTabListProps,
  TabPanel as AriaTabPanel,
  type TabPanelProps as AriaTabPanelProps,
  type TabProps as AriaTabProps,
  Tabs as AriaTabs,
  type TabsProps as AriaTabsProps,
} from 'react-aria-components';

import { cn } from '~/lib/utils';

/**
 * Renders a set of tabs.
 *
 * @component
 * @param {AriaTabsProps} props - The props for the Tabs component.
 * @param {string} [props.className] - The class name for the Tabs component.
 * @returns {JSX.Element} The rendered Tabs component.
 */
function Tabs({ className, ...props }: AriaTabsProps): JSX.Element {
  return (
    <AriaTabs
      className={composeRenderProps(className, (className) =>
        cn(
          'group flex flex-col gap-2',
          /* Orientation */
          'data-[orientation=vertical]:flex-row',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Renders a tab list component.
 *
 * @component
 * @template T - The type of the tab list items.
 * @param {AriaTabListProps<T>} props - The props for the tab list.
 * @param {string} [props.className] - The class name for the tab list.
 * @returns {JSX.Element} - The rendered tab list component.
 */
function TabList<T extends object>({
  className,
  ...props
}: AriaTabListProps<T>): JSX.Element {
  return (
    <AriaTabList
      className={composeRenderProps(className, (className) =>
        cn(
          'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
          /* Orientation */
          'data-[orientation=vertical]:h-auto data-[orientation=vertical]:flex-col',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Represents a tab component.
 *
 * @component
 * @param {AriaTabProps} props - The props for the tab component.
 * @param {string} [props.className] - The class name for the tab component.
 * @returns {JSX.Element} The rendered tab component.
 */
function Tab({ className, ...props }: AriaTabProps): JSX.Element {
  return (
    <AriaTab
      className={composeRenderProps(className, (className) =>
        cn(
          'inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium outline-none ring-offset-background transition-all',
          /* Focus Visible */
          'data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2',
          /* Disabled */
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          /* Selected */
          'data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-sm ',
          /* Orientation */
          'group-data-[orientation=vertical]:w-full',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Renders a tab panel component.
 *
 * @component
 * @param {AriaTabPanelProps} props - The props for the tab panel.
 * @param {string} [props.className] - The class name for the tab panel.
 * @returns {JSX.Element} The rendered tab panel.
 */
function TabPanel({ className, ...props }: AriaTabPanelProps): JSX.Element {
  return (
    <AriaTabPanel
      className={composeRenderProps(className, (className) =>
        cn(
          'mt-2 ring-offset-background',
          /* Focus Visible */
          'data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2',
          className,
        ),
      )}
      {...props}
    />
  );
}

export { Tab, TabList, TabPanel, Tabs };
