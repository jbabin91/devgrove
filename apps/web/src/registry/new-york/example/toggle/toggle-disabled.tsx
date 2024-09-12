import { Icons } from '~/registry/new-york/ui/icons';
import { Toggle } from '~/registry/new-york/ui/toggle';

export function ToggleDisabled() {
  return (
    <Toggle isDisabled aria-label="Toggle italic">
      <Icons.Underline className="size-4" />
    </Toggle>
  );
}

export default ToggleDisabled;
