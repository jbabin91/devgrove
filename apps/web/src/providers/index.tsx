import { AriaProvider } from './aria-provider';
import { ThemeProvider } from './theme-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      enableSystem
      attribute="class"
      defaultTheme="system"
    >
      <AriaProvider>{children}</AriaProvider>
    </ThemeProvider>
  );
}
