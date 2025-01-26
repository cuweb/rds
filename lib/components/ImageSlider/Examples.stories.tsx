import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavButtonsData } from '../../data/NavData'
import { ImageSlider } from './ImageSlider'
import { PageHeader } from '../PageHeader/PageHeader'

const meta: Meta = {
  title: 'Components/Image Slider/Examples',
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

export const LayoutExample: Story = {
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
        <Section maxWidth="7xl">
          <PageHeader
            as="h1"
            header="Image Slider Layouts"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            size="lg"
          />
          <ImageSlider slidesPerViewDesktop={3} slidesPerViewMobile={1} slidesPerViewTablet={2}>
            <ImageSlider.Item
              focalPointX={0}
              focalPointY={10}
              imageUrl="https://picsum.photos/id/531/600/400"
              link="#test"
              title="Image Title"
            />
            <ImageSlider.Item aspectRatio="landscape" imageUrl="https://picsum.photos/id/626/600/400" link="#" />
            <ImageSlider.Item imageUrl="https://picsum.photos/id/381/600/400" link="#" />
            <ImageSlider.Item imageUrl="https://picsum.photos/id/691/600/400" link="#" />
            <ImageSlider.Item imageUrl="https://picsum.photos/id/163/600/400" link="#" />
            <ImageSlider.Item imageUrl="https://picsum.photos/id/482/600/400" link="#" />
            <ImageSlider.Item imageUrl="https://picsum.photos/id/111/600/400" link="#" />
            <ImageSlider.Item imageUrl="https://picsum.photos/id/888/600/400" link="#" />
          </ImageSlider>
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />
      </Main>

      <FooterStandard />
    </>
  ),
}
