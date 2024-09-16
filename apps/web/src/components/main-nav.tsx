'use client';

import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Link } from '@/registry/new-york/ui/link';

import { Icons } from './icons';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link
        className="flex items-center space-x-2 text-primary"
        href="/"
        variant="link"
      >
        <Icons.logo className="size-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center  text-sm font-medium">
        <Link
          className={cn(
            'px-2',
            pathname === '/docs' ? 'text-foreground' : 'text-foreground/60',
          )}
          href="/docs"
          variant="link"
        >
          Documentation
        </Link>
        <Link
          className={cn(
            'px-2',
            pathname?.startsWith('/docs/components')
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
          href="/docs/components"
          variant="link"
        >
          Components
        </Link>
      </nav>
    </div>
  );
}
