import React from 'react'
import { useCallback, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Search } from './Search'
import { SearchDatabase } from '../../data/SearchData'
import { Modal } from '../Modal/Modal'
import { useEffect } from 'react'
import { Button } from '../Button/Button'

const meta: Meta<typeof Search> = {
  title: 'Components/Search Form',
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

export const Default: Story = () => {
  const [, setMessage] = useState('')

  const callback = useCallback(
    (message: string) => {
      setMessage(message)
    },
    [setMessage],
  )
  return <Search callback={callback} placeholder="Enter a search string" />
}

export const StoryList: Story = () => {
  const [, setMessage] = useState('')
  const [searchString, setSearchString] = useState('')
  const [filteredResults, setFilteredResults] = useState()
  const searchOn = 'title'

  const callback = useCallback(
    (message: string) => {
      setMessage(message)
      setSearchString(message)
    },
    [setMessage],
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
    <Search callback={callback} placeholder="Enter a search string">
      <Search.Results resultsData={filteredResults} />
    </Search>
  )
}

export const StoryModal: Story = () => {
  const [, setMessage] = useState('')
  const [searchString, setSearchString] = useState('')
  const [filteredResults, setFilteredResults] = useState()
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
      <Button title="Click to Open Search" onClick={() => setModalOpen(true)} />
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen} alignTop>
        <Search callback={callback} placeholder="Enter a search string">
          <Search.Results resultsData={filteredResults} />
        </Search>
      </Modal>
    </>
  )
}

Default.storyName = 'Default Search Form'
StoryList.storyName = 'Search Form with List'
StoryModal.storyName = 'Search Form with List in Modal'
