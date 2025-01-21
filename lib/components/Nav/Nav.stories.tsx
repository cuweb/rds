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
          <Nav.Logo />
          <Nav.Top>
            <Nav.Menu menu={NavDataSingle} />
            <Nav.Aside menu={NavAsideData} isSearch onClickSearch={() => setModalOpen(true)} />
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
          <Nav.Logo
            title="Max and Tessie Zelikovitz Centre for Jewish Studies"
            link="https://carleton.ca/webservices"
          />
          <Nav.Top>
            <Nav.Menu menu={NavDataSingle} />
            <Nav.Aside menu={NavAsideData}></Nav.Aside>
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
          <Nav.MainHeader>
            <Nav.Logo
              title="Max and Tessie Zelikovitz Centre for Jewish Studies"
              link="https://carleton.ca/webservices"
            />
            <Nav.Aside menu={NavAsideData} isSearch onClickSearch={() => setModalOpen(true)} />
          </Nav.MainHeader>
          <Nav.Bottom>
            <Nav.Menu menu={NavDataSingle} />
            <Nav.Aside menu={NavAsideData} isSearch onClickSearch={() => setModalOpen(true)} />
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
          <Nav.Logo title="Raven Design System" link="/" />
          <Nav.Top>
            <Nav.Menu menu={NavDataSingle} />
            <Nav.Aside
              menu={NavAsideData}
              LoggedOutUser={true}
              LoggedInLink="/login"
              isSearch
              onClickSearch={() => setModalOpen(true)}
            />
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
          <Nav.Logo title="Raven Design System" link="/" />
          <Nav.Top>
            <Nav.Menu menu={NavDataSingle} />
            <Nav.Aside
              menu={NavAsideData}
              LoggedOutUser={true}
              onClickHandler={() => alert('Sign in clicked')}
              isSearch
              onClickSearch={() => setModalOpen(true)}
            />
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
          <Nav.MainHeader>
            <Nav.Logo title="Raven Design System" link="/" />
            <Nav.Aside
              menu={NavAsideData}
              LoggedInUser={true}
              LoggedMenu={NavAsideLoggedInOptionsHref}
              userNoImage={userNoImage}
              isSearch
              onClickSearch={() => setModalOpen(true)}
            />
          </Nav.MainHeader>

          <Nav.Bottom>
            <Nav.Menu menu={NavDataSingle} />
            <Nav.Aside
              menu={NavAsideData}
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
          <Nav.MainHeader>
            <Nav.Logo title="Raven Design System" link="/" />
            <Nav.Aside
              menu={NavAsideData}
              LoggedInUser={true}
              LoggedMenu={NavAsideLoggedInOptionsOnClick}
              userNoImage={userNoImage}
              isSearch
              onClickSearch={() => setModalOpen(true)}
            />
          </Nav.MainHeader>
          <Nav.Bottom>
            <Nav.Menu menu={NavDataSingle} />
            <Nav.Aside
              menu={NavAsideData}
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
