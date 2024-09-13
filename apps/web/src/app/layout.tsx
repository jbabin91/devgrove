import '~/styles/globals.css';

import type { Metadata, Viewport } from 'next';

import { TailwindIndicator } from '~/components/tailwind-indicator';
import { siteConfig } from '~/config/site';
import {
  fontInter,
  fontJakarta,
  fontMono,
  fontOutfit,
  fontRaleway,
  fontSans,
} from '~/libs/fonts';
import { cn } from '~/libs/utils';
import { Providers } from '~/providers';

export const metadata: Metadata = {
  authors: [
    {
      name: 'jbabin91',
      url: 'https://github.com/jbabin91',
    },
  ],
  creator: 'jbabin91',
  description: siteConfig.description,
  icons: {
    apple: '/apple-touch-icon.png',
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
  },
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'React Aria Components',
  ],
  manifest: `${siteConfig.url}/site.webmanifest`,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    description: siteConfig.description,
    images: [
      {
        alt: siteConfig.name,
        height: 630,
        url: siteConfig.ogImage,
        width: 1200,
      },
    ],
    locale: 'en_US',
    siteName: siteConfig.name,
    title: siteConfig.name,
    type: 'website',
    url: siteConfig.url,
  },
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@shadcn',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    title: siteConfig.name,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { color: 'white', media: '(prefers-color-scheme: light)' },
    { color: 'black', media: '(prefers-color-scheme: dark)' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      className={cn(
        fontSans.variable,
        fontInter.variable,
        fontJakarta.variable,
        fontRaleway.variable,
        fontOutfit.variable,
        fontMono.variable,
      )}
      lang="en"
      style={{ '--font-sans': `var(--font-geist-sans)` } as React.CSSProperties}
    >
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers>
          <div vaul-drawer-wrapper="">
            <div className="relative flex min-h-screen flex-col bg-background">
              {children}
            </div>
          </div>
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  );
}
