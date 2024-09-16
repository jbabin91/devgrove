import { Icons } from '@/registry/new-york/ui/icons';
import { Toggle } from '@/registry/new-york/ui/toggle';

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Icons.FontBold className="size-4" />
    </Toggle>
  );
}

export default ToggleDemo;
