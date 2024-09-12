'use client';

import { Fragment } from 'react';
import { Header, Link, Section } from 'react-aria-components';

import { docsConfig } from '~/config/docs';
import { siteConfig } from '~/config/site';
import { Button } from '~/registry/new-york/ui/button';
import {
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from '~/registry/new-york/ui/dialog';
import { ListBox, ListBoxItem } from '~/registry/new-york/ui/list-box';

import { Icons } from './icons';

export function MobileNav() {
  return (
    <>
      <DialogTrigger>
        <Button className="text-primary md:hidden" size="icon" variant="ghost">
          <Icons.Menu className="size-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <DialogOverlay>
          <DialogContent className="w-3/4 px-0" side="left">
            {({ close }) => (
              <>
                <div className="p-4">
                  <Link
                    className="flex w-fit items-center"
                    href="/"
                    onPress={() => close()}
                  >
                    <Icons.logo className="mr-2 size-4 text-primary" />
                    <span className="font-bold text-primary">
                      {siteConfig.name}
                    </span>
                  </Link>
                </div>
                <div className="h-[calc(100vh-8rem)] overflow-y-auto p-4 pb-10 pt-1">
                  <ListBox
                    aria-label="Main Navigation"
                    className="flex flex-col space-y-3"
                    onAction={() => close()}
                  >
                    <section
                      aria-label="Main Navigation"
                      className=" flex flex-col space-y-3"
                    >
                      {docsConfig.mainNav?.map((item) =>
                        item.href ? (
                          <ListBoxItem
                            key={item.href}
                            href={item.href}
                            textValue={item.title}
                          >
                            {item.title}
                          </ListBoxItem>
                        ) : null,
                      )}
                    </section>
                    {docsConfig.sidebarNav?.map((item) => (
                      <Section
                        key={item.title}
                        className="flex flex-col space-y-3 pt-6"
                        id={item.title}
                      >
                        <Header className="font-medium">{item.title}</Header>
                        {item?.items?.length &&
                          item.items.map((item) => (
                            <Fragment key={item.href}>
                              {!item.disabled &&
                                (item.href ? (
                                  <ListBoxItem
                                    className="text-muted-foreground"
                                    href={item.href}
                                    textValue={item.title}
                                  >
                                    {item.title}
                                    {item.label &&
                                      (item.label == 'v2' ? (
                                        <span className="ml-2 rounded-md bg-primary px-1.5 py-0.5 text-xs leading-none text-primary-foreground no-underline group-hover:no-underline ">
                                          {item.label}
                                        </span>
                                      ) : (
                                        <span className="ml-2 rounded-md bg-primary px-1.5 py-0.5 text-xs leading-none text-primary-foreground no-underline group-hover:no-underline ">
                                          {item.label}
                                        </span>
                                      ))}
                                  </ListBoxItem>
                                ) : (
                                  item.title
                                ))}
                            </Fragment>
                          ))}
                      </Section>
                    ))}
                  </ListBox>
                </div>
              </>
            )}
          </DialogContent>
        </DialogOverlay>
      </DialogTrigger>
      <Link className="flex items-center space-x-2 p-2 md:hidden" href="/">
        <span className="font-bold text-primary">{siteConfig.name}</span>
      </Link>
    </>
  );
}
