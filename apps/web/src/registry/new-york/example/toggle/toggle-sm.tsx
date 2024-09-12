import { FontItalicIcon } from '@radix-ui/react-icons';

import { Toggle } from '~/registry/new-york/ui/toggle';

export function ToggleSm() {
  return (
    <Toggle aria-label="Toggle italic" size="sm">
      <FontItalicIcon className="size-4" />
    </Toggle>
  );
}

export default ToggleSm;
