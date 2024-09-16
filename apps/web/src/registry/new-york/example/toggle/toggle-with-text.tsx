import { Icons } from '@/registry/new-york/ui/icons';
import { Toggle } from '@/registry/new-york/ui/toggle';

export function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <Icons.FontItalic className="mr-2 size-4" />
      Italic
    </Toggle>
  );
}

export default ToggleWithText;
