import { Icons } from '@/registry/default/ui/icons';
import { Toggle } from '@/registry/default/ui/toggle';

export function ToggleOutline() {
  return (
    <Toggle aria-label="Toggle italic" variant="outline">
      <Icons.FontItalic className="size-4" />
    </Toggle>
  );
}

export default ToggleOutline;
