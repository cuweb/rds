import { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = () => {
  return <Pagination totalCount={48} siblingCount={1} pageSize={5} callback={() => undefined} />
}

export const Border: Story = () => {
  return <Pagination hasBorder hasSpacing totalCount={48} siblingCount={1} pageSize={5} callback={() => undefined} />
}

export const Spacing: Story = () => {
  return <Pagination hasBorder totalCount={48} siblingCount={1} pageSize={5} callback={() => undefined} />
}

Default.storyName = 'Default item'
Border.storyName = 'With Top Border'
Spacing.storyName = 'With Spacing'
