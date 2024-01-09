import type { Meta, StoryObj } from '@storybook/react'
import { Nav } from './Nav'
import { TopBarDataSingle } from '../../data/TopBarData'
import { navItemStyles } from './Nav.Styles'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

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
        <Nav.Menu>
          {TopBarDataSingle.map((topBarLink, index) => {
            return (
              <>
                {topBarLink.submenu ? (
                  <>
                    <button key={index} className={navItemStyles.navParentItem + ` ` + navItemStyles.navItem}>
                      {topBarLink.title}
                      <ChevronDownIcon className={navItemStyles.navArrow} aria-hidden="true" />
                    </button>
                    {topBarLink.submenu && <Nav.SubMenu submenu={topBarLink.submenu} />}
                  </>
                ) : (
                  <a key={index} href={topBarLink.href} className={navItemStyles.navItem}>
                    {topBarLink.title}
                  </a>
                )}
              </>
            )
          })}
        </Nav.Menu>
        <Nav.Aside />
      </Nav.Primary>
    </Nav>
  ),
}

export const Secondary: Story = {
  render: () => (
    <Nav>
      <Nav.Primary>
        <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
        <Nav.Aside />
      </Nav.Primary>
      <Nav.Secondary>
        <Nav.Menu>
          {TopBarDataSingle.map((topBarLink, index) => {
            return (
              <>
                {topBarLink.submenu ? (
                  <>
                    <button key={index} className={navItemStyles.navParentItem + ` ` + navItemStyles.navItem}>
                      {topBarLink.title}
                      <ChevronDownIcon className={navItemStyles.navArrow} aria-hidden="true" />
                    </button>
                    {topBarLink.submenu && <Nav.SubMenu submenu={topBarLink.submenu} />}
                  </>
                ) : (
                  <a key={index} href={topBarLink.href} className={navItemStyles.navItem}>
                    {topBarLink.title}
                  </a>
                )}
              </>
            )
          })}
        </Nav.Menu>
      </Nav.Secondary>
    </Nav>
  ),
}
