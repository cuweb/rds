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

export const ProxyError: Story = {
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
              <TextMedia.Content headerType="h1" title="We are experiencing problems" width={100} isLight>
                <p>
                  We are currently experiencing problems with our web server infrastructure. The problem should be fixed
                  momentarily.
                </p>
              </TextMedia.Content>
            </TextMedia>
          </Section>
        </Main>
      </>
    )
  },
}
