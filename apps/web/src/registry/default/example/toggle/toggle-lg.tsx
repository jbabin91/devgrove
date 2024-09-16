import { Icons } from '@/registry/default/ui/icons';
import { Toggle } from '@/registry/default/ui/toggle';

export function ToggleLg() {
  return (
    <Toggle aria-label="Toggle italic" size="lg">
      <Icons.FontItalic className="size-4" />
    </Toggle>
  );
}

export default ToggleLg;
