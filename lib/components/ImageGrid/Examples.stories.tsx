import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavButtonsData } from '../../data/NavData'
import { ImageGrid } from './ImageGrid'
import { PageHeader } from '../PageHeader/PageHeader'

const meta: Meta = {
  title: 'Components/Image Grid/Examples',
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
        <Section maxWidth="7xl">
          <PageHeader
            as="h1"
            header="Image Grid Layouts"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            size="lg"
          />
          <ImageGrid cols="3" gridGap="2" maxWidth="5xl">
            <ImageGrid.Image imageUrl="https://picsum.photos/id/531/600/400" />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/626/600/400" />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/381/600/400" />
          </ImageGrid>
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <ImageGrid cols="3" gridGap="2" maxWidth="5xl">
          <ImageGrid.Image imageUrl="https://picsum.photos/id/531/600/400" />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/626/600/400" />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/381/600/400" />
        </ImageGrid>

        <ImageGrid cols="3" gridGap="2" maxWidth="5xl">
          <ImageGrid.Image imageUrl="https://picsum.photos/id/531/600/400" />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/626/600/400" />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/381/600/400" />
        </ImageGrid>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <ImageGrid cols="4" gridGap="2" maxWidth="5xl">
          <ImageGrid.Image imageUrl="https://picsum.photos/id/531/600/400" />
          <ImageGrid.Image
            colSpan="2"
            content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
            imageUrl="https://picsum.photos/id/531/600/400"
            link="https://github.com/cuweb/rds"
            rowSpan="2"
            title="Overlay Image Title"
          />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/531/600/400" />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/626/600/400" />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/381/600/400" />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/691/600/400" />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/163/600/400" />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/482/600/400" />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/572/600/400" />
        </ImageGrid>

        <Section maxWidth="7xl" isGrey>
          <ImageGrid cols="4" gridGap="2" maxWidth="5xl">
            <ImageGrid.Image imageUrl="https://picsum.photos/id/531/600/400" />
            <ImageGrid.Image
              colSpan="2"
              content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
              imageUrl="https://picsum.photos/id/531/600/400"
              link="https://github.com/cuweb/rds"
              rowSpan="2"
              title="Overlay Image Title"
            />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/531/600/400" />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/626/600/400" />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/381/600/400" />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/691/600/400" />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/163/600/400" />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/482/600/400" />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/572/600/400" />
          </ImageGrid>
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <ImageGrid cols="4">
          <ImageGrid.Image imageUrl="https://picsum.photos/id/531/600/400" />
          <ImageGrid.Image
            colSpan="3"
            content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
            imageUrl="https://picsum.photos/id/531/600/400"
            rowSpan="3"
            title="Overlay Image Title"
          />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/626/600/400" />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/381/600/400" />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/691/600/400" />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/289/600/400" />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/163/600/400" />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/482/600/400" />
        </ImageGrid>

        <Section>
          <ImageGrid cols="4">
            <ImageGrid.Image
              colSpan="3"
              content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
              imageUrl="https://picsum.photos/id/531/600/400"
              rowSpan="3"
              title="Overlay Image Title"
            />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/531/600/400" />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/516/600/400" />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/626/600/400" />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/381/600/400" />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/691/600/400" />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/163/600/400" />
            <ImageGrid.Image imageUrl="https://picsum.photos/id/482/600/400" />
          </ImageGrid>
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <ImageGrid cols="4">
          <ImageGrid.Image
            colSpan="2"
            content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
            imageUrl="https://picsum.photos/id/531/600/400"
            link="https://github.com/cuweb/rds"
            rowSpan="2"
            title="Overlay Image Title"
          />
          <ImageGrid.Image
            colSpan="2"
            content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
            imageUrl="https://picsum.photos/id/531/600/400"
            link="https://github.com/cuweb/rds"
            rowSpan="2"
            title="Ottawa Tulip Festival"
          />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/381/600/400" />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/691/600/400" />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/163/600/400" />
          <ImageGrid.Image imageUrl="https://picsum.photos/id/482/600/400" />
        </ImageGrid>
      </Main>

      <FooterStandard />
    </>
  ),
}
