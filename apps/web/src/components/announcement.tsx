'use client';

import { Link } from 'react-aria-components';

import { Icons } from './icons';

export function Announcement() {
  return (
    <Link
      className="group inline-flex items-center px-0.5 text-sm font-medium"
      href="/docs/changelog"
    >
      <Icons.Terminal className="mr-2 size-4 stroke-pink-500" />
      <span className="underline-offset-4 group-hover:underline">
        npx shadcn init
      </span>
      <Icons.ArrowRight className="ml-1 size-4" />
    </Link>
  );
}
