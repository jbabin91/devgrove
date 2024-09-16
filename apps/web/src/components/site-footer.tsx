'use client';

import { Link } from 'react-aria-components';

import { siteConfig } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Modified by{' '}
          <Link
            className="font-medium underline underline-offset-4"
            href={siteConfig.links.twitter}
            rel="noreferrer"
            target="_blank"
          >
            Jace
          </Link>
          . Template by{' '}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://x.com/shadcn"
            rel="noreferrer"
            target="_blank"
          >
            shadcn
          </Link>
          . Source code{' '}
          <Link
            className="font-medium underline underline-offset-4"
            href={siteConfig.links.github}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </Link>
        </p>
      </div>
    </footer>
  );
}
