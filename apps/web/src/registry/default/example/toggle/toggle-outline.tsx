import { Italic } from 'lucide-react';

import { Toggle } from '~/registry/default/ui/toggle';

export function ToggleOutline() {
  return (
    <Toggle aria-label="Toggle italic" variant="outline">
      <Italic className="size-4" />
    </Toggle>
  );
}

export default ToggleOutline;
