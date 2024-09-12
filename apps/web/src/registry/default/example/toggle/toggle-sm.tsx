import { Italic } from 'lucide-react';

import { Toggle } from '~/registry/default/ui/toggle';

export function ToggleSm() {
  return (
    <Toggle aria-label="Toggle italic" size="sm">
      <Italic className="size-4" />
    </Toggle>
  );
}

export default ToggleSm;
