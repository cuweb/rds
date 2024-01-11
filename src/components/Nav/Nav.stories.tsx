import type { Meta, StoryObj } from '@storybook/react'
import { Nav } from './Nav'
import { TopBarDataSingle } from '../../data/TopBarData'

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
        <Nav.Menu menu={TopBarDataSingle} />
        <Nav.Aside />
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
          <Nav.Aside />
        </Nav.Primary>
      </Nav>
      <Nav.Secondary>
        <Nav.Menu menu={TopBarDataSingle} />
      </Nav.Secondary>
    </>
  ),
}
