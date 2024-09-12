import { Icons } from '~/registry/default/ui/icons';
import { Toggle } from '~/registry/default/ui/toggle';

export function ToggleDisabled() {
  return (
    <Toggle isDisabled aria-label="Toggle italic">
      <Icons.Underline className="size-4" />
    </Toggle>
  );
}

export default ToggleDisabled;
