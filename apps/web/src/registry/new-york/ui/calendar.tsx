'use client';

import { getLocalTimeZone, today } from '@internationalized/date';
import { useContext } from 'react';
import {
  Button as AriaButton,
  Calendar as AriaCalendar,
  CalendarCell as AriaCalendarCell,
  type CalendarCellProps as AriaCalendarCellProps,
  CalendarGrid as AriaCalendarGrid,
  CalendarGridBody as AriaCalendarGridBody,
  type CalendarGridBodyProps as AriaCalendarGridBodyProps,
  CalendarGridHeader as AriaCalendarGridHeader,
  type CalendarGridHeaderProps as AriaCalendarGridHeaderProps,
  type CalendarGridProps as AriaCalendarGridProps,
  CalendarHeaderCell as AriaCalendarHeaderCell,
  type CalendarHeaderCellProps as AriaCalendarHeaderCellProps,
  type CalendarProps as AriaCalendarProps,
  composeRenderProps,
  type DateValue as AriaDateValue,
  Heading as AriaHeading,
  RangeCalendar as AriaRangeCalendar,
  type RangeCalendarProps as AriaRangeCalendarProps,
  RangeCalendarStateContext as AriaRangeCalendarStateContext,
  Text,
  useLocale,
} from 'react-aria-components';

import { cn } from '~/lib/utils';

import { buttonVariants } from './button';
import { Icons } from './icons';

/**
 * Represents a calendar component.
 */
const Calendar = AriaCalendar;

/**
 * A component that represents a range calendar.
 */
const RangeCalendar = AriaRangeCalendar;

/**
 * Renders the heading component for the calendar.
 *
 * @component
 * @param {React.HTMLAttributes<HTMLElement>} props - The HTML attributes for the heading element.
 * @returns {JSX.Element} The rendered CalendarHeading component.
 */
function CalendarHeading({
  ...props
}: React.HTMLAttributes<HTMLElement>): JSX.Element {
  const { direction } = useLocale();

  return (
    <header className="flex w-full items-center gap-1 px-1 pb-4" {...props}>
      <AriaButton
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'size-7 bg-transparent p-0 opacity-50',
          /* Hover */
          'data-[hovered]:opacity-100',
        )}
        slot="previous"
      >
        {direction === 'rtl' ? (
          <Icons.ChevronRight aria-hidden className="size-4" />
        ) : (
          <Icons.ChevronLeft aria-hidden className="size-4" />
        )}
      </AriaButton>
      <AriaHeading className="grow text-center text-sm font-medium" />
      <AriaButton
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'size-7 bg-transparent p-0 opacity-50',
          /* Hover */
          'data-[hovered]:opacity-100',
        )}
        slot="next"
      >
        {direction === 'rtl' ? (
          <Icons.ChevronLeft aria-hidden className="size-4" />
        ) : (
          <Icons.ChevronRight aria-hidden className="size-4" />
        )}
      </AriaButton>
    </header>
  );
}

/**
 * Renders a calendar grid component.
 *
 * @component
 * @param {AriaCalendarGridProps} props - The props for the CalendarGrid component.
 * @param {string} [props.className] - The class name for the CalendarGrid component.
 * @returns {JSX.Element} The rendered CalendarGrid component.
 */
function CalendarGrid({
  className,
  ...props
}: AriaCalendarGridProps): JSX.Element {
  return (
    <AriaCalendarGrid
      className={cn(
        ' border-separate border-spacing-x-0 border-spacing-y-1 ',
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders the header component for the calendar grid.
 *
 * @component
 * @param {AriaCalendarGridHeaderProps} props - The props for the CalendarGridHeader component.
 * @returns {JSX.Element} The rendered CalendarGridHeader component.
 */
function CalendarGridHeader({
  ...props
}: AriaCalendarGridHeaderProps): JSX.Element {
  return <AriaCalendarGridHeader {...props} />;
}

/**
 * Renders a header cell for the calendar.
 *
 * @component
 * @param {AriaCalendarHeaderCellProps} props - The props for the CalendarHeaderCell component.
 * @param {string} [props.className] - The class name for the CalendarHeaderCell component.
 * @returns {JSX.Element} The rendered CalendarHeaderCell component.
 */
function CalendarHeaderCell({
  className,
  ...props
}: AriaCalendarHeaderCellProps): JSX.Element {
  return (
    <AriaCalendarHeaderCell
      className={cn(
        'w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders the body of the calendar grid.
 *
 * @component
 * @param {AriaCalendarGridBodyProps} props - The props for the CalendarGridBody component.
 * @param {string} [props.className] - The class name for the CalendarGridBody component.
 * @returns {JSX.Element} The rendered CalendarGridBody component.
 */
function CalendarGridBody({
  className,
  ...props
}: AriaCalendarGridBodyProps): JSX.Element {
  return (
    <AriaCalendarGridBody
      className={cn('[&>tr>td]:p-0', className)}
      {...props}
    />
  );
}

/**
 * Renders a cell in the calendar.
 *
 * @component
 * @param {AriaCalendarCellProps} props - The props for the CalendarCell component.
 * @param {string} [props.className] - The class name for the CalendarCell component.
 * @returns {JSX.Element} The rendered CalendarCell component.
 */
function CalendarCell({
  className,
  ...props
}: AriaCalendarCellProps): JSX.Element {
  const isRange = Boolean(useContext(AriaRangeCalendarStateContext));
  return (
    <AriaCalendarCell
      className={composeRenderProps(className, (className, renderProps) =>
        cn(
          buttonVariants({ variant: 'ghost' }),
          'relative flex size-8 items-center justify-center p-0 text-sm font-normal',
          /* Disabled */
          renderProps.isDisabled && 'text-muted-foreground opacity-50',
          /* Selected */
          renderProps.isSelected &&
            'bg-primary text-primary-foreground data-[focused]:bg-primary  data-[focused]:text-primary-foreground',
          /* Hover */
          renderProps.isHovered &&
            renderProps.isSelected &&
            (renderProps.isSelectionStart ||
              renderProps.isSelectionEnd ||
              !isRange) &&
            'data-[hovered]:bg-primary data-[hovered]:text-primary-foreground',
          /* Selection Start/End */
          renderProps.isSelected &&
            isRange &&
            !renderProps.isSelectionStart &&
            !renderProps.isSelectionEnd &&
            'rounded-none bg-accent text-accent-foreground',
          /* Outside Month */
          renderProps.isOutsideMonth &&
            'text-muted-foreground opacity-50 data-[selected]:bg-accent/50 data-[selected]:text-muted-foreground data-[selected]:opacity-30',
          /* Current Date */
          renderProps.date.compare(today(getLocalTimeZone())) === 0 &&
            !renderProps.isSelected &&
            'bg-accent text-accent-foreground',
          /* Unavailable Date */
          renderProps.isUnavailable && 'cursor-default text-destructive ',
          renderProps.isInvalid &&
            'bg-destructive text-destructive-foreground data-[focused]:bg-destructive data-[hovered]:bg-destructive data-[focused]:text-destructive-foreground data-[hovered]:text-destructive-foreground',
          className,
        ),
      )}
      {...props}
    />
  );
}

/**
 * Props for the GroveCalendar component.
 *
 * @template T - The type of the date value.
 * @param errorMessage - An optional error message.
 * @param AriaCalendarProps - Additional props for the AriaCalendar component.
 */
type GroveCalendarProps<T extends AriaDateValue> = {
  errorMessage?: string;
} & AriaCalendarProps<T>;

/**
 * Renders a GroveCalendar component.
 *
 * @component
 * @template T - The type of the AriaDateValue.
 * @param {GroveCalendarProps<T>} props - The props for the GroveCalendar component.
 * @param {string} [props.errorMessage] - The error message for the GroveCalendar component.
 * @param {string} [props.className] - The class name for the GroveCalendar component.
 * @returns {JSX.Element} - The rendered GroveCalendar component.
 */
function GroveCalendar<T extends AriaDateValue>({
  errorMessage,
  className,
  ...props
}: GroveCalendarProps<T>): JSX.Element {
  return (
    <Calendar
      className={composeRenderProps(className, (className) =>
        cn('w-fit', className),
      )}
      {...props}
    >
      <CalendarHeading />
      <CalendarGrid>
        <CalendarGridHeader>
          {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
        </CalendarGridHeader>
        <CalendarGridBody>
          {(date) => <CalendarCell date={date} />}
        </CalendarGridBody>
      </CalendarGrid>
      {errorMessage && (
        <Text className="text-sm text-destructive" slot="errorMessage">
          {errorMessage}
        </Text>
      )}
    </Calendar>
  );
}

/**
 * Props for the GroveRangeCalendar component.
 *
 * @template T - The type of the AriaDateValue.
 * @property {string} [errorMessage] - An optional error message to display.
 * @extends {AriaRangeCalendarProps<T>} - Inherited props from AriaRangeCalendarProps.
 */
type GroveRangeCalendarProps<T extends AriaDateValue> = {
  errorMessage?: string;
} & AriaRangeCalendarProps<T>;

/**
 * Renders a range calendar component.
 *
 * @component
 * @template T - The type of the AriaDateValue.
 * @param {GroveRangeCalendarProps<T>} props - The props for the GroveRangeCalendar component.
 * @param {string} [props.errorMessage] - The error message for the GroveRangeCalendar component.
 * @param {string} [props.className] - The class name for the GroveRangeCalendar component.
 * @returns {JSX.Element} - The rendered range calendar component.
 */
function GroveRangeCalendar<T extends AriaDateValue>({
  errorMessage,
  className,
  ...props
}: GroveRangeCalendarProps<T>): JSX.Element {
  return (
    <RangeCalendar
      className={composeRenderProps(className, (className) =>
        cn('w-fit', className),
      )}
      {...props}
    >
      <CalendarHeading />
      <CalendarGrid>
        <CalendarGridHeader>
          {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
        </CalendarGridHeader>
        <CalendarGridBody>
          {(date) => <CalendarCell date={date} />}
        </CalendarGridBody>
      </CalendarGrid>
      {errorMessage && (
        <Text className="text-sm text-destructive" slot="errorMessage">
          {errorMessage}
        </Text>
      )}
    </RangeCalendar>
  );
}

export type { GroveCalendarProps, GroveRangeCalendarProps };
export {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  GroveCalendar,
  GroveRangeCalendar,
  RangeCalendar,
};
