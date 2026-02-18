import type { Meta, StoryObj } from '@storybook/react-vite'
import { TableLoader } from './TableLoader'

const meta: Meta<typeof TableLoader> = {
  title: 'Components/Load Screens/Table Loader',
  component: TableLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof TableLoader>

export const Default: Story = {}
Default.args = {}
