'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
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

/**
 * Represents the sheet variants for the dialog component.
 *
 * @remarks
 * The sheet variants define the different styles and animations for the dialog sheet.
 *
 * @public
 */
const sheetVariants = cva(
  [
    'fixed z-50 gap-4 bg-background shadow-lg transition ease-in-out',
    /* Entering */
    'data-[entering]:animate-in data-[entering]:duration-500',
    /* Exiting */
    'data-[exiting]:animate-out  data-[exiting]:duration-300',
  ],
  {
    variants: {
      side: {
        top: 'data-[entering]:slide-in-from-top data-[exiting]:slide-out-to-top inset-x-0 top-0 border-b',
        bottom:
          'data-[entering]:slide-in-from-bottom data-[exiting]:slide-out-to-bottom inset-x-0 bottom-0 border-t',
        left: 'data-[entering]:slide-in-from-left data-[exiting]:slide-out-to-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
        right:
          'data-[entering]:slide-in-from-right data-[exiting]:slide-out-to-right inset-y-0 right-0  h-full w-3/4 border-l sm:max-w-sm',
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
 * @param {string} [props.className] - The class name for the dialog overlay.
 * @param {boolean} [props.isDismissable=true] - Determines if the dialog overlay is dismissable.
 * @returns {JSX.Element} The rendered dialog overlay component.
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
 * @param className - The CSS class name for the dialog content.
 * @param children - The content of the dialog.
 * @param side - The side of the dialog (optional).
 * @param role - The ARIA role for the dialog (optional).
 * @param closeButton - Indicates whether to show the close button (optional, default: true).
 * @param props - Additional props for the dialog content.
 * @returns {JSX.Element} The rendered dialog content.
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
                className="data-[entering]:bg-accent data-[entering]:text-muted-foreground data-[focused]:ring-ring absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[disabled]:pointer-events-none data-[hovered]:opacity-100 data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-offset-2"
                onPress={renderProps.close}
              >
                <X className="size-4" />
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
 * @param {string} props.className - The class name for the div element.
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
 * Renders the footer of a dialog.
 *
 * @component
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The HTML attributes for the div element.
 * @param {string} [props.className] - The class name for the div element.
 * @returns {JSX.Element} The rendered dialog footer.
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
 * Renders the title of a dialog.
 *
 * @component
 * @param {AriaHeadingProps} props - The props for the DialogTitle component.
 * @param {string} props.className - The class name for the DialogTitle component.
 * @returns {JSX.Element} The rendered DialogTitle component.
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
 * @param {React.HTMLAttributes<HTMLParagraphElement>} props - The HTML attributes for the paragraph element.
 * @param {string} props.className - The class name for the paragraph element.
 * @returns {JSX.Element} The rendered paragraph element.
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