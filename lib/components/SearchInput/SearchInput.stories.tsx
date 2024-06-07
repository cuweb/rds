import React from 'react'
import { useCallback, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from './SearchInput'
import { SearchDatabase } from '../../data/SearchData'
import { Modal } from '../Modal/Modal'
import { useEffect } from 'react'
import { Button } from '../Button/Button'

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

export const Default: Story = () => {
  const [, setMessage] = useState('')

  const callback = useCallback(
    (message: string) => {
      setMessage(message)
    },
    [setMessage],
  )
  return <SearchInput callback={callback} placeholder="Enter a search string" />
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
    <SearchInput callback={callback} placeholder="Enter a search string">
      <SearchInput.Results resultsData={filteredResults} />
    </SearchInput>
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
      <Modal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        ariaLabel="site-search"
        ariaDescription="site-search"
        alignTop
        noProse
      >
        <SearchInput callback={callback} placeholder="Enter a search string">
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Modal>
    </>
  )
}

Default.storyName = 'Default Search Input'
StoryList.storyName = 'Search Input with List'
StoryModal.storyName = 'Search Input with List in Modal'
