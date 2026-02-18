import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../lib/**/*.mdx',
    '../lib/**/**/*.mdx',
    '../lib/**/*.stories.@(mdx|js|jsx|ts|tsx)',
    '../lib/**/**/*.stories.@(mdx|js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-a11y', '@storybook/addon-links', '@storybook/addon-docs', '@storybook/addon-onboarding'],
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
