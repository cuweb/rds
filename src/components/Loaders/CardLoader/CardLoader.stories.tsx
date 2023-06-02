import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../../../layouts/Column/Column'
import { CardLoader } from './CardLoader'

const meta: Meta<typeof CardLoader> = {
  title: 'Components/Load Screens/Card Loader',
  component: CardLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof CardLoader>

export const Primary: Story = {}

Primary.args = {
  children: 'CardLoader component',
}

export const TwoCol: Story = {
  name: 'Two Columns',
  render: () => (
    <Column maxWidth="5xl" cols="2" gridGap="10">
      <CardLoader />
      <CardLoader />
    </Column>
  ),
}
