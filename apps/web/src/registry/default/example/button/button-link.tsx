import { Link } from 'react-aria-components';

import { buttonVariants } from '~/registry/default/ui/button';

export function ButtonLink() {
  return <Link className={buttonVariants({ variant: 'link' })}>Link</Link>;
}

export default ButtonLink;
