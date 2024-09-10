'use client';

import {
  composeRenderProps,
  ProgressBar as AriaProgressBar,
  type ProgressBarProps as AriaProgressBarProps,
} from 'react-aria-components';

import { cn } from '~/lib/utils';

import { Label, labelVariants } from './field';

/**
 * Represents the props for the Progress component.
 */
type ProgressProps = {
  barClassName?: string;
  fillClassName?: string;
} & AriaProgressBarProps;

/**
 * Renders a progress bar component.
 *
 * @component
 * @param {ProgressProps} props - The props for the GroveProgressBar component.
 * @param {string} props.className - The class name for the ProgressBar component.
 * @param {string} props.barClassName - The class name for the progress bar.
 * @param {string} props.fillClassName - The class name for the progress fill.
 * @param {ReactNode} props.children - The children to be rendered inside the ProgressBar component.
 * @returns {JSX.Element} The rendered ProgressBar component.
 * @example
 * ```tsx
 * <Progress
 *   className="my-progress"
 *   barClassName="my-progress-bar"
 *   fillClassName="my-progress-fill"
 *   percentage={50}
 * >
 *   Loading...
 * </Progress>
 * ```
 */
function Progress({
  className,
  barClassName,
  fillClassName,
  children,
  ...props
}: ProgressProps): JSX.Element {
  return (
    <AriaProgressBar
      className={composeRenderProps(className, (className) =>
        cn('w-full', className),
      )}
      {...props}
    >
      {composeRenderProps(children, (children, renderProps) => (
        <>
          {children}
          <div
            className={cn(
              'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
              barClassName,
            )}
          >
            <div
              className={cn(
                'size-full flex-1 bg-primary transition-all',
                fillClassName,
              )}
              style={{
                transform: `translateX(-${100 - (renderProps.percentage ?? 0)}%)`,
              }}
            />
          </div>
        </>
      ))}
    </AriaProgressBar>
  );
}

/**
 * Props for the GroveProgressBar component.
 *
 * @remarks
 * This interface extends the ProgressProps interface and adds additional props for the GroveProgressBar component.
 *
 * @public
 */
type GroveProgressBarProps = {
  label?: string;
  showValue?: boolean;
} & ProgressProps;

/**
 * Renders a GroveProgressBar component.
 *
 * @component
 * @param {GroveProgressBarProps} props - The props for the GroveProgressBar component.
 * @returns {JSX.Element} The rendered GroveProgressBar component.
 */
function GroveProgressBar({
  label,
  className,
  showValue = true,
  ...props
}: GroveProgressBarProps): JSX.Element {
  return (
    <Progress
      className={composeRenderProps(className, (className) =>
        cn('group flex flex-col gap-2', className),
      )}
      {...props}
    >
      {({ valueText }) => (
        <div className="flex w-full justify-between">
          <Label>{label}</Label>
          {showValue && <span className={labelVariants()}>{valueText}</span>}
        </div>
      )}
    </Progress>
  );
}

export type { GroveProgressBarProps, ProgressProps };
export { GroveProgressBar, Progress };
