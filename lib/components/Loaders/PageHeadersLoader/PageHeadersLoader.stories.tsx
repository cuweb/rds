import type { Meta, StoryObj } from '@storybook/react'
import { PageHeadersLoader } from './PageHeadersLoader'

const meta: Meta<typeof PageHeadersLoader> = {
  title: 'Components/Load Screens/PageHeaders Loader',
  component: PageHeadersLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof PageHeadersLoader>

export const Default: Story = {}
Default.args = {}

export const WithContent: Story = {}
WithContent.args = {
  content: 'small',
}

export const WithLargeContent: Story = {}
WithLargeContent.args = {
  content: 'large',
}

export const Center: Story = {}
Center.args = {
  isCenter: true,
}

export const CenterWithContent: Story = {}
CenterWithContent.args = {
  content: 'small',
  isCenter: true,
}
