import { Button } from '@/registry/new-york/ui/button';
import { Icons } from '@/registry/new-york/ui/icons';
import { Tooltip, TooltipTrigger } from '@/registry/new-york/ui/tooltip';

export function TooltipDemo() {
  return (
    <TooltipTrigger>
      <Button aria-label="Edit" size="icon" variant="outline">
        <Icons.Pencil1 className="size-4" />
      </Button>
      <Tooltip>Edit</Tooltip>
    </TooltipTrigger>
  );
}

export default TooltipDemo;
