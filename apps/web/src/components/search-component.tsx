'use client';

import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react';
import { useCallback, useState } from 'react';

import { Icons } from '~/components/icons';
import { env } from '~/config/env';
import { cn } from '~/libs/utils';
import { Button } from '~/registry/new-york/ui/button';

export function Search() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useDocSearchKeyboardEvents({
    isOpen,
    onClose,
    onOpen,
  });

  return (
    <>
      <Button
        className={cn(
          'relative h-8 w-full justify-start rounded-[0.5rem] bg-background pl-2 text-sm font-normal text-muted-foreground shadow-none lg:w-fit lg:pr-12',
        )}
        variant="outline"
        onPress={() => setIsOpen(true)}
      >
        <Icons.Search className="h-w mr-2 w-4" />
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      {isOpen ? (
        <DocSearchModal
          apiKey={env.NEXT_PUBLIC_DOCSEARCH_API_KEY}
          appId={env.NEXT_PUBLIC_DOCSEARCH_APP_ID}
          indexName={env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME}
          initialScrollY={window.scrollY}
          onClose={onClose}
        />
      ) : null}
    </>
  );
}
