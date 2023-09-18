import type { StorybookConfig } from '@storybook/react-vite'
const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@whitespace/storybook-addon-html',
    {
      name: '@storybook/addon-essentials',
      options: {
        outline: false,
        toolbars: false,
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: 'tag',
  },
}
export default config
