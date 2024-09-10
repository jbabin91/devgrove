import { LegendStateProvider } from './legend-state-provider';
import { ThemeProvider } from './theme-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LegendStateProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </LegendStateProvider>
  );
}
