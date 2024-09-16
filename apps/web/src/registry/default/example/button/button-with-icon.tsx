import { Button } from '@/registry/default/ui/button';
import { Icons } from '@/registry/default/ui/icons';

export function ButtonWithIcon() {
  return (
    <Button icon={<Icons.MailOpen className="size-4" />}>
      Login with Email
    </Button>
  );
}

export default ButtonWithIcon;
