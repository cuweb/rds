import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavAsideData } from '../../data/NavData'

const meta: Meta = {
  title: 'Components/Multi-day Calendar/Examples',
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
          <Nav.Logo title="Raven Design System" link="/" />
          {/* <Nav.Menu menu={NavDataSingle} /> */}
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

      <Main maxWidth="5xl">
        <Section maxWidth="7xl">
          <p>COMPONENT</p>
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <p>COMPONENT</p>
        <p>COMPONENT</p>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <p>COMPONENT</p>

        <Section maxWidth="7xl" isGrey>
          <p>COMPONENT</p>
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <p>COMPONENT</p>

        <Section maxWidth="7xl">
          <p>COMPONENT</p>
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Section maxWidth="full" isGrey>
          <p>COMPONENT</p>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
