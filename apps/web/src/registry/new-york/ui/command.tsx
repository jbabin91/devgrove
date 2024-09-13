'use client';

import { Command as CommandPrimitive } from 'cmdk';
import { type DialogProps } from 'react-aria-components';

import { cn } from '~/libs/utils';

type CommandProps = {} & React.ComponentProps<typeof CommandPrimitive>;

function Command({ className, children, ...props }: CommandProps) {
  <CommandPrimitive
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
      className,
    )}
    {...props}
  >
    {children}
  </CommandPrimitive>;
}

type CommandDialogProps = {} & DialogProps;

// function CommandDialog({ children, ...props }: CommandDialogProps) {
//   return (
//     <Dialog {...props}>
//       <DialogOverlay>
//         <DialogContent className="overflow-hidden p-0">
//           {({ close }) => <Command>{children}</Command>}
//         </DialogContent>
//       </DialogOverlay>
//     </Dialog>
//   );
// }

export type { CommandDialogProps, CommandProps };
export { Command };
