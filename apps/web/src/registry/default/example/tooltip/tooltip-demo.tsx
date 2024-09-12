import { Pencil } from 'lucide-react';

import { Button } from '~/registry/default/ui/button';
import { Tooltip, TooltipTrigger } from '~/registry/default/ui/tooltip';

export function TooltipDemo() {
  return (
    <TooltipTrigger>
      <Button aria-label="Edit" size="icon" variant="outline">
        <Pencil className="size-4" />
      </Button>
      <Tooltip>Edit</Tooltip>
    </TooltipTrigger>
  );
}

export default TooltipDemo;
