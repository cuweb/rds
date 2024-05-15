import type { Meta, StoryObj } from '@storybook/react'
import { PageHeadLoader } from './PageHeadLoader'

const meta: Meta<typeof PageHeadLoader> = {
  title: 'Components/Load Screens/PageHead Loader',
  component: PageHeadLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof PageHeadLoader>

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
