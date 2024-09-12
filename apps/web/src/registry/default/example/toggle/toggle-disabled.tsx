import { Underline } from 'lucide-react';

import { Toggle } from '~/registry/default/ui/toggle';

export function ToggleDisabled() {
  return (
    <Toggle isDisabled aria-label="Toggle italic">
      <Underline className="size-4" />
    </Toggle>
  );
}

export default ToggleDisabled;
