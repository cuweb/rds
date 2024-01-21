import type { Meta, StoryObj } from '@storybook/react'
import { Nav } from './Nav'
import { NavDataSingle, NavAsideData, NavAsideLoggedInOptions } from '../../data/NavData'

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

export const Default: Story = {
  render: () => (
    <Nav navType="primary">
      <Nav.Logo />
      <Nav.Primary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData} />
      </Nav.Primary>
    </Nav>
  ),
}

export const WithTitle: Story = {
  render: () => (
    <Nav navType="primary">
      <Nav.Logo title="Max and Tessie Zelikovitz Centre for Jewish Studies" link="https://carleton.ca/webservices" />
      <Nav.Primary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData} />
      </Nav.Primary>
    </Nav>
  ),
}

export const TitleWithSecondary: Story = {
  render: () => (
    <Nav navType="secondary">
      <Nav.Logo title="Max and Tessie Zelikovitz Centre for Jewish Studies" link="https://carleton.ca/webservices" />
      <Nav.Aside menu={NavAsideData} />
      <Nav.Secondary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData} />
      </Nav.Secondary>
    </Nav>
  ),
}

export const LoggedOut: Story = {
  render: () => (
    <Nav navType="primary">
      <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
      <Nav.Primary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData} LoggedOutUser={true} />
      </Nav.Primary>
    </Nav>
  ),
}

const userNoImage = {
  firstName: 'Web',
  lastName: 'Services',
}

export const LoggedIn: Story = {
  render: () => (
    <Nav navType="secondary">
      <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
      <Nav.Aside
        menu={NavAsideData}
        LoggedInUser={true}
        LoggedMenu={NavAsideLoggedInOptions}
        userNoImage={userNoImage}
      />
      <Nav.Secondary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside
          menu={NavAsideData}
          LoggedInUser={true}
          LoggedMenu={NavAsideLoggedInOptions}
          userNoImage={userNoImage}
        />
      </Nav.Secondary>
    </Nav>
  ),
}
