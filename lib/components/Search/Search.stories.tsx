import React, { useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Search } from './Search'
import { useCallback, useState } from 'react'
import { SearchDatabase } from '../../data/SearchData'
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'

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
  const [searchString, setSearchString] = useState('')
  const [filteredResults, setFilteredResults] = useState()
  const [open, setOpen] = useState(false)
  const searchOn = 'title'

  const handleSearchQuery = (string) => {
    setSearchString(string)
  }

  const callback = useCallback(
    (itemOpen: boolean) => {
      setOpen(itemOpen)
    },
    [setOpen],
  )

  useEffect(() => {
    const filteredDatabase =
      searchString === ''
        ? []
        : SearchDatabase.filter((data) => {
            return data[searchOn].toString().toLowerCase().includes(searchString.toLowerCase())
          })
    setFilteredResults(filteredDatabase)
  }, [searchString])

  return (
    <>
      <button onClick={() => setOpen(true)} aria-label="search" className="not-prose">
        <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer text-cu-black-300 left-4" aria-hidden="true" />
      </button>
      {open && (
        <Search searchQuery={handleSearchQuery} callback={callback}>
          <Search.Results resultsData={filteredResults} />
        </Search>
      )}
    </>
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
ValidationUrl.storyName = 'Validation Url Search'
ValidationKey.storyName = 'Validation Key Search'
