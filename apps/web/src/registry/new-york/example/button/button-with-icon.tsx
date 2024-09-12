import { EnvelopeOpenIcon } from '@radix-ui/react-icons';

import { Button } from '~/registry/new-york/ui/button';

export function ButtonWithIcon() {
  return (
    <Button icon={<EnvelopeOpenIcon className="size-4" />}>
      Login with Email
    </Button>
  );
}

export default ButtonWithIcon;
