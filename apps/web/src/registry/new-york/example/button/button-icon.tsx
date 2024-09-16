import { Button } from '@/registry/new-york/ui/button';
import { Icons } from '@/registry/new-york/ui/icons';

export function ButtonIcon() {
  <Button aria-label="Next" size="icon" variant="outline">
    <Icons.ChevronRight className="size-4" />
  </Button>;
}

export default ButtonIcon;
