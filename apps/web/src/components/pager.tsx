import { type Doc } from 'contentlayer/generated';

import { Icons } from '~/components/icons';
import { docsConfig } from '~/config/docs';
import { Link } from '~/registry/new-york/ui/link';
import { type NavItem, type NavItemWithChildren } from '~/types/nav';

type DocsPagerProps = {
  doc: Doc;
};

export function DocsPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc(doc);

  if (!pager) {
    return null;
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev?.href && (
        <Link href={pager.prev.href} variant="outline">
          <Icons.ChevronLeft className="mr-2 size-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next?.href && (
        <Link className={'ml-auto'} href={pager.next.href} variant="outline">
          {pager.next.title}
          <Icons.ChevronRight className="ml-2 size-4" />
        </Link>
      )}
    </div>
  );
}

export function getPagerForDoc(doc: Doc) {
  const flattenedLinks = [null, ...flatten(docsConfig.sidebarNav), null];
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href,
  );
  const prev = activeIndex === 0 ? null : flattenedLinks[activeIndex - 1];
  const next =
    activeIndex === flattenedLinks.length - 1
      ? null
      : flattenedLinks[activeIndex + 1];
  return {
    next,
    prev,
  };
}

export function flatten(links: NavItemWithChildren[]): NavItem[] {
  return (
    links
      // eslint-disable-next-line unicorn/no-array-reduce
      .reduce<NavItem[]>((flat, link) => {
        // eslint-disable-next-line unicorn/prefer-spread
        return flat.concat(link.items?.length ? flatten(link.items) : link);
      }, [])
      .filter((link) => !link?.disabled)
  );
}
