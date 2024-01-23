import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { Column } from '../../layouts/Column/Column'
import { Nav } from '../../components/Nav/Nav'
import { Heading } from '../../components/Heading/Heading'
import { Card } from '../../components/Card/Card'
import { VideoData } from '../../data/VideoData'
import { TextImage } from '../../components/TextImage/TextImage'
import { NavDataSingle, NavAsideData } from '../../data/NavData'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const VideoCards: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

      <Main>
        <Section hasProse>
          <TextImage hasBorder>
            <TextImage.Content headerType="h1" title="Video Cards">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>

          <Container>
            <Heading text="Video Cards: Default" />
            <Column cols="3">
              {VideoData.slice(0, 3).map(({ id, source, title }) => (
                <Card key={id} noHover>
                  <Card.Video source={source} />
                  <Card.Header>{title}</Card.Header>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="Video Cards: Shadow on Static" />
            <Column cols="3">
              {VideoData.slice(0, 3).map(({ id, source, title }) => (
                <Card key={id} noHover hasShadow="onCard">
                  <Card.Video source={source} />
                  <Card.Header>{title}</Card.Header>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="Video Cards: Default with Grey Bg" />
            <Column cols="3">
              {VideoData.slice(0, 3).map(({ id, source, title }) => (
                <Card key={id} isGrey noHover>
                  <Card.Video source={source} />
                  <Card.Header>{title}</Card.Header>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="Video Cards: Shadow on Static" />
            <Column cols="3">
              {VideoData.slice(0, 3).map(({ id, source, title }) => (
                <Card key={id} isGrey noHover hasShadow="onCard">
                  <Card.Video source={source} />
                  <Card.Header>{title}</Card.Header>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Video Cards: Default" />
            <Column cols="3">
              {VideoData.slice(0, 3).map(({ id, source, title }) => (
                <Card key={id} noHover>
                  <Card.Video source={source} />
                  <Card.Header>{title}</Card.Header>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Video Cards: Shadow on Static" />
            <Column cols="3">
              {VideoData.slice(0, 3).map(({ id, source, title }) => (
                <Card key={id} noHover hasShadow="onCard">
                  <Card.Video source={source} />
                  <Card.Header>{title}</Card.Header>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Video Cards: Default with Grey Bg" />
            <Column cols="3">
              {VideoData.slice(0, 3).map(({ id, source, title }) => (
                <Card key={id} isGrey noHover>
                  <Card.Video source={source} />
                  <Card.Header>{title}</Card.Header>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Video Cards: Shadow on Static" />
            <Column cols="3">
              {VideoData.slice(0, 3).map(({ id, source, title }) => (
                <Card key={id} isGrey noHover hasShadow="onCard">
                  <Card.Video source={source} />
                  <Card.Header>{title}</Card.Header>
                </Card>
              ))}
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
