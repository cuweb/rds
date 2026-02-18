import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Main } from '../Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { Column } from '../Column/Column'
import { Nav } from '../../components/Nav/Nav'
import { NavButtonsData } from '../../data/NavData'
import { Section } from '../Section/Section'
import { ImageCover } from './ImageCover'
import { PageHeader } from '../../components/PageHeader/PageHeader'

const meta: Meta = {
  title: 'Layouts/Image Cover/Examples',
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
          <Nav.Aside>
            <Nav.Buttons menu={NavButtonsData} />
          </Nav.Aside>
        </Nav.Top>
      </Nav>

      <Main maxWidth="5xl">
        <ImageCover maxWidth="5xl" opacity={85}>
          <PageHeader
            as="h1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Page Header"
            size="lg"
          />
        </ImageCover>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <ImageCover maxWidth="5xl">
          <SinglePara />
          <SinglePara />
          <Section>
            <Column cols="2">
              <Column.Content>
                <p>
                  Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                  viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                  malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
                </p>
                <p>
                  Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis
                  laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero
                  gravida tempus. Phasellus in egestas sapien ac libero.
                </p>
              </Column.Content>
              <Column.Content>
                <p>
                  Right. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                  viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                  malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
                </p>
                <p>
                  Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis
                  laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero
                  gravida tempus. Phasellus in egestas sapien ac libero.
                </p>
              </Column.Content>
            </Column>
          </Section>
          <Section maxWidth="7xl">
            <Column cols="3">
              <Column.Content>
                <p>
                  Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                  viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                  malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
                </p>
                <p>
                  Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis
                  laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero
                  gravida tempus. Phasellus in egestas sapien ac libero.
                </p>
              </Column.Content>
              <Column.Content>
                <p>
                  Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                  viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                  malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
                </p>
                <p>
                  Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis
                  laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero
                  gravida tempus. Phasellus in egestas sapien ac libero.
                </p>
              </Column.Content>
              <Column.Content>
                <p>
                  Right. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                  viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                  malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
                </p>
                <p>
                  Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis
                  laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero
                  gravida tempus. Phasellus in egestas sapien ac libero.
                </p>
              </Column.Content>
            </Column>
          </Section>
          <SinglePara />
        </ImageCover>

        <ImageCover maxWidth="5xl" opacity={85}>
          <SinglePara />
        </ImageCover>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <ImageCover maxWidth="7xl" opacity={90}>
          <PageHeader
            as="h1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Page Header"
            size="lg"
          />
          <Column cols="3">
            <Column.Content>
              <p>
                Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
              </p>
              <p>
                Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis
                laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero
                gravida tempus. Phasellus in egestas sapien ac libero.
              </p>
            </Column.Content>
            <Column.Content>
              <p>
                Right. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
              </p>
              <p>
                Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis
                laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero
                gravida tempus. Phasellus in egestas sapien ac libero.
              </p>
            </Column.Content>
            <Column.Content>
              <p>
                Extra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
              </p>
              <p>
                Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis
                laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero
                gravida tempus. Phasellus in egestas sapien ac libero.
              </p>
            </Column.Content>
          </Column>
        </ImageCover>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <ImageCover maxWidth="5xl" opacity={85}>
          <PageHeader
            as="h1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Page Header"
            size="lg"
          />
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </ImageCover>
      </Main>

      <FooterStandard />
    </>
  ),
}
