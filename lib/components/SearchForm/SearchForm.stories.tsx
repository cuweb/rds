import React from 'react'
import { useCallback, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { SearchForm } from './SearchForm'
import { SearchDatabase } from '../../data/SearchData'
import { Modal } from '../Modal/Modal'
import { useEffect } from 'react'
import { Button } from '../Button/Button'

const meta: Meta<typeof SearchForm> = {
  title: 'Components/Search Form',
  component: SearchForm,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof SearchForm>

export const Default: Story = () => {
  const [, setMessage] = useState('')

  const callback = useCallback(
    (message: string) => {
      setMessage(message)
    },
    [setMessage],
  )
  return <SearchForm callback={callback} placeholder="Enter a search string" />
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
    <SearchForm callback={callback} placeholder="Enter a search string">
      <SearchForm.Results resultsData={filteredResults} />
    </SearchForm>
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
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
        <SearchForm callback={callback} placeholder="Enter a search string">
          <SearchForm.Results resultsData={filteredResults} />
        </SearchForm>
      </Modal>
    </>
  )
}

Default.storyName = 'Default Search Form'
StoryList.storyName = 'Search Form with List'
StoryModal.storyName = 'Search Form with List in Modal'
