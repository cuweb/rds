import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button/Button'
import { Search } from './Search'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useCallback, useState } from 'react'
import { SearchDatabase } from '../../data/SearchData'

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof Search>

export const SearchDefault: Story = () => {
  const [, setOpen] = useState(false)

  const callback = useCallback(
    (itemOpen: boolean) => {
      setOpen(itemOpen)
    },
    [setOpen],
  )
  return <Search sourceData={SearchDatabase} callback={callback} />
}

export const SearchCustomAvatar: Story = () => {
  const [, setOpen] = useState(false)

  const callback = useCallback(
    (itemOpen: boolean) => {
      setOpen(itemOpen)
    },
    [setOpen],
  )
  return (
    <Search sourceData={SearchDatabase} callback={callback}>
      <Button icon={MagnifyingGlassIcon} />
    </Search>
  )
}

export const ValidationUrl: Story = () => {
  const [, setOpen] = useState(false)

  const callback = useCallback(
    (itemOpen: boolean) => {
      setOpen(itemOpen)
    },
    [setOpen],
  )
  return <Search sourceData={SearchDatabase} searchOn="url" callback={callback} />
}

export const ValidationKey: Story = () => {
  const [, setOpen] = useState(false)

  const callback = useCallback(
    (itemOpen: boolean) => {
      setOpen(itemOpen)
    },
    [setOpen],
  )
  return <Search sourceData={SearchDatabase} searchOn="id" callback={callback} />
}

SearchDefault.storyName = 'Default Search'
SearchCustomAvatar.storyName = 'Custom Avatar Search'
ValidationUrl.storyName = 'Validation Url Search'
ValidationKey.storyName = 'Validation Key Search'
