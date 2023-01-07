// @ts-check
/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,

  transpilePackages: ['@project/ui', '@project/cms'],
  experimental: {
    // Enables hot-reload and easy integration for local packages
  },
  // We already do linting on GH actions
  eslint: {
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    ignoreDuringBuilds: !!process.env.CI,
  },

  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
    ],
  },

  webpack: (config) => {
    config.module = {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    }

    return config
  },
}

export default config
