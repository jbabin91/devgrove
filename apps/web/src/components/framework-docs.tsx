'use client';

import { allDocs } from 'contentlayer/generated';

import { Mdx } from '~/components/mdx-components';

type FrameworkDocsProps = {
  data: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function FrameworkDocs({ ...props }: FrameworkDocsProps) {
  const frameworkDoc = allDocs.find(
    (doc) => doc.slug === `/docs/installation/${props.data}`,
  );

  if (!frameworkDoc) return null;

  return <Mdx code={frameworkDoc.body.code} />;
}
