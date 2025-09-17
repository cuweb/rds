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

export const AnError: Story = {
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
              <TextMedia.Content headerType="h1" title="Invalid request " width={100} isLight>
                <p>
                  The request was invalid. If you have concerns, please contact ITS at{' '}
                  <a href="https://carleton.ca/its">https://carleton.ca/its</a>
                </p>
              </TextMedia.Content>
            </TextMedia>
          </Section>
        </Main>
      </>
    )
  },
}
