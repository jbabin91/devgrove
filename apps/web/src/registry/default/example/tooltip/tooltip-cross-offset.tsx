import { Button } from '@/registry/default/ui/button';
import { Icons } from '@/registry/default/ui/icons';
import { Tooltip, TooltipTrigger } from '@/registry/default/ui/tooltip';

export function TooltipOffset() {
  return (
    <TooltipTrigger>
      <Button aria-label="Edit" size="icon" variant="outline">
        <Icons.MoveRight className="size-4" />
      </Button>
      <Tooltip crossOffset={60} placement="bottom">
        This will shift over to the right.
      </Tooltip>
    </TooltipTrigger>
  );
}

export default TooltipOffset;
