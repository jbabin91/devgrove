'use client';

import { useEffect, useMemo, useState } from 'react';

import { useMounted } from '~/hooks/use-mounted';
import { type TableOfContents } from '~/libs/toc';
import { cn } from '~/libs/utils';

type TocProps = {
  toc: TableOfContents;
};

export function DashboardTableOfContents({ toc }: TocProps) {
  const mounted = useMounted();

  const itemIds = useMemo(
    () =>
      toc.items
        ? toc.items
            .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split('#')[1])
        : [],
    [toc],
  );

  const activeHeading = useActiveItem(itemIds);

  if (!toc?.items || !mounted) {
    return null;
  }

  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <Tree activeItem={activeHeading} tree={toc} />
    </div>
  );
}

function useActiveItem(itemIds: (string | undefined)[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: `0% 0% -80% 0%` },
    );

    if (itemIds)
      for (const id of itemIds) {
        const element = document.querySelector(`#${id}`);
        if (element) {
          observer.observe(element);
        }
      }

    return () => {
      if (itemIds)
        for (const id of itemIds) {
          const element = document.querySelector(`#${id}`);
          if (element) {
            observer.unobserve(element);
          }
        }
    };
  }, [itemIds]);

  return activeId;
}

type TreeProps = {
  tree: TableOfContents;
  level?: number;
  activeItem?: string | null;
};

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree?.items?.length && level < 4 ? (
    <ul className={cn('m-0 list-none', { 'pl-4': level !== 1 })}>
      {tree.items.map((item, index) => {
        return (
          <li key={index} className={cn('mt-0 pt-2')}>
            <a
              className={cn(
                'inline-block no-underline transition-colors hover:text-foreground',
                item.url === `#${activeItem}`
                  ? 'font-medium text-foreground'
                  : 'text-muted-foreground',
              )}
              href={item.url}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree activeItem={activeItem} level={level + 1} tree={item} />
            ) : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}
