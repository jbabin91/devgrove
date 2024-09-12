import { Button } from '~/registry/new-york/ui/button';
import { Icons } from '~/registry/new-york/ui/icons';

export function ButtonWithIcon() {
  return (
    <Button icon={<Icons.EnvelopeOpen className="size-4" />}>
      Login with Email
    </Button>
  );
}

export default ButtonWithIcon;
