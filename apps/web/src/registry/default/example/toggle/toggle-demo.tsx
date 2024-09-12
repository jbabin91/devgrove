import { Icons } from '~/registry/default/ui/icons';
import { Toggle } from '~/registry/default/ui/toggle';

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Icons.FontBold className="size-4" />
    </Toggle>
  );
}

export default ToggleDemo;
