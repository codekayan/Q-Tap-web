// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  
  reactStrictMode: true,
  compress: true,
  
  // Fix leaflet images - bypass sharp completely
  webpack: (config, { isServer }) => {
    // Handle image files without sharp
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|webp|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });
    
    return config;
  },
};

export default withNextIntl(nextConfig);
