const isProd = process.env.NODE_ENV === 'production';

export const siteConfig = {
  description:
    'shadcn/ui compatible react aria components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
  links: {
    github: 'https://github.com/jbabin91/devgrove',
    twitter: 'https://x.com/jbabin91',
  },
  name: 'DevGrove UI',
  ogImage: isProd
    ? 'https://ui.dev-grove.com/og.jpg'
    : 'http://localhost:3000/og.jpg',
  url: isProd ? 'https://ui.dev-grove.com' : 'http://localhost:3000',
};

export type SiteConfig = typeof siteConfig;
