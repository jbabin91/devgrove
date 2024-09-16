'use client';

import * as React from 'react';

import { CopyButton, CopyWithClassNames } from '@/components/copy-button';
import { cn } from '@/libs/utils';
import { Tab, TabList, TabPanel, Tabs } from '@/registry/new-york/ui/tabs';

type ComponentExampleProps = {
  extractedClassNames?: string;
  align?: 'center' | 'start' | 'end';
} & React.HTMLAttributes<HTMLDivElement>;

export function ComponentExample({
  children,
  className,
  extractedClassNames,
  align = 'center',
  ...props
}: ComponentExampleProps) {
  const [Example, Code, ...Children] = React.Children.toArray(
    children,
  ) as React.ReactElement[];

  const codeString = React.useMemo(() => {
    if (Code?.props['data-rehype-pretty-code-figure'] !== undefined) {
      const [, Button] = React.Children.toArray(
        Code.props.children,
      ) as React.ReactElement[];
      return Button?.props?.value || Button?.props?.__rawString__ || null;
    }
  }, [Code]);

  return (
    <div
      className={cn('group relative my-4 flex flex-col space-y-2', className)}
      {...props}
    >
      <Tabs className="relative mr-auto w-full" defaultSelectedKey="preview">
        <div className="flex items-center justify-between pb-3">
          <TabList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <Tab
              className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[selected]:border-b-primary data-[selected]:text-foreground data-[selected]:shadow-none"
              id="preview"
            >
              Preview
            </Tab>
            <Tab
              className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[selected]:border-b-primary data-[selected]:text-foreground data-[selected]:shadow-none"
              id="code"
            >
              Code
            </Tab>
          </TabList>
          {extractedClassNames ? (
            <CopyWithClassNames
              className="absolute right-4 top-20"
              classNames={extractedClassNames}
              value={codeString}
            />
          ) : (
            codeString && (
              <CopyButton
                className="absolute right-4 top-20"
                value={codeString}
              />
            )
          )}
        </div>
        <TabPanel className="overflow-auto rounded-md border" id="preview">
          <div
            className={cn('flex min-h-[350px] justify-center p-10', {
              'items-center': align === 'center',
              'items-end': align === 'end',
              'items-start': align === 'start',
            })}
          >
            {Example}
          </div>
        </TabPanel>
        <TabPanel id="code">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
              {Code}
            </div>
            {Children?.length ? (
              <div className="rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                {Children}
              </div>
            ) : null}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
