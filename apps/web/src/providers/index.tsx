import { Analytics } from '~/components/analytics';

import { AriaProvider } from './aria-provider';
import { LegendStateProvider } from './legend-state-provider';
import { ThemeProvider } from './theme-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LegendStateProvider>
      <ThemeProvider
        disableTransitionOnChange
        enableSystem
        attribute="class"
        defaultTheme="system"
      >
        <AriaProvider>{children}</AriaProvider>
        <Analytics />
      </ThemeProvider>
    </LegendStateProvider>
  );
}
