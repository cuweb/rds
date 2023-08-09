import type { Meta, StoryObj } from '@storybook/react'
import { TopBar } from './TopBar'
import { navDropDownStyles, navItemStyles, navLogoTitle } from './TopBar.Styles'

const meta: Meta<typeof TopBar> = {
  title: 'Components/TopBar',
  component: TopBar,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof TopBar>

export const Default: Story = {
  render: () => (
    <TopBar>
      <TopBar.Primary>
        <TopBar.Logo title="Web Services" link="https://carleton.ca/webservices">
          <a href="https://carleton.ca" className="cu-topbar--logo">
            <img
              className="culogo"
              src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
              width="130"
              height="35"
              alt="Logo"
            />
            <img
              className="cushield"
              src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg"
              width="28"
              height="35"
              alt="Logo"
            />
          </a>
        </TopBar.Logo>
        <TopBar.Menu>
          <a href="/poop" className="cu-topbar--more-nav">
            LINK 1
          </a>
          <a href="/poop" className="cu-topbar--more-nav">
            LINK 2
          </a>
          <a href="/poop" className="cu-topbar--more-nav">
            LINK 3
          </a>
          <TopBar.SubMenu label="LINK 4">
            <a href="/" className="cu-topbar--more-nav">
              LINK 4.1
            </a>
            <a href="/" className="cu-topbar--more-nav">
              LINK 4.2
            </a>
            <a href="/" className="cu-topbar--more-nav">
              LINK 4.3
            </a>
          </TopBar.SubMenu>
        </TopBar.Menu>
        <TopBar.Aside />
      </TopBar.Primary>
    </TopBar>
  ),
}

export const Double: Story = {
  render: () => (
    <TopBar>
      <TopBar.Primary>
        <TopBar.Logo title="Web Services" link="https://carleton.ca/webservices">
          <a href="https://carleton.ca" className="cu-topbar--logo">
            <img
              className="culogo"
              src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
              width="130"
              height="35"
              alt="Logo"
            />
            <img
              className="cushield"
              src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg"
              width="28"
              height="35"
              alt="Logo"
            />
          </a>
        </TopBar.Logo>
        <TopBar.Aside />
      </TopBar.Primary>
      <TopBar.Secondary>
        <TopBar.Menu>
          <a href="/" className="cu-topbar--parent-link">
            LINK1
          </a>
          <a href="/" className="cu-topbar--parent-link">
            LINK2
          </a>
          <a href="/" className="cu-topbar--parent-link">
            LINK3
          </a>
          <a href="/" className="cu-topbar--parent-link">
            LINK4
          </a>
          <a href="/" className="cu-topbar--parent-link">
            LINK5
          </a>
          <a href="/" className="cu-topbar--parent-link">
            LINK6
          </a>
        </TopBar.Menu>
      </TopBar.Secondary>
    </TopBar>
  ),
}
