import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { Column } from '../Column/Column'
import { Nav } from '../../components/Nav/Nav'
import { TextMedia } from '../../components/TextMedia/TextMedia'
import { WideImage } from '../../components/WideImage/WideImage'
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup'
import { Button } from '../../components/Button/Button'
import { Section } from '../Section/Section'
import { NavButtonsData } from '../../data/NavData'
import { WideWave } from './WideWave'
import { PageHeader } from '../../components/PageHeader/PageHeader'

const meta: Meta = {
  title: 'Layouts/Wide Wave/Examples',
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
        <WideWave wave="red">
          <PageHeader
            as="h1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Page Header"
            size="lg"
          />
        </WideWave>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <WideWave>
          <Section maxWidth="7xl">
            <TextMedia>
              <TextMedia.Content hasUnderline title="Website and Application Development" width={50}>
                <p>
                  Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                  reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                  accusamus in. Praesent quis ligula quis nulla malesuada tempor.
                </p>
                <ButtonGroup>
                  <a
                    className="cu-button cu-button--red"
                    href="https://challenge.carleton.ca/parkinsons-alzheimers-early-detection/"
                  >
                    Read more
                  </a>
                </ButtonGroup>
              </TextMedia.Content>
              <TextMedia.BgImage imageUrl="https://picsum.photos/id/431/600/460" />
            </TextMedia>
          </Section>
        </WideWave>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <WideWave wave="black">
          <Section maxWidth="7xl">
            <TextMedia>
              <TextMedia.Content hasUnderline title="Website and Application Development" width={50}>
                <p>
                  Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                  reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                  accusamus in. Praesent quis ligula quis nulla malesuada tempor.
                </p>
                <ButtonGroup>
                  <a
                    className="cu-button cu-button--red"
                    href="https://challenge.carleton.ca/parkinsons-alzheimers-early-detection/"
                  >
                    Read more
                  </a>
                </ButtonGroup>
              </TextMedia.Content>
              <TextMedia.BgImage imageUrl="https://picsum.photos/id/431/600/460" />
            </TextMedia>
          </Section>
        </WideWave>

        <WideWave wave="red">
          <SinglePara />
        </WideWave>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <WideWave wave="black">
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
        </WideWave>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <WideWave wave="red">
          <PageHeader
            as="h1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Page Header"
            size="lg"
          />
          <h2>White Background</h2>
          <SinglePara />
          <WideImage image="https://picsum.photos/id/381/600/400" isType="dark" opacity={30} title="Wide Image">
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non.
            </p>
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="dark-grey" title="Request Information" />
            </ButtonGroup>
          </WideImage>
          <SinglePara />
        </WideWave>
      </Main>

      <FooterStandard />
    </>
  ),
}
