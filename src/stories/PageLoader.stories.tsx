import type { Meta, StoryObj } from '@storybook/react'
import { PageLoader } from '../components/Loaders/PageLoader/PageLoader'

const meta: Meta<typeof PageLoader> = {
  title: 'Load Screens/Page Loader',
  component: PageLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof PageLoader>

export const Primary: Story = {}

Primary.args = {
  children: 'PageLoader component',
}
