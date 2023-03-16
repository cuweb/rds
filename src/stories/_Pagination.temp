import { useCallback, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Pagination } from '../components/Pagination/Pagination'

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
  const [, setItemState] = useState([])
  const callback = useCallback(
    (itemRange: React.SetStateAction<never[]>) => {
      setItemState(itemRange)
    },
    [setItemState],
  )
  return <Pagination totalCount={48} siblingCount={1} pageSize={5} callback={callback} />
}

export const Border: Story = () => {
  const [, setItemState] = useState([])
  const callback = useCallback(
    (itemRange: React.SetStateAction<never[]>) => {
      setItemState(itemRange)
    },
    [setItemState],
  )
  return <Pagination hasBorder hasSpacing totalCount={48} siblingCount={1} pageSize={5} callback={callback} />
}

export const Spacing: Story = () => {
  const [, setItemState] = useState([])
  const callback = useCallback(
    (itemRange: React.SetStateAction<never[]>) => {
      setItemState(itemRange)
    },
    [setItemState],
  )
  return <Pagination hasBorder totalCount={48} siblingCount={1} pageSize={5} callback={callback} />
}

Default.storyName = 'Default item'
Border.storyName = 'With Top Border'
Spacing.storyName = 'With Spacing'
