import { Button } from '~/registry/default/ui/button';
import { Icons } from '~/registry/default/ui/icons';
import { Tooltip, TooltipTrigger } from '~/registry/default/ui/tooltip';

export function TooltipDemo() {
  return (
    <TooltipTrigger>
      <Button aria-label="Edit" size="icon" variant="outline">
        <Icons.Pencil className="size-4" />
      </Button>
      <Tooltip>Edit</Tooltip>
    </TooltipTrigger>
  );
}

export default TooltipDemo;
