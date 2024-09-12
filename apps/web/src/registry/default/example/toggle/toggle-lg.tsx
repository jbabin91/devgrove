import { Italic } from 'lucide-react';

import { Toggle } from '~/registry/default/ui/toggle';

export function ToggleLg() {
  return (
    <Toggle aria-label="Toggle italic" size="lg">
      <Italic className="size-4" />
    </Toggle>
  );
}

export default ToggleLg;
