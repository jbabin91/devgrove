'use client';

import {
  composeRenderProps,
  Meter as AriaMeter,
  type MeterProps as AriaMeterProps,
} from 'react-aria-components';

import { cn } from '~/libs/utils';

import { Label, labelVariants } from './field';

/**
 * Represents the props for the Meter component.
 *
 * @remarks
 * This interface extends the AriaMeterProps interface and adds additional props for the Meter component.
 *
 * @public
 */
type MeterProps = {
  barClassName?: string;
  fillClassName?: string;
} & AriaMeterProps;

/**
 * Renders a Meter component.
 *
 * @component
 * @param {MeterProps} props - The props for the Meter component.
 * @param {string} [props.className] - The class name for the Meter component.
 * @param {string} [props.barClassName] - The class name for the bar component.
 * @param {string} [props.fillClassName] - The class name for the fill component.
 * @param {React.ReactNode} [props.children] - The children elements for the Meter component.
 * @returns {JSX.Element} The rendered Meter component.
 */
function Meter({
  className,
  barClassName,
  fillClassName,
  children,
  ...props
}: MeterProps): JSX.Element {
  return (
    <AriaMeter
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
              'relative h-2 w-full overflow-hidden rounded-full bg-primary/20',
              barClassName,
            )}
          >
            <div
              className={cn(
                'size-full flex-1 bg-primary transition-all',
                fillClassName,
              )}
              style={{
                transform: `translateX(-${100 - (renderProps.percentage || 0)}%)`,
              }}
            />
          </div>
        </>
      ))}
    </AriaMeter>
  );
}

/**
 * Props for the GroveMeter component.
 *
 * @remarks
 * This interface extends the `MeterProps` interface and adds additional props specific to the GroveMeter component.
 *
 * @public
 */
type GroveMeterProps = {
  label?: string;
  showValue?: boolean;
} & MeterProps;

/**
 * Renders a GroveMeter component.
 *
 * @component
 * @param {GroveMeterProps} props - The props for the GroveMeter component.
 * @param {string} [props.className] - The class name for the GroveMeter component.
 * @param {string} [props.label] - The label for the GroveMeter component.
 * @param {boolean} [props.showValue=true] - Whether to show the value of the GroveMeter component.
 * @returns {JSX.Element} The rendered GroveMeter component.
 */
function GroveMeter({
  label,
  className,
  showValue = true,
  ...props
}: GroveMeterProps): JSX.Element {
  return (
    <Meter
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
    </Meter>
  );
}

export type { GroveMeterProps, MeterProps };
export { GroveMeter, Meter };
