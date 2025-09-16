import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../../../layouts/Main/Main'
import { Nav } from '../../../components/Nav/Nav'
import { Section } from '../../../layouts/Section/Section'
import { TextMedia } from '../../../components/TextMedia/TextMedia'

const meta: Meta = {
  title: 'Prototypes/Server Pages',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const Maintenance: Story = {
  render: () => {
    return (
      <>
        <Nav>
          <Nav.Top>
            <Nav.Logo />
          </Nav.Top>
        </Nav>

        <Main>
          <Section>
            <TextMedia>
              <TextMedia.Content headerType="h1" title="Maintenance" width={100} isLight>
                <p>This service is currently unavailable. We are working on the issue.</p>
                <p>For detailed ITS outage and contact information:</p>
                <ul>
                  <li>
                    Status:{' '}
                    <a href="https://carleton.ca/its/service-status/">
                      Information Technology Services - Current Service Alerts
                    </a>
                  </li>
                  <li>
                    Phone: <a href="tel:+16135203700">613-520-3700</a>
                  </li>
                  <li>
                    Email: <a href="mailto:its.service.desk@carleton.ca">its.service.desk@carleton.ca</a>
                  </li>
                </ul>
              </TextMedia.Content>
            </TextMedia>
          </Section>
        </Main>
      </>
    )
  },
}
