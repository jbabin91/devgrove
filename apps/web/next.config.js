import { createContentlayerPlugin } from 'next-contentlayer2';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'images.unsplash.com'],
  },
  reactStrictMode: true,
  // eslint-disable-next-line @typescript-eslint/require-await
  async redirects() {
    return [
      {
        destination: '/r/styles/default/:path*.json',
        permanent: true,
        source: '/default/:path*',
      },
      {
        destination: '/r/styles/new-york/:path*.json',
        permanent: true,
        source: '/new-york/:path*',
      },
      {
        destination: '/docs/components/breadcrumbs',
        permanent: true,
        source: '/components',
      },
      {
        destination: '/docs/components/breadcrumbs',
        permanent: true,
        source: '/docs/components',
      },
    ];
  },
  swcMinify: true,
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(nextConfig);
