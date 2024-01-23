import { useCallback, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Nav } from './Nav'
import { NavDataSingle, NavAsideData, NavAsideLoggedInOptions } from '../../data/NavData'
import { SearchDatabase } from '../../data/SearchData'
import { Search } from './../Search/Search'

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

export const Default: Story = () => {
  const [, setOpen] = useState(false)

  const callback = useCallback(
    (itemOpen: boolean) => {
      setOpen(itemOpen)
    },
    [setOpen],
  )

  return (
    <Nav navType="primary">
      <Nav.Logo />
      <Nav.Primary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData}>
          <Search sourceData={SearchDatabase} callback={callback} />
        </Nav.Aside>
      </Nav.Primary>
    </Nav>
  )
}

export const WithTitle: Story = () => {
  const [, setOpen] = useState(false)

  const callback = useCallback(
    (itemOpen: boolean) => {
      setOpen(itemOpen)
    },
    [setOpen],
  )

  return (
    <Nav navType="primary">
      <Nav.Logo title="Max and Tessie Zelikovitz Centre for Jewish Studies" link="https://carleton.ca/webservices" />
      <Nav.Primary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData}>
          <Search sourceData={SearchDatabase} callback={callback} />
        </Nav.Aside>
      </Nav.Primary>
    </Nav>
  )
}

export const TitleWithSecondary: Story = () => {
  const [, setOpen] = useState(false)

  const callback = useCallback(
    (itemOpen: boolean) => {
      setOpen(itemOpen)
    },
    [setOpen],
  )

  return (
    <Nav navType="secondary">
      <Nav.Logo title="Max and Tessie Zelikovitz Centre for Jewish Studies" link="https://carleton.ca/webservices" />
      <Nav.Aside menu={NavAsideData}>
        <Search sourceData={SearchDatabase} callback={callback} />
      </Nav.Aside>
      <Nav.Secondary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData}>
          <Search sourceData={SearchDatabase} callback={callback} />
        </Nav.Aside>
      </Nav.Secondary>
    </Nav>
  )
}

export const LoggedOut: Story = () => {
  const [, setOpen] = useState(false)

  const callback = useCallback(
    (itemOpen: boolean) => {
      setOpen(itemOpen)
    },
    [setOpen],
  )

  return (
    <Nav navType="primary">
      <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
      <Nav.Primary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData} LoggedOutUser={true}>
          <Search sourceData={SearchDatabase} callback={callback} />
        </Nav.Aside>
      </Nav.Primary>
    </Nav>
  )
}

const userNoImage = {
  firstName: 'Web',
  lastName: 'Services',
}

export const LoggedIn: Story = () => {
  const [, setOpen] = useState(false)

  const callback = useCallback(
    (itemOpen: boolean) => {
      setOpen(itemOpen)
    },
    [setOpen],
  )

  return (
    <Nav navType="secondary">
      <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
      <Nav.Aside menu={NavAsideData} LoggedInUser={true} LoggedMenu={NavAsideLoggedInOptions} userNoImage={userNoImage}>
        <Search sourceData={SearchDatabase} callback={callback} />
      </Nav.Aside>
      <Nav.Secondary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside
          menu={NavAsideData}
          LoggedInUser={true}
          LoggedMenu={NavAsideLoggedInOptions}
          userNoImage={userNoImage}
        >
          <Search sourceData={SearchDatabase} callback={callback} />
        </Nav.Aside>
      </Nav.Secondary>
    </Nav>
  )
}

Default.storyName = 'Default Nav'
WithTitle.storyName = 'With Title'
TitleWithSecondary.storyName = 'Title With Secondary'
LoggedOut.storyName = 'Logged Out'
LoggedIn.storyName = 'Logged IN'
