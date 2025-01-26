import React, { useCallback, useState, useEffect } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from './SearchInput'
import { SearchDatabase } from '../../data/SearchData'
import { Modal } from '../Modal/Modal'
import { Button } from '../Button/Button'
import { Main } from '../../layouts/Main/Main'

// Define the type for your search data
interface SearchData {
  id: number
  title: string
  description: string
  url: string
}

const meta: Meta<typeof SearchInput> = {
  title: 'Components/Search Input',
  component: SearchInput,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof SearchInput>

export const Primary: Story = {
  args: {
    placeholder: 'Enter a search string',
  },
  render: (args) => {
    const [, setMessage] = useState('')
    const callback = useCallback(
      (message: string) => {
        setMessage(message)
      },
      [setMessage],
    )

    return (
      <Main>
        <SearchInput callback={callback} placeholder={args.placeholder} />
      </Main>
    )
  },
}

export const AutoSuggest: Story = {
  args: {
    ...Primary.args,
  },
  render: (args) => {
    const [, setMessage] = useState('')
    const [searchString, setSearchString] = useState('')
    const [filteredResults, setFilteredResults] = useState<SearchData[]>([])
    const searchOn = 'title'

    const callback = useCallback(
      (message: string) => {
        setMessage(message)
        setSearchString(message)
      },
      [setMessage],
    )

    useEffect(() => {
      const filteredDatabase: SearchData[] =
        searchString === ''
          ? []
          : SearchDatabase.filter((data) => {
              return data[searchOn].toString().toLowerCase().includes(searchString.toLowerCase())
            })
      setFilteredResults(filteredDatabase)
    }, [searchString])

    return (
      <Main>
        <SearchInput callback={callback} placeholder={args.placeholder}>
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Main>
    )
  },
}

export const InsideModal: Story = {
  args: {
    ...Primary.args,
  },
  render: (args) => {
    const [, setMessage] = useState('')
    const [searchString, setSearchString] = useState('')
    const [filteredResults, setFilteredResults] = useState<SearchData[]>([])
    const [modalOpen, setModalOpen] = useState(false)
    const searchOn = 'title'

    const callback = useCallback(
      (message: string) => {
        setMessage(message)
        setSearchString(message)
      },
      [setMessage],
    )

    useEffect(() => {
      const filteredDatabase: SearchData[] =
        searchString === ''
          ? []
          : SearchDatabase.filter((data) => {
              return data[searchOn].toString().toLowerCase().includes(searchString.toLowerCase())
            })
      setFilteredResults(filteredDatabase)
    }, [searchString])

    return (
      <>
        <Button title="Click to Open Search" onClick={() => setModalOpen(true)} />

        <Modal
          isOpen={modalOpen}
          setIsOpen={setModalOpen}
          ariaLabel="site-search"
          ariaDescription="site-search"
          alignTop
          noProse
        >
          <SearchInput callback={callback} placeholder={args.placeholder}>
            <SearchInput.Results resultsData={filteredResults} />
          </SearchInput>
        </Modal>
      </>
    )
  },
}
