import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { FullBanner } from './FullBanner'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'
import { NavButtonsData } from '../../data/NavData'

const meta: Meta = {
  title: 'Components/Full Banner/Examples',
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

export const ImageExamples: Story = {
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
        <FullBanner>
          <FullBanner.Image>
            <img alt="Top down view of a desk" src="https://picsum.photos/id/20/1920/840" />
          </FullBanner.Image>
          <FullBanner.Content headerType="h1" title="The nostalgia is real.">
            <p>
              The launch of the iPod revolutionized how the world consumes music on the move! The launch of the iPod
              revolutionized how the world consumes music on the move!
            </p>
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="grey" title="Request Information" />
            </ButtonGroup>
          </FullBanner.Content>
        </FullBanner>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <FullBanner>
          <FullBanner.Image>
            <img alt="Top down view of a desk" src="https://picsum.photos/id/20/1920/840" />
          </FullBanner.Image>
          <FullBanner.Content headerType="h1" title="The nostalgia is real.">
            <p>The launch of the iPod revolutionized how the world.</p>
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="grey" title="Request Information" />
            </ButtonGroup>
          </FullBanner.Content>
        </FullBanner>

        <FullBanner>
          <FullBanner.Image>
            <img alt="Top down view of a desk" src="https://picsum.photos/id/20/1920/840" />
          </FullBanner.Image>
          <FullBanner.Content headerType="h1" title="The nostalgia is real.">
            <p>
              The launch of the iPod revolutionized how the world consumes music on the move! The launch of the iPod
              revolutionized how the world consumes music on the move!
            </p>
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="grey" title="Request Information" />
            </ButtonGroup>
          </FullBanner.Content>
        </FullBanner>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <FullBanner>
          <FullBanner.Image>
            <img alt="Top down view of a desk" src="https://picsum.photos/id/20/1920/840" />
          </FullBanner.Image>
          <FullBanner.Content headerType="h1" title="The nostalgia is real.">
            <p>
              The launch of the iPod revolutionized how the world consumes music on the move! The launch of the iPod
              revolutionized how the world consumes music on the move!
            </p>
          </FullBanner.Content>
        </FullBanner>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <FullBanner>
          <FullBanner.Image>
            <img alt="Top down view of a desk" src="https://picsum.photos/id/20/1920/840" />
          </FullBanner.Image>
          <FullBanner.Content headerType="h1" title="The nostalgia is real." />
        </FullBanner>
      </Main>

      <FooterStandard />
    </>
  ),
}
