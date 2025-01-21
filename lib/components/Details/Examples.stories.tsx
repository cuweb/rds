import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavButtonsData } from '../../data/NavData'
import { Details } from './Details'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Figure } from '../Figure/Figure'
import { PageHeader } from '../PageHeader/PageHeader'

const meta: Meta = {
  title: 'Components/Details/Examples',
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
        <Nav.Top>
          <Nav.Logo title="Raven Design System" link="/" />
          {/* <Nav.Menu menu={NavDataSingle} /> */}
          <Nav.Buttons menu={NavButtonsData} />
        </Nav.Top>
      </Nav>

      <Main maxWidth="5xl">
        <Section>
          <PageHeader
            as="h1"
            header="Details Examples"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            size="lg"
          />
          <Details>
            <Details.Item isBold>Hybrid Event</Details.Item>
            <Details.Item>Raven's Nest, 1125 Colonel By Drive</Details.Item>
            <Details.Item>
              <a href="/">Teams meeting link</a>
            </Details.Item>
            <Details.Item>
              <strong>Cost:</strong> $20 per adult, $15 for youth/senior
            </Details.Item>
          </Details>
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Details hasDividers>
          <Details.Item isBold>Hybrid Event</Details.Item>
          <Details.Item>Raven's Nest, 1125 Colonel By Drive</Details.Item>
          <Details.Item>
            <a href="/">Teams meeting link</a>
          </Details.Item>
          <Details.Item>
            <strong>Cost:</strong> $20 per adult, $15 for youth/senior
          </Details.Item>
        </Details>

        <Details hasDividers>
          <Details.Item isBold>Contact</Details.Item>
          <Details.Item>
            John Doe, <a href="/">Email John</a>, 613-520-2600 x1234
          </Details.Item>
        </Details>
      </Main>

      <FooterStandard />
    </>
  ),
}
