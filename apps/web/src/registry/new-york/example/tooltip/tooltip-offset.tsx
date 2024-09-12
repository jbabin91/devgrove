import { ArrowUpIcon } from '@radix-ui/react-icons';

import { Button } from '~/registry/new-york/ui/button';
import { Tooltip, TooltipTrigger } from '~/registry/new-york/ui/tooltip';

export function TooltipOffset() {
  return (
    <TooltipTrigger>
      <Button aria-label="Edit" size="icon" variant="outline">
        <ArrowUpIcon className="size-4" />
      </Button>
      <Tooltip offset={50} placement="top">
        This will shift up.
      </Tooltip>
    </TooltipTrigger>
  );
}

export default TooltipOffset;
