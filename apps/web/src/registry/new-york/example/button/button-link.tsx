import { buttonVariants } from '@/registry/new-york/ui/button';
import { Link } from '@/registry/new-york/ui/link';

export function ButtonLink() {
  return <Link className={buttonVariants({ variant: 'link' })}>Link</Link>;
}

export default ButtonLink;
