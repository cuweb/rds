import type { Meta, StoryObj } from '@storybook/react'
import { TopBar } from './TopBar'
import { TopBarDataSingle } from '../../data/TopBarData'

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
          {TopBarDataSingle.map((topBarLink, i) => (
            <>
              {!topBarLink.submenu && (
                <a key={i} href={topBarLink.href} className="cu-topbar--parent-link">
                  {topBarLink.title}
                </a>
              )}
              {topBarLink.submenu && (
                <TopBar.SubMenu label={topBarLink.title}>
                  {topBarLink.submenu.map((topBarSubLink, s) => (
                    <a key={s} href={topBarSubLink.href} className="cu-topbar--more-nav">
                      {topBarSubLink.title}
                    </a>
                  ))}
                </TopBar.SubMenu>
              )}
            </>
          ))}
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
          {TopBarDataSingle.map((topBarLink, i) => (
            <>
              {!topBarLink.submenu && (
                <a key={i} href={topBarLink.href} className="cu-topbar--parent-link">
                  {topBarLink.title}
                </a>
              )}
              {topBarLink.submenu && (
                <TopBar.SubMenu label={topBarLink.title}>
                  {topBarLink.submenu.map((topBarSubLink, s) => (
                    <a key={s} href={topBarSubLink.href} className="cu-topbar--more-nav">
                      {topBarSubLink.title}
                    </a>
                  ))}
                </TopBar.SubMenu>
              )}
            </>
          ))}
        </TopBar.Menu>
      </TopBar.Secondary>
    </TopBar>
  ),
}
