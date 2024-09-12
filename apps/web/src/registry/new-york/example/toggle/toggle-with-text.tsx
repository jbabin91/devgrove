import { FontItalicIcon } from '@radix-ui/react-icons';

import { Toggle } from '~/registry/new-york/ui/toggle';

export function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <FontItalicIcon className="mr-2 size-4" />
      Italic
    </Toggle>
  );
}

export default ToggleWithText;
