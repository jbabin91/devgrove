import { MoveUp } from 'lucide-react';

import { Button } from '~/registry/default/ui/button';
import { Tooltip, TooltipTrigger } from '~/registry/default/ui/tooltip';

export function TooltipOffset() {
  return (
    <TooltipTrigger>
      <Button aria-label="Edit" size="icon" variant="outline">
        <MoveUp className="size-4" />
      </Button>
      <Tooltip offset={50} placement="top">
        This will shift up.
      </Tooltip>
    </TooltipTrigger>
  );
}

export default TooltipOffset;
