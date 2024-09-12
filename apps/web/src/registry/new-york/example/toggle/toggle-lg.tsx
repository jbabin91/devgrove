import { FontItalicIcon } from '@radix-ui/react-icons';

import { Toggle } from '~/registry/new-york/ui/toggle';

export function ToggleLg() {
  return (
    <Toggle aria-label="Toggle italic" size="lg">
      <FontItalicIcon className="size-4" />
    </Toggle>
  );
}

export default ToggleLg;
