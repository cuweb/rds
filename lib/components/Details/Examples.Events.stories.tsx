import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavButtonsData } from '../../data/NavData'
import { Details } from './Details'
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

export const EventsBanner: Story = {
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
        <PageHeader
          as="h1"
          header="Event Banner Example"
          content="Friday, March 31, 2023 from 10:00 am to 1:30 pm"
          size="lg"
        >
          <Figure align="right" rounded="lg" size="md">
            <img
              alt="Sample for figure stories file"
              height="266"
              src="https://picsum.photos/id/15/600/400"
              width="400"
            />
          </Figure>
        </PageHeader>

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

        <Details>
          <Details.Item isBold>Contact</Details.Item>
          <Details.Item>
            John Doe, <a href="/">Email John</a>, 613-520-2600 x1234
          </Details.Item>
        </Details>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />
        <SinglePara />
        <SinglePara />
      </Main>

      <FooterStandard />
    </>
  ),
}
