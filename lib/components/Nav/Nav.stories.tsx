import React from 'react'
import { useCallback, useState, useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Nav } from './Nav'
import {
  NavDataSingle,
  NavButtonsData,
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

export const Top: Story = {
  render: () => {
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
        <Nav>
          <Nav.Top>
            <Nav.Logo />
            <Nav.Buttons>
              <Nav.Menu menu={NavDataSingle} />
              <Nav.Buttons menu={NavButtonsData} isSearch onClickSearch={() => setModalOpen(true)} />
            </Nav.Buttons>
          </Nav.Top>
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
  },
}

export const WithTitle: Story = {
  render: () => {
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
        <Nav>
          <Nav.Top>
            <Nav.Logo
              title="Max and Tessie Zelikovitz Centre for Jewish Studies"
              link="https://carleton.ca/webservices"
            />
            <Nav.Buttons>
              <Nav.Menu menu={NavDataSingle} />
              <Nav.Buttons menu={NavButtonsData}></Nav.Buttons>
            </Nav.Buttons>
          </Nav.Top>
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
  },
}

export const TitleWithBottom: Story = {
  render: () => {
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
        <Nav>
          <Nav.Top>
            <Nav.Logo
              title="Max and Tessie Zelikovitz Centre for Jewish Studies"
              link="https://carleton.ca/webservices"
            />
            <Nav.Buttons menu={NavButtonsData} isSearch onClickSearch={() => setModalOpen(true)} />
          </Nav.Top>
          <Nav.Bottom>
            <Nav.Menu menu={NavDataSingle} />
            <Nav.Buttons menu={NavButtonsData} isSearch onClickSearch={() => setModalOpen(true)} />
          </Nav.Bottom>
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
  },
}

export const LoggedOutWithHref: Story = {
  render: () => {
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
        <Nav>
          <Nav.Top>
            <Nav.Logo title="Raven Design System" link="/" />
            <Nav.Buttons>
              <Nav.Menu menu={NavDataSingle} />
              <Nav.Buttons
                menu={NavButtonsData}
                LoggedOutUser={true}
                LoggedInLink="/login"
                isSearch
                onClickSearch={() => setModalOpen(true)}
              />
            </Nav.Buttons>
          </Nav.Top>
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
  },
}

export const LoggedOutWithOnClick: Story = {
  render: () => {
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
        <Nav>
          <Nav.Top>
            <Nav.Logo title="Raven Design System" link="/" />
            <Nav.Buttons>
              <Nav.Menu menu={NavDataSingle} />
              <Nav.Buttons
                menu={NavButtonsData}
                LoggedOutUser={true}
                onClickHandler={() => alert('Sign in clicked')}
                isSearch
                onClickSearch={() => setModalOpen(true)}
              />
            </Nav.Buttons>
          </Nav.Top>
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
  },
}

const userNoImage = {
  firstName: 'Web',
  lastName: 'Services',
}

export const LoggedInWithHref: Story = {
  render: () => {
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
        <Nav>
          <Nav.Top>
            <Nav.Logo title="Raven Design System" link="/" />
            <Nav.Buttons
              menu={NavButtonsData}
              LoggedInUser={true}
              LoggedMenu={NavAsideLoggedInOptionsHref}
              userNoImage={userNoImage}
              isSearch
              onClickSearch={() => setModalOpen(true)}
            />
          </Nav.Top>

          <Nav.Bottom>
            <Nav.Menu menu={NavDataSingle} />
            <Nav.Buttons
              menu={NavButtonsData}
              LoggedInUser={true}
              LoggedMenu={NavAsideLoggedInOptionsHref}
              userNoImage={userNoImage}
              isSearch
              onClickSearch={() => setModalOpen(true)}
            />
          </Nav.Bottom>
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
  },
}

export const LoggedInWithOnClick: Story = {
  render: () => {
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
        <Nav>
          <Nav.Top>
            <Nav.Logo title="Raven Design System" link="/" />
            <Nav.Buttons
              menu={NavButtonsData}
              LoggedInUser={true}
              LoggedMenu={NavAsideLoggedInOptionsOnClick}
              userNoImage={userNoImage}
              isSearch
              onClickSearch={() => setModalOpen(true)}
            />
          </Nav.Top>
          <Nav.Bottom>
            <Nav.Menu menu={NavDataSingle} />
            <Nav.Buttons
              menu={NavButtonsData}
              LoggedInUser={true}
              LoggedMenu={NavAsideLoggedInOptionsOnClick}
              userNoImage={userNoImage}
              isSearch
              onClickSearch={() => setModalOpen(true)}
            />
          </Nav.Bottom>
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
  },
}
