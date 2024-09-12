import { UnderlineIcon } from '@radix-ui/react-icons';

import { Toggle } from '~/registry/new-york/ui/toggle';

export function ToggleDisabled() {
  return (
    <Toggle isDisabled aria-label="Toggle italic">
      <UnderlineIcon className="size-4" />
    </Toggle>
  );
}

export default ToggleDisabled;
