'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

/**
 * Props for the Toaster component.
 */
type ToasterProps = React.ComponentProps<typeof Sonner>;

/**
 * Renders a toaster component.
 *
 * @component
 * @param {ToasterProps} props - The props for the toaster component.
 * @returns {JSX.Element} The rendered toaster component.
 */
function Toaster({ ...props }: ToasterProps): JSX.Element {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      closeButton
      richColors
      className="toaster group"
      theme={theme as ToasterProps['theme']}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
}

export type { ToasterProps };
export { Toaster };
