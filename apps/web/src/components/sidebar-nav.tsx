'use client';

import { usePathname } from 'next/navigation';
import { Link } from 'react-aria-components';

import { cn } from '@/libs/utils';
import { type SidebarNavItem } from '@/types/nav';

export type DocsSidebarNavProps = {
  items: SidebarNavItem[];
};

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname();

  return items.length > 0 ? (
    <div className="w-full py-8">
      {items.map((item, index) => (
        <div key={index} className="pb-4">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {item.title}
          </h4>
          {item?.items?.length ? (
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          ) : null}
        </div>
      ))}
    </div>
  ) : null;
}

type DocsSidebarNavItemsProps = {
  items: SidebarNavItem[];
  pathname: string | null;
};

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items?.sort().map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            className={cn(
              'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline',
              item.disabled && 'cursor-not-allowed opacity-60',
              pathname === item.href
                ? 'font-medium text-foreground'
                : 'text-muted-foreground',
            )}
            href={item.href}
            rel={item.external ? 'noreferrer' : ''}
            target={item.external ? '_blank' : ''}
          >
            {item.title}
            {item.label ? (
              <span className="ml-2 rounded-md bg-primary px-1.5 py-0.5 text-xs leading-none text-primary-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            ) : null}
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              'flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline',
              item.disabled && 'cursor-no-allowed opacity-60',
            )}
          >
            {item.title}
            {item.label ? (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            ) : null}
          </span>
        ),
      )}
    </div>
  ) : null;
}
