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
        <Nav.Logo title="Max and Tessie Zelikovitz Centre for Jewish Studies" link="https://carleton.ca/webservices" />
        <Nav.Menu menu={NavDataSingle} mobileAsideMenu={NavAsideData} />
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
        <Nav.Menu menu={NavDataSingle} mobileAsideMenu={NavAsideData} />
      </Nav.Secondary>
    </>
  ),
}

export const LoggedOut: Story = {
  render: () => (
    <Nav>
      <Nav.Primary>
        <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
        <Nav.Menu menu={NavDataSingle} mobileAsideMenu={NavAsideData} />
        <Nav.Aside menu={NavAsideData} LoggedOutUser={true} />
      </Nav.Primary>
    </Nav>
  ),
}

const userNoImage = {
  firstName: 'Danny',
  lastName: 'Brown',
}

export const LoggedIn: Story = {
  render: () => (
    <Nav>
      <Nav.Primary>
        <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
        <Nav.Menu menu={NavDataSingle} mobileAsideMenu={NavAsideData} />
        <Nav.Aside
          menu={NavAsideData}
          LoggedInUser={true}
          LoggedMenu={NavAsideLoggedInOptions}
          userNoImage={userNoImage}
        />
      </Nav.Primary>
    </Nav>
  ),
}
