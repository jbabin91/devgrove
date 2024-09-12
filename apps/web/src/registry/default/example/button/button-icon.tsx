import { Button } from '~/registry/default/ui/button';
import { Icons } from '~/registry/default/ui/icons';

export function ButtonIcon() {
  return (
    <Button aria-label="Next" size="icon" variant="outline">
      <Icons.ChevronRight className="size-4" />
    </Button>
  );
}

export default ButtonIcon;
