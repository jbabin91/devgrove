import { FontItalicIcon } from '@radix-ui/react-icons';

import { Toggle } from '~/registry/new-york/ui/toggle';

export function ToggleOutline() {
  return (
    <Toggle aria-label="Toggle italic" variant="outline">
      <FontItalicIcon className="size-4" />
    </Toggle>
  );
}

export default ToggleOutline;
