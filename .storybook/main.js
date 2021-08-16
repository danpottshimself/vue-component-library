const useLessLoader = require('storybook-less-loader')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-backgrounds',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-knobs",
    '@storybook/addon-viewport'
  ],
  webpackFinal: async (config) => {
    const includeLessConfig = useLessLoader(config)
    includeLessConfig.module.rules.push(
      {
          test: /\.less$/,
          use: [
              {
                loader: require.resolve('less-loader'),
                options: {
                  lessOptions: {
                    javascriptEnabled: true
                  }
                }
              }
          ]
      }
    );
    return includeLessConfig
  }
}