'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import {
  Button as AriaButton,
  composeRenderProps,
  Dialog as AriaDialog,
  type DialogProps as AriaDialogProps,
  DialogTrigger as AriaDialogTrigger,
  Heading as AriaHeading,
  type HeadingProps as AriaHeadingProps,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  type ModalOverlayProps as AriaModalOverlayProps,
} from 'react-aria-components';

import { cn } from '~/lib/utils';

import { Icons } from './icons';

/**
 * Represents the variants for the sheet component.
 *
 * @remarks
 * This object defines the different variants for the sheet component, such as the position and animation styles.
 */
const sheetVariants = cva(
  [
    'fixed z-50 gap-4 bg-background shadow-lg transition ease-in-out',
    /* Entering */
    'data-[entering]:duration-500 data-[entering]:animate-in',
    /* Exiting */
    'data-[exiting]:duration-300  data-[exiting]:animate-out',
  ],
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[entering]:slide-in-from-top data-[exiting]:slide-out-to-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[entering]:slide-in-from-bottom data-[exiting]:slide-out-to-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[entering]:slide-in-from-left data-[exiting]:slide-out-to-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4  border-l data-[entering]:slide-in-from-right data-[exiting]:slide-out-to-right sm:max-w-sm',
      },
    },
  },
);

/**
 * Represents a dialog component.
 */
const Dialog = AriaDialog;

/**
 * A component that triggers a dialog.
 */
const DialogTrigger = AriaDialogTrigger;

/**
 * Renders a dialog overlay component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.className] - The class name for the overlay.
 * @param {boolean} [props.isDismissable=true] - Indicates if the overlay is dismissable.
 * @returns {JSX.Element} The rendered dialog overlay.
 */
function DialogOverlay({
  className,
  isDismissable = true,
  ...props
}: AriaModalOverlayProps): JSX.Element {
  return (
    <AriaModalOverlay
      className={composeRenderProps(className, (className) =>
        cn(
          'fixed inset-0 z-50 bg-black/80',
          /* Exiting */
          'data-[exiting]:duration-300 data-[exiting]:animate-out data-[exiting]:fade-out-0',
          /* Entering */
          'data-[entering]:animate-in data-[entering]:fade-in-0',
          className,
        ),
      )}
      isDismissable={isDismissable}
      {...props}
    />
  );
}

/**
 * Props for the DialogContent component.
 */
type DialogContentProps = {
  children?: AriaDialogProps['children'];
  role?: AriaDialogProps['role'];
  closeButton?: boolean;
} & Omit<React.ComponentProps<typeof AriaModal>, 'children'> &
  VariantProps<typeof sheetVariants>;

/**
 * Renders the content of a dialog.
 *
 * @component
 * @param {DialogContentProps} props - The props for the DialogContent component.
 * @param {string} [props.className] - The class name for the DialogContent component.
 * @param {React.ReactNode} [props.children] - The children of the DialogContent component.
 * @param {string} [props.side] - The side of the DialogContent component.
 * @param {string} [props.role] - The role of the DialogContent component.
 * @param {boolean} [props.closeButton=true] - Indicates if the DialogContent component has a close button.
 * @returns {JSX.Element} The rendered DialogContent component.
 */
function DialogContent({
  className,
  children,
  side,
  role,
  closeButton = true,
  ...props
}: DialogContentProps): JSX.Element {
  return (
    <AriaModal
      className={composeRenderProps(className, (className) =>
        cn(
          side
            ? sheetVariants({ side, className: 'h-full p-6' })
            : 'fixed left-[50vw] top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 border bg-background p-6 shadow-lg duration-200 data-[exiting]:duration-300 data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[entering]:slide-in-from-left-1/2 data-[entering]:slide-in-from-top-[48%] data-[exiting]:slide-out-to-left-1/2 data-[exiting]:slide-out-to-top-[48%] sm:rounded-lg md:w-full',
          className,
        ),
      )}
      {...props}
    >
      <AriaDialog
        className={cn(!side && 'grid h-full gap-4', 'h-full outline-none')}
        role={role}
      >
        {composeRenderProps(children, (children, renderProps) => (
          <>
            {children}
            {closeButton && (
              <AriaButton
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[disabled]:pointer-events-none data-[entering]:bg-accent data-[entering]:text-muted-foreground data-[hovered]:opacity-100 data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2"
                onPress={renderProps.close}
              >
                <Icons.Cross2 className="size-4" />
                <span className="sr-only">Close</span>
              </AriaButton>
            )}
          </>
        ))}
      </AriaDialog>
    </AriaModal>
  );
}

/**
 * Renders the header of a dialog component.
 *
 * @component
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The HTML attributes for the div element.
 * @param {string} [props.className] - The class name for the div element.
 * @returns {JSX.Element} The rendered header component.
 */
function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={cn(
        'flex flex-col space-y-1.5 text-center sm:text-left',
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders the footer of a dialog component.
 *
 * @component
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The HTML attributes for the div element.
 * @param {string} [props.className] - The class name for the div element.
 * @returns {JSX.Element} The rendered footer component.
 */
function DialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders the title for the dialog.
 *
 * @component
 * @param {AriaHeadingProps} props - The props for the title component.
 * @param {string} [props.className] - The class name for the title component.
 * @returns {JSX.Element} The rendered title component.
 */
function DialogTitle({ className, ...props }: AriaHeadingProps): JSX.Element {
  return (
    <AriaHeading
      className={cn(
        'text-lg font-semibold leading-none tracking-tight',
        className,
      )}
      slot="title"
      {...props}
    />
  );
}

/**
 * Renders a description for a dialog.
 *
 * @component
 * @param {React.HTMLAttributes<HTMLParagraphElement>} props - The HTML attributes for the <p> element.
 * @param {string} [props.className] - The class name for the <p> element.
 * @returns {JSX.Element} The rendered description component.
 */
function DialogDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): JSX.Element {
  return (
    <p
      className={cn(
        'flex flex-col space-y-1.5 text-center sm:text-left',
        className,
      )}
      {...props}
    />
  );
}

export type { DialogContentProps };
export {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
};