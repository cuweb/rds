import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { PageHeader } from '../PageHeader/PageHeader'
import { Nav } from '../Nav/Nav'
import { NavButtonsData } from '../../data/NavData'
import { Figure } from './Figure'

const meta: Meta = {
  title: 'Components/Figure/Examples',
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
          <Nav.Aside>
            <Nav.Buttons menu={NavButtonsData} />
          </Nav.Aside>
        </Nav.Top>
      </Nav>

      <Main maxWidth="5xl">
        <PageHeader
          as="h1"
          header="Figure Examples"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
          size="lg"
        />

        <SinglePara />

        <Figure
          align="left"
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at aliquet lorem, id lobortis eros. Maecenas erat nibh, imperdiet vel fermentum ut, posuere faucibus dolor."
          rounded="lg"
          size="md"
        >
          <img
            alt="Sample for figure stories file"
            height="266"
            src="https://picsum.photos/id/15/1600/900"
            width="400"
          />
        </Figure>

        <SinglePara />
        <SinglePara />
        <SinglePara />

        <Figure
          align="right"
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at aliquet lorem, id lobortis eros. Maecenas erat nibh, imperdiet vel fermentum ut, posuere faucibus dolor."
          rounded="lg"
          size="sm"
        >
          <img
            alt="Sample for figure stories file"
            height="266"
            src="https://picsum.photos/id/15/1600/900"
            width="400"
          />
        </Figure>

        <SinglePara />
        <SinglePara />
        <SinglePara />

        <h2>Header Two</h2>
        <SinglePara />

        <Figure align="none" rounded="lg" size="full">
          <img
            alt="Sample for figure stories file"
            height="266"
            src="https://picsum.photos/id/15/1600/900"
            width="400"
          />
        </Figure>

        <Figure
          align="none"
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at aliquet lorem, id lobortis eros. Maecenas erat nibh, imperdiet vel fermentum ut, posuere faucibus dolor."
          rounded="lg"
          size="full"
        >
          <img
            alt="Sample for figure stories file"
            height="266"
            src="https://picsum.photos/id/15/1600/900"
            width="400"
          />
        </Figure>

        <SinglePara />

        <Figure align="left" rounded="lg" size="md">
          <img
            alt="Sample for figure stories file"
            height="266"
            src="https://picsum.photos/id/15/1600/900"
            width="400"
          />
        </Figure>

        <SinglePara />
        <SinglePara />
        <SinglePara />

        <Figure align="right" rounded="lg" size="sm">
          <img
            alt="Sample for figure stories file"
            height="266"
            src="https://picsum.photos/id/15/1600/900"
            width="400"
          />
        </Figure>
      </Main>

      <FooterStandard />
    </>
  ),
}
