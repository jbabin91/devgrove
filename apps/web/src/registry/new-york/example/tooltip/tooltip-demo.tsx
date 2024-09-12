import { Pencil1Icon } from '@radix-ui/react-icons';

import { Button } from '~/registry/new-york/ui/button';
import { Tooltip, TooltipTrigger } from '~/registry/new-york/ui/tooltip';

export function TooltipDemo() {
  return (
    <TooltipTrigger>
      <Button aria-label="Edit" size="icon" variant="outline">
        <Pencil1Icon className="size-4" />
      </Button>
      <Tooltip>Edit</Tooltip>
    </TooltipTrigger>
  );
}

export default TooltipDemo;
