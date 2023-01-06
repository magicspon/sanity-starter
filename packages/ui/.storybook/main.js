const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
const path = require('path')
const pathToInlineSvg = path.resolve(__dirname, '../src/svgs')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['../public'],

  webpackFinal: async (config) => {
    // handle typescript path alias'
    config.resolve.plugins = [
      ...(config.resolve?.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ]
    // handle svgs
    const { rules } = config.module
    // don't use the default loaded to import svgs outside of node_modules
    const fileLoaderRule = rules.find((rule) => rule.test?.test('.svg'))
    fileLoaderRule.exclude = pathToInlineSvg
    config.module.rules.push({
      test: /\.svg$/,
      include: pathToInlineSvg,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
