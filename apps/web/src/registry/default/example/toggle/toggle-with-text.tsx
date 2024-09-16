import { Icons } from '@/registry/default/ui/icons';
import { Toggle } from '@/registry/default/ui/toggle';

export function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <Icons.FontItalic className="mr-2 size-4" />
      Italic
    </Toggle>
  );
}

export default ToggleWithText;
