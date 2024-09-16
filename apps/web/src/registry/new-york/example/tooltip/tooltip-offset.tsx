import { Button } from '@/registry/new-york/ui/button';
import { Icons } from '@/registry/new-york/ui/icons';
import { Tooltip, TooltipTrigger } from '@/registry/new-york/ui/tooltip';

export function TooltipOffset() {
  return (
    <TooltipTrigger>
      <Button aria-label="Edit" size="icon" variant="outline">
        <Icons.ArrowUp className="size-4" />
      </Button>
      <Tooltip offset={50} placement="top">
        This will shift up.
      </Tooltip>
    </TooltipTrigger>
  );
}

export default TooltipOffset;
