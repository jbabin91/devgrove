'use client';

import {
  composeRenderProps,
  Meter as AriaMeter,
  type MeterProps as AriaMeterProps,
} from 'react-aria-components';

import { cn } from '~/lib/utils';

import { Label, labelVariants } from './field';

/**
 * Represents the props for the Meter component.
 */
type MeterProps = {
  barClassName?: string;
  fillClassName?: string;
} & AriaMeterProps;

/**
 * Renders a meter component.
 *
 * @component
 * @param {MeterProps} props - The props for the Meter component.
 * @param {string} props.className - The class name for the Meter component.
 * @param {string} props.barClassName - The class name for the meter bar.
 * @param {string} props.fillClassName - The class name for the meter fill.
 * @param {ReactNode} props.children - The children to be rendered inside the Meter component.
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
 * This type extends the `MeterProps` type and adds additional properties for the GroveMeter component.
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
