import { Mail } from 'lucide-react';

import { Button } from '~/registry/default/ui/button';

export function ButtonWithIcon() {
  return <Button icon={<Mail className="size-4" />}>Login with Email</Button>;
}

export default ButtonWithIcon;
