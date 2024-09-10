'use client';

import { enableReactTracking } from '@legendapp/state/config/enableReactTracking';

enableReactTracking({
  auto: true,
});

export function LegendStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
