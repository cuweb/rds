import React from 'react'
import { useCallback, useState, useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Nav } from './Nav'
import {
  NavDataSingle,
  NavAsideData,
  NavAsideLoggedInOptionsHref,
  NavAsideLoggedInOptionsOnClick,
} from '../../data/NavData'
import { SearchDatabase } from '../../data/SearchData'
import { SearchInput } from '../SearchInput/SearchInput'
import { Modal } from '../Modal/Modal'

const meta: Meta<typeof Nav> = {
  title: 'Components/Nav',
  component: Nav,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Nav>

export const Primary: Story = () => {
  const [, setMessage] = useState<string>('')
  const [searchString, setSearchString] = useState<string>('')
  const [filteredResults, setFilteredResults] = useState<
    { id: number; title: string; description: string; url: string }[]
  >([])
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
      <Nav navType="primary">
        <Nav.Logo />
        <Nav.Primary>
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} search onClickSearch={() => setModalOpen(true)} />
        </Nav.Primary>
      </Nav>
      <Modal
        ariaLabel="Open Search"
        ariaDescription="Search for content on this site"
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        noProse
        alignTop
      >
        <SearchInput callback={callback} placeholder="Enter a search string">
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Modal>
    </>
  )
}

export const WithTitle: Story = () => {
  const [, setMessage] = useState<string>('')
  const [searchString, setSearchString] = useState<string>('')
  const [filteredResults, setFilteredResults] = useState<
    { id: number; title: string; description: string; url: string }[]
  >([])
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
      <Nav navType="primary">
        <Nav.Logo title="Max and Tessie Zelikovitz Centre for Jewish Studies" link="https://carleton.ca/webservices" />
        <Nav.Primary>
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData}></Nav.Aside>
        </Nav.Primary>
      </Nav>
      <Modal
        ariaLabel="Open Search"
        ariaDescription="Search for content on this site"
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        noProse
        alignTop
      >
        <SearchInput callback={callback} placeholder="Enter a search string">
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Modal>
    </>
  )
}

export const TitleWithSecondary: Story = () => {
  const [, setMessage] = useState<string>('')
  const [searchString, setSearchString] = useState<string>('')
  const [filteredResults, setFilteredResults] = useState<
    { id: number; title: string; description: string; url: string }[]
  >([])
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
      <Nav navType="secondary">
        <Nav.Logo title="Max and Tessie Zelikovitz Centre for Jewish Studies" link="https://carleton.ca/webservices" />
        <Nav.Aside menu={NavAsideData} search onClickSearch={() => setModalOpen(true)} />
        <Nav.Secondary>
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} search onClickSearch={() => setModalOpen(true)} />
        </Nav.Secondary>
      </Nav>
      <Modal
        ariaLabel="Open Search"
        ariaDescription="Search for content on this site"
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        noProse
        alignTop
      >
        <SearchInput callback={callback} placeholder="Enter a search string">
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Modal>
    </>
  )
}

export const LoggedOutWithHref: Story = () => {
  const [, setMessage] = useState<string>('')
  const [searchString, setSearchString] = useState<string>('')
  const [filteredResults, setFilteredResults] = useState<
    { id: number; title: string; description: string; url: string }[]
  >([])
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
      <Nav navType="primary">
        <Nav.Logo title="Raven Design System" link="/" />
        <Nav.Primary>
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside
            menu={NavAsideData}
            LoggedOutUser={true}
            LoggedInLink="/login"
            search
            onClickSearch={() => setModalOpen(true)}
          />
        </Nav.Primary>
      </Nav>
      <Modal
        ariaLabel="Open Search"
        ariaDescription="Search for content on this site"
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        noProse
        alignTop
      >
        <SearchInput callback={callback} placeholder="Enter a search string">
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Modal>
    </>
  )
}

export const LoggedOutWithOnClick: Story = () => {
  const [, setMessage] = useState<string>('')
  const [searchString, setSearchString] = useState<string>('')
  const [filteredResults, setFilteredResults] = useState<
    { id: number; title: string; description: string; url: string }[]
  >([])
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
      <Nav navType="primary">
        <Nav.Logo title="Raven Design System" link="/" />
        <Nav.Primary>
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside
            menu={NavAsideData}
            LoggedOutUser={true}
            onClickHandler={() => alert('Sign in clicked')}
            search
            onClickSearch={() => setModalOpen(true)}
          />
        </Nav.Primary>
      </Nav>
      <Modal
        ariaLabel="Open Search"
        ariaDescription="Search for content on this site"
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        noProse
        alignTop
      >
        <SearchInput callback={callback} placeholder="Enter a search string">
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Modal>
    </>
  )
}

const userNoImage = {
  firstName: 'Web',
  lastName: 'Services',
}

export const LoggedInWithHref: Story = () => {
  const [, setMessage] = useState<string>('')
  const [searchString, setSearchString] = useState<string>('')
  const [filteredResults, setFilteredResults] = useState<
    { id: number; title: string; description: string; url: string }[]
  >([])
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
      <Nav navType="secondary">
        <Nav.Logo title="Raven Design System" link="/" />
        <Nav.Aside
          menu={NavAsideData}
          LoggedInUser={true}
          LoggedMenu={NavAsideLoggedInOptionsHref}
          userNoImage={userNoImage}
          search
          onClickSearch={() => setModalOpen(true)}
        />

        <Nav.Secondary>
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside
            menu={NavAsideData}
            LoggedInUser={true}
            LoggedMenu={NavAsideLoggedInOptionsHref}
            userNoImage={userNoImage}
            search
            onClickSearch={() => setModalOpen(true)}
          />
        </Nav.Secondary>
      </Nav>
      <Modal
        ariaLabel="Open Search"
        ariaDescription="Search for content on this site"
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        noProse
        alignTop
      >
        <SearchInput callback={callback} placeholder="Enter a search string">
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Modal>
    </>
  )
}

export const LoggedInWithOnClick: Story = () => {
  const [, setMessage] = useState<string>('')
  const [searchString, setSearchString] = useState<string>('')
  const [filteredResults, setFilteredResults] = useState<
    { id: number; title: string; description: string; url: string }[]
  >([])
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
      <Nav navType="secondary">
        <Nav.Logo title="Raven Design System" link="/" />
        <Nav.Aside
          menu={NavAsideData}
          LoggedInUser={true}
          LoggedMenu={NavAsideLoggedInOptionsOnClick}
          userNoImage={userNoImage}
          search
          onClickSearch={() => setModalOpen(true)}
        />
        <Nav.Secondary>
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside
            menu={NavAsideData}
            LoggedInUser={true}
            LoggedMenu={NavAsideLoggedInOptionsOnClick}
            userNoImage={userNoImage}
            search
            onClickSearch={() => setModalOpen(true)}
          />
        </Nav.Secondary>
      </Nav>
      <Modal
        ariaLabel="Open Search"
        ariaDescription="Search for content on this site"
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        noProse
        alignTop
      >
        <SearchInput callback={callback} placeholder="Enter a search string">
          <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
      </Modal>
    </>
  )
}
