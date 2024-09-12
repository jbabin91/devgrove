import { Icons } from '~/registry/new-york/ui/icons';
import { Toggle } from '~/registry/new-york/ui/toggle';

export function ToggleSm() {
  return (
    <Toggle aria-label="Toggle italic" size="sm">
      <Icons.FontItalic className="size-4" />
    </Toggle>
  );
}

export default ToggleSm;
