import { Button } from '~/registry/new-york/ui/button';
import { Icons } from '~/registry/new-york/ui/icons';
import { Tooltip, TooltipTrigger } from '~/registry/new-york/ui/tooltip';

export function TooltipOffset() {
  return (
    <TooltipTrigger>
      <Button aria-label="Edit" size="icon" variant="outline">
        <Icons.ArrowRight className="size-4" />
      </Button>
      <Tooltip crossOffset={60} placement="bottom">
        This will shift over to the right.
      </Tooltip>
    </TooltipTrigger>
  );
}

export default TooltipOffset;
