import { siteConfig } from '~/config/site';
import { Link } from '~/registry/new-york/ui/link';

import { Icons } from './icons';
import { MainNav } from './main-nav';
import { ModeToggle } from './mode-toggle';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        {/* <MobileNav /> */}
        <div className="flex flex-1 items-center  justify-end space-x-2">
          {/* <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div> */}
          <nav className="flex flex-1 items-center justify-end gap-2">
            {/* <Search /> */}
            {/* <ThemeCustomizer hide={true} shrink={true} /> */}
            <Link
              className="hidden sm:inline-flex"
              href={siteConfig.links.github}
              rel="noreferrer"
              size="icon"
              target="_blank"
              variant="ghost"
            >
              <Icons.gitHub className="size-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              className="hidden sm:inline-flex"
              href={siteConfig.links.twitter}
              rel="noreferrer"
              size="icon"
              target="_blank"
              variant="ghost"
            >
              <Icons.twitter className="size-3 fill-current" />
              <span className="sr-only">Twitter</span>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}