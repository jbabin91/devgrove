import { Icons } from '@/registry/new-york/ui/icons';
import { Toggle } from '@/registry/new-york/ui/toggle';

export function ToggleLg() {
  return (
    <Toggle aria-label="Toggle italic" size="lg">
      <Icons.FontItalic className="size-4" />
    </Toggle>
  );
}

export default ToggleLg;
