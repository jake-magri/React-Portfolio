// next.config.js
const path = require('path');

module.exports = {
  reactStrictMode: true,
  // Ensure Next.js uses this folder as the output tracing root
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**',
      },
      // Add more patterns as needed
    ],
  },
  trailingSlash: true,
};
