import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavAsideData } from '../../data/NavData'
import { Quote } from './Quote'
import { PageHeader } from '../PageHeader/PageHeader'

const meta: Meta = {
  title: 'Components/Quote/Examples',
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
          <PageHeader
            as="h1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Quote Examples"
            size="lg"
          />
          <Quote cite="John Doe" graphic="border">
            <p>
              Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus.
            </p>
          </Quote>
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Quote cite="John Doe" graphic="border">
          <p>
            Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus.
          </p>
        </Quote>

        <Quote cite="John Doe" graphic="border">
          <p>
            Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus.
          </p>
        </Quote>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Quote cite="John Doe" graphic="border">
          <p>
            Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus.
          </p>
        </Quote>

        <Section maxWidth="7xl" isGrey>
          <Quote cite="John Doe" graphic="border">
            <p>
              Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus.
            </p>
          </Quote>
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Quote cite="John Doe" graphic="border">
          <p>
            Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus.
          </p>
        </Quote>

        <Section maxWidth="7xl">
          <Quote cite="John Doe" graphic="border">
            <p>
              Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus.
            </p>
          </Quote>
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
          <Quote cite="John Doe" graphic="border">
            <p>
              Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus.
            </p>
          </Quote>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
