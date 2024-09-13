'use client';

import { CodeBlockWrapper } from '~/components/code-black-wrapper';
import { cn } from '~/libs/utils';

type ComponentSourceProps = {
  src: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function ComponentSource({
  children,
  className,
  ...props
}: ComponentSourceProps) {
  return (
    <CodeBlockWrapper
      className={cn('my-6 overflow-hidden rounded-md', className)}
      {...props}
    >
      {children}
    </CodeBlockWrapper>
  );
}
