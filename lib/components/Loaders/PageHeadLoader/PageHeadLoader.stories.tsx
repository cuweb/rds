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
