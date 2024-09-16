/* eslint-disable sort-keys-fix/sort-keys-fix */
import '@/styles/mdx.css';

import { allDocs } from 'contentlayer/generated';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';

import { Icons } from '@/components/icons';
import { Mdx } from '@/components/mdx-components';
import { DocsPager } from '@/components/pager';
import { DashboardTableOfContents } from '@/components/toc';
import { siteConfig } from '@/config/site';
import { getTableOfContents } from '@/lib/toc';
import { absoluteUrl, cn } from '@/lib/utils';
import { badgeVariants } from '@/registry/new-york/ui/badge';
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  Breadcrumbs,
  BreadcrumbSeparator,
} from '@/registry/new-york/ui/breadcrumbs';
import { Link } from '@/registry/new-york/ui/link';

type DocPageProps = {
  params: {
    slug: string[];
  };
};

function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join('/') ?? '';
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) return null;

  return doc;
}

export function generateMetadata({ params }: DocPageProps): Metadata {
  const doc = getDocFromParams({ params });

  if (!doc) return {};

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: 'article',
      url: absoluteUrl(doc.slug),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: doc.title,
      description: doc.description,
      images: [siteConfig.ogImage],
      creator: '@jbabin91',
    },
  };
}

export function generateStaticParams(): DocPageProps['params'][] {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split('/'),
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = getDocFromParams({ params });

  if (!doc) return notFound();

  const toc = await getTableOfContents(doc.body.raw);

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <Breadcrumbs className="mb-4">
          <BreadcrumbItem>
            <BreadcrumbLink className="capitalize" href="/docs">
              Docs
            </BreadcrumbLink>
            <BreadcrumbSeparator />
          </BreadcrumbItem>
          {doc.slugAsParams
            .split('/')
            .slice(0, -1)
            .map((link) => (
              <BreadcrumbItem key={link}>
                <BreadcrumbLink className="capitalize" href={`/docs/${link}`}>
                  {link}
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </BreadcrumbItem>
            ))}
          <BreadcrumbItem>
            <BreadcrumbPage>{doc.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </Breadcrumbs>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            {doc.title}
          </h1>
          {doc.description ? (
            <p className="text-lg text-muted-foreground">
              <Balancer>{doc.description}</Balancer>
            </p>
          ) : null}
        </div>
        {doc.links ? (
          <div className="flex items-center space-x-2 pt-4">
            {doc.links?.ariaDoc ? (
              <Link
                className={cn(badgeVariants({ variant: 'secondary' }), 'gap-1')}
                href={doc.links.ariaDoc}
                rel="noreferrer"
                target="_parent"
              >
                <Icons.aria className="size-3" />
                Docs
                <Icons.ExternalLink className="size-3" />
              </Link>
            ) : null}
            {doc.links?.doc ? (
              <Link
                className={cn(badgeVariants({ variant: 'secondary' }), 'gap-1')}
                href={doc.links.doc}
                rel="noreferrer"
                target="_parent"
              >
                Docs
                <Icons.ExternalLink className="size-3" />
              </Link>
            ) : null}
            {doc.links?.api ? (
              <Link
                className={cn(badgeVariants({ variant: 'secondary' }), 'gap-1')}
                href={doc.links.api}
                rel="noreferrer"
                target="_blank"
              >
                API Reference
                <Icons.ExternalLink className="size-3" />
              </Link>
            ) : null}
          </div>
        ) : null}
        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>
        <DocsPager doc={doc} />
      </div>
      {doc.toc ? (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
              <DashboardTableOfContents toc={toc} />
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
