import { Icons } from '~/registry/new-york/ui/icons';
import { Toggle } from '~/registry/new-york/ui/toggle';

export function ToggleOutline() {
  return (
    <Toggle aria-label="Toggle italic" variant="outline">
      <Icons.FontItalic className="size-4" />
    </Toggle>
  );
}

export default ToggleOutline;
