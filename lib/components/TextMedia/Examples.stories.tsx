import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Column } from '../../layouts/Column/Column'
import { Nav } from '../Nav/Nav'
import { TextMedia } from './TextMedia'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { NavAsideData } from '../../data/NavData'

const meta: Meta = {
  title: 'Components/Text & Media/Examples',
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
          <TextMedia>
            <TextMedia.Content hasUnderline title="Text and Image Component" width={50}>
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
              <p>
                Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil
                voluptatem non. Nobis voluptatem dolorum et eum doloremque cupiditate velit.
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
            <TextMedia.BgImage imageUrl="https://picsum.photos/id/431/600/460" hasBorder />
          </TextMedia>
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <TextMedia>
          <TextMedia.Content hasUnderline title="Text and Image Component" width={100}>
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non.
            </p>
          </TextMedia.Content>
        </TextMedia>
        <TextMedia>
          <TextMedia.Content hasUnderline title="Text and Image Component" width={100}>
            <p>
              Perferendis excepturi delectus nihil voluptatem non. Molestiae excepturi delectus quas dolores accusamus
              in. Praesent quis ligula quis nulla malesuada tempor.
            </p>
          </TextMedia.Content>
        </TextMedia>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <TextMedia>
          <TextMedia.Content hasUnderline title="Text and Image Component" width={50}>
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
              accusamus in. Praesent quis ligula quis nulla malesuada tempor.
            </p>
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
          <TextMedia.Aside align="center">
            <img alt="Presentation only" height="460" src="https://picsum.photos/id/431/600/460" width="600" />
          </TextMedia.Aside>
        </TextMedia>

        <Section maxWidth="7xl" isGrey>
          <TextMedia>
            <TextMedia.Content hasUnderline title="Text and Image Component" width={50}>
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
              <p>
                Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil
                voluptatem non. Nobis voluptatem dolorum et eum doloremque cupiditate velit.
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
            <TextMedia.Aside align="center" hasBorder>
              <img alt="Presentation only" height="460" src="https://picsum.photos/id/431/600/460" width="600" />
            </TextMedia.Aside>
          </TextMedia>
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <TextMedia>
          <TextMedia.Content hasUnderline title="Text and Image Component" width={50}>
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
              accusamus in. Praesent quis ligula quis nulla malesuada tempor.
            </p>
            <p>
              Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil
              voluptatem non. Nobis voluptatem dolorum et eum doloremque cupiditate velit.
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

        <Section maxWidth="7xl">
          <TextMedia>
            <TextMedia.Content hasUnderline title="Text and Image Component" width={50}>
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
              <p>
                Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil
                voluptatem non. Nobis voluptatem dolorum et eum doloremque cupiditate velit.
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

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Column cols="2">
          <Column.Content>
            <p>
              Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra
              in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada
              metus, et tristique dolor. Suspendisse vestibulum hendrerit.
            </p>
          </Column.Content>
          <Column.Content>
            <p>
              Right. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
              viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
              malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
            </p>
          </Column.Content>
        </Column>

        <Section maxWidth="full" isGrey>
          <TextMedia>
            <TextMedia.Content hasUnderline title="Text and Image Component" width={50}>
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
              <p>
                Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil
                voluptatem non. Nobis voluptatem dolorum et eum doloremque cupiditate velit.
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
            <TextMedia.Aside align="center" hasBorder>
              <img alt="Presentation only" height="460" src="https://picsum.photos/id/431/600/460" width="600" />
            </TextMedia.Aside>
          </TextMedia>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
