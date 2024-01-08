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
        <Nav.Menu>
          {TopBarDataSingle.map((topBarLink, index) => {
            return (
              <>
                {topBarLink.submenu ? (
                  <>
                    <button key={index} className="cu-topbar--parent-link">
                      {topBarLink.title}
                    </button>
                    {topBarLink.submenu && <Nav.SubMenu submenu={topBarLink.submenu} />}
                  </>
                ) : (
                  <a key={index} href={topBarLink.href} className="">
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
