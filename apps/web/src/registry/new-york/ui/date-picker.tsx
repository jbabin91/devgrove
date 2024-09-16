'use client';

import {
  composeRenderProps,
  DatePicker as AriaDatePicker,
  type DatePickerProps as AriaDatePickerProps,
  DateRangePicker as AriaDateRangePicker,
  type DateRangePickerProps as AriaDateRangePickerProps,
  type DateValue as AriaDateValue,
  Dialog as AriaDialog,
  type DialogProps as AriaDialogProps,
  type PopoverProps as AriaPopoverProps,
  Text,
  type ValidationResult as AriaValidationResult,
} from 'react-aria-components';

import { cn } from '@/lib/utils';

import { Button } from './button';
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  RangeCalendar,
} from './calendar';
import { DateInput } from './datefield';
import { FieldError, FieldGroup, Label } from './field';
import { Icons } from './icons';
import { Popover } from './popover';

/**
 * A custom date picker component.
 */
const DatePicker = AriaDatePicker;

/**
 * A custom date range picker component.
 */
const DateRangePicker = AriaDateRangePicker;

/**
 * Renders the content for the DatePicker component.
 *
 * @component
 * @param {AriaDialogProps} props - The props for the AriaDialog component.
 * @param {string} [props.className] - The class name for the DatePickerContent component.
 * @param {string} [props.popoverClassName] - The class name for the Popover component.
 * @returns {JSX.Element} The rendered DatePickerContent component.
 */
function DatePickerContent({
  className,
  popoverClassName,
  ...props
}: AriaDialogProps & {
  popoverClassName?: AriaPopoverProps['className'];
}): JSX.Element {
  return (
    <Popover
      className={composeRenderProps(popoverClassName, (className) =>
        cn('w-auto p-3', className),
      )}
    >
      <AriaDialog
        className={cn(
          'flex w-full flex-col space-y-4 outline-none sm:flex-row sm:space-x-4 sm:space-y-0',
          className,
        )}
        {...props}
      />
    </Popover>
  );
}

/**
 * Props for the GroveDatePicker component.
 *
 * @template T - The type of the date value.
 * @property {string} [label] - The label for the date picker.
 * @property {string} [description] - The description for the date picker.
 * @property {string | ((validation: AriaValidationResult) => string)} [errorMessage] - The error message for the date picker.
 * @extends AriaDatePickerProps<T>
 */
type GroveDatePickerProps<T extends AriaDateValue> = {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
} & AriaDatePickerProps<T>;

/**
 * Renders a GroveDatePicker component.
 *
 * @component
 * @template T - The type of the AriaDateValue.
 * @param {GroveDatePickerProps<T>} props - The props for the GroveDatePicker component.
 * @param {string} [props.label] - The label for the GroveDatePicker component.
 * @param {string} [props.description] - The description for the GroveDatePicker component.
 * @param {string} [props.errorMessage] - The error message for the GroveDatePicker component.
 * @param {string} [props.className] - The class name for the GroveDatePicker component.
 * @returns {JSX.Element} - The rendered GroveDatePicker component.
 */
function GroveDatePicker<T extends AriaDateValue>({
  label,
  description,
  errorMessage,
  className,
  ...props
}: GroveDatePickerProps<T>): JSX.Element {
  return (
    <DatePicker
      className={composeRenderProps(className, (className) =>
        cn('group flex flex-col gap-2', className),
      )}
      {...props}
    >
      <Label>{label}</Label>
      <FieldGroup>
        <DateInput className="flex-1" variant="ghost" />
        <Button
          className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
          size="icon"
          variant="ghost"
        >
          <Icons.Calendar aria-hidden="true" className="size-4" />
        </Button>
      </FieldGroup>
      {description && (
        <Text className="text-sm text-muted-foreground" slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
      <DatePickerContent>
        <Calendar>
          <CalendarHeading />
          <CalendarGrid>
            <CalendarGridHeader>
              {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
            </CalendarGridHeader>
            <CalendarGridBody>
              {(date) => <CalendarCell date={date} />}
            </CalendarGridBody>
          </CalendarGrid>
        </Calendar>
      </DatePickerContent>
    </DatePicker>
  );
}

/**
 * Props for the GroveDateRangePicker component.
 *
 * @template T - The type of the date value.
 * @property {string} [label] - The label for the date range picker.
 * @property {string} [description] - The description for the date range picker.
 * @property {string | ((validation: AriaValidationResult) => string)} [errorMessage] - The error message for the date range picker.
 * @extends AriaDateRangePickerProps<T>
 */
type GroveDateRangePickerProps<T extends AriaDateValue> = {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
} & AriaDateRangePickerProps<T>;

/**
 * Renders a date range picker component.
 *
 * @component
 * @template T - The type of the AriaDateValue.
 * @param {GroveDateRangePickerProps<T>} props - The props for the GroveDateRangePicker component.
 * @param {string} [props.label] - The label for the GroveDateRangePicker component.
 * @param {string} [props.description] - The description for the GroveDateRangePicker component.
 * @param {string} [props.errorMessage] - The error message for the GroveDateRangePicker component.
 * @param {string} [props.className] - The class name for the GroveDateRangePicker component.
 * @returns {JSX.Element} - The rendered date range picker component.
 */
function GroveDateRangePicker<T extends AriaDateValue>({
  label,
  description,
  errorMessage,
  className,
  ...props
}: GroveDateRangePickerProps<T>): JSX.Element {
  return (
    <DateRangePicker
      className={composeRenderProps(className, (className) =>
        cn('group flex flex-col gap-2', className),
      )}
      {...props}
    >
      <Label>{label}</Label>
      <FieldGroup>
        <DateInput slot="start" variant="ghost" />
        <span aria-hidden="true" className="px-2 text-sm text-muted-foreground">
          -
        </span>
        <DateInput className="flex-1" slot="end" variant="ghost" />

        <Button
          className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
          size="icon"
          variant="ghost"
        >
          <Icons.Calendar aria-hidden="true" className="size-4" />
        </Button>
      </FieldGroup>
      {description && (
        <Text className="text-sm text-muted-foreground" slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
      <DatePickerContent>
        <RangeCalendar>
          <CalendarHeading />
          <CalendarGrid>
            <CalendarGridHeader>
              {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
            </CalendarGridHeader>
            <CalendarGridBody>
              {(date) => <CalendarCell date={date} />}
            </CalendarGridBody>
          </CalendarGrid>
        </RangeCalendar>
      </DatePickerContent>
    </DateRangePicker>
  );
}

export type { GroveDatePickerProps, GroveDateRangePickerProps };
export {
  DatePicker,
  DatePickerContent,
  DateRangePicker,
  GroveDatePicker,
  GroveDateRangePicker,
};
