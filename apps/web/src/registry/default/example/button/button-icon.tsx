import { ChevronRight } from 'lucide-react';

import { Button } from '~/registry/default/ui/button';

export function ButtonIcon() {
  return (
    <Button aria-label="Next" size="icon" variant="outline">
      <ChevronRight className="size-4" />
    </Button>
  );
}

export default ButtonIcon;
