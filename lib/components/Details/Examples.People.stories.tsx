import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavAsideData } from '../../data/NavData'
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

export const PeopleBanner: Story = {
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
        <PageHeader as="h1" header="Sith Lord Wrinkle Face" content="Jedi Master & Jedi Council Member" size="lg">
          <Figure align="right" rounded="lg" size="md">
            <img
              alt="Sample for figure stories file"
              height="266"
              src="https://picsum.photos/id/1062/400/400"
              width="400"
            />
          </Figure>
        </PageHeader>

        <Details>
          <Details.Item>Certificate, Padawan Academy of Jedi Arts</Details.Item>
          <Details.Item>Sector A29 Onraed</Details.Item>
          <Details.Item>
            <a href="#">greely@thejediyouseek.com</a>
          </Details.Item>
          <Details.Item>613-520-2600 x1234</Details.Item>
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
