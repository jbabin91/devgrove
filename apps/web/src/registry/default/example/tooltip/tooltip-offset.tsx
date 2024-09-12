import { Button } from '~/registry/default/ui/button';
import { Icons } from '~/registry/default/ui/icons';
import { Tooltip, TooltipTrigger } from '~/registry/default/ui/tooltip';

export function TooltipOffset() {
  return (
    <TooltipTrigger>
      <Button aria-label="Edit" size="icon" variant="outline">
        <Icons.MoveUp className="size-4" />
      </Button>
      <Tooltip offset={50} placement="top">
        This will shift up.
      </Tooltip>
    </TooltipTrigger>
  );
}

export default TooltipOffset;
