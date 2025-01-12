import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavAsideData } from '../../data/NavData'
import { Embed } from './Embed'

const meta: Meta = {
  title: 'Components/Embed/Examples',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const SinglePara = () => {
  return (
    <>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

export const LayoutExamples: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
          {/* <Nav.Menu menu={NavDataSingle} /> */}
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

      <Main maxWidth="5xl">
        <Section maxWidth="max">
          <Embed>
            <Embed.YouTube title="test" url="https://www.youtube.com/watch?v=Fbb1gdTcH-A" />
          </Embed>
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Embed>
          <Embed.YouTube title="test" url="https://www.youtube.com/watch?v=Fbb1gdTcH-A" />
        </Embed>
        <Embed>
          <Embed.YouTube title="test" url="https://www.youtube.com/watch?v=Fbb1gdTcH-A" />
        </Embed>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Embed>
          <Embed.YouTube title="test" url="https://www.youtube.com/watch?v=Fbb1gdTcH-A" />
        </Embed>

        <Section maxWidth="7xl" isGrey>
          <Embed>
            <Embed.YouTube title="test" url="https://www.youtube.com/watch?v=Fbb1gdTcH-A" />
          </Embed>
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Embed>
          <Embed.YouTube title="test" url="https://www.youtube.com/watch?v=Fbb1gdTcH-A" />
        </Embed>

        <Section maxWidth="7xl">
          <Embed>
            <Embed.YouTube title="test" url="https://www.youtube.com/watch?v=Fbb1gdTcH-A" />
          </Embed>
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Section maxWidth="full">
          <Embed>
            <Embed.YouTube title="test" url="https://www.youtube.com/watch?v=Fbb1gdTcH-A" />
          </Embed>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
