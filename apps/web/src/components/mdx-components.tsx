'use client';

import { YouTubeEmbed } from '@next/third-parties/google';
import Image from 'next/image';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer2/hooks';

import { Callout } from '~/components/callout';
import { CodeBlockWrapper } from '~/components/code-black-wrapper';
import { ComponentCard, ComponentCards } from '~/components/component-cards';
import { ComponentExample } from '~/components/component-example';
import { ComponentPreview } from '~/components/component-preview';
import { ComponentSource } from '~/components/component-source';
import { CopyButton, CopyNpmCommandButton } from '~/components/copy-button';
import { FrameworkDocs } from '~/components/framework-docs';
import { StyleWrapper } from '~/components/style-wrapper';
import { type Event } from '~/libs/events';
import { useThemeStore } from '~/libs/use-theme-store';
import { cn } from '~/libs/utils';
import { Tab, TabList, TabPanel, Tabs } from '~/registry/new-york/ui/tabs';
import { type Style } from '~/registry/styles';
import { type NpmCommands } from '~/types/unist';

const components = {
  Callout,
  CodeBlockWrapper: ({ ...props }) => (
    <CodeBlockWrapper className="rounded-md border" {...props} />
  ),
  ComponentCard,
  ComponentCards,
  ComponentExample,
  ComponentPreview,
  ComponentSource,
  FrameworkDocs: ({
    className,
    ...props
  }: React.ComponentProps<typeof FrameworkDocs>) => (
    <FrameworkDocs className={cn(className)} {...props} />
  ),
  Image,
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        'flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10',
        className,
      )}
      {...props}
    />
  ),
  Step: ({ className, children, ...props }: React.ComponentProps<'h3'>) => (
    <h3
      className={cn(
        'font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
      {...props}
    />
  ),
  Tabs: ({
    className,
    defaultValue,
    ...props
  }: React.ComponentProps<typeof Tabs> & { defaultValue: string }) => (
    <Tabs
      className={cn('relative mt-6 w-full', className)}
      defaultSelectedKey={defaultValue}
      {...props}
    />
  ),
  TabsContent: ({
    className,
    value,
    ...props
  }: React.ComponentProps<typeof TabPanel> & { value: string }) => (
    <TabPanel
      className={cn(
        'relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold',
        className,
      )}
      id={value}
      {...props}
    />
  ),
  TabsList: ({ className, ...props }: React.ComponentProps<typeof TabList>) => (
    <TabList
      className={cn(
        'w-full justify-start rounded-none border-b bg-transparent p-0',
        className,
      )}
      {...props}
    />
  ),
  TabsTrigger: ({
    className,
    value,
    ...props
  }: React.ComponentProps<typeof Tab> & { value: string }) => (
    <Tab
      className={cn(
        'relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none',
        className,
      )}
      id={value}
      {...props}
    />
  ),
  YouTubeEmbed,
  a: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    >
      {children}
    </a>
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm',
        className,
      )}
      {...props}
    />
  ),
  h1: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'font-heading mt-2 scroll-m-20 text-4xl font-bold',
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </h6>
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} className={cn('rounded-md', className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  ),
  pre: ({
    className,
    __rawString__,
    __npmCommand__,
    __yarnCommand__,
    __pnpmCommand__,
    __bunCommand__,
    __withMeta__,
    __src__,
    __event__,
    __style__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __style__?: Style['name'];
    __rawString__?: string;
    __withMeta__?: boolean;
    __src__?: string;
    __event__?: Event['name'];
  } & NpmCommands) => {
    return (
      <StyleWrapper styleName={__style__}>
        <pre
          className={cn(
            'mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border py-4',
            className,
          )}
          {...props}
        />
        {__rawString__ && !__npmCommand__ && (
          <CopyButton
            className={cn('absolute right-4 top-4', __withMeta__ && 'top-16')}
            event={__event__}
            src={__src__}
            value={__rawString__}
          />
        )}
        {__npmCommand__ &&
          __yarnCommand__ &&
          __pnpmCommand__ &&
          __bunCommand__ && (
            <CopyNpmCommandButton
              className={cn('absolute right-4 top-4', __withMeta__ && 'top-16')}
              commands={{
                __bunCommand__,
                __npmCommand__,
                __pnpmCommand__,
                __yarnCommand__,
              }}
            />
          )}
      </StyleWrapper>
    );
  },
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn('m-0 border-t p-0 even:bg-muted', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
};

type MdxProps = {
  code: string;
};

export function Mdx({ code }: MdxProps) {
  const currentStyle = useThemeStore((state) => state.style);
  const Component = useMDXComponent(code, {
    style: currentStyle,
  });

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}