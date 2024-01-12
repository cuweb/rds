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
    <Nav>
      <Nav.Primary>
        <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData} />
      </Nav.Primary>
    </Nav>
  ),
}

export const Secondary: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>
      <Nav.Secondary>
        <Nav.Menu menu={NavDataSingle} />
      </Nav.Secondary>
    </>
  ),
}

export const LoggedOut: Story = {
  render: () => (
    <Nav>
      <Nav.Primary>
        <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData} LoggedOutUser={true} />
      </Nav.Primary>
    </Nav>
  ),
}

export const LoggedIn: Story = {
  render: () => (
    <Nav>
      <Nav.Primary>
        <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData} LoggedInUser={true} LoggedInOptions={NavAsideLoggedInOptions} />
      </Nav.Primary>
    </Nav>
  ),
}
