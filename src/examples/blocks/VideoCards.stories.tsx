import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'
import { Column } from '../../layouts/Column/Column'
import { TopBar } from '../../components/TopBar/TopBar'
import { Heading } from '../../components/Heading/Heading'
import { Card } from '../../components/Card/Card'
import { VideoData } from '../../data/VideoData'
import { TextImage } from '../../components/TextImage/TextImage'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const VideoCardOptions: Story = {
  render: () => (
    <>
      <TopBar>
        <TopBar.Primary>
          <TopBar.Logo link="https://carleton.ca/webservices">
            <a href="https://carleton.ca" className="cu-topbar--logo">
              <img
                className="culogo"
                src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
                width="130"
                height="35"
                alt="Logo"
              />
              <img
                className="cushield"
                src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg"
                width="28"
                height="35"
                alt="Logo"
              />
            </a>
          </TopBar.Logo>
          <TopBar.Aside />
        </TopBar.Primary>
      </TopBar>

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
                <Card key={id} noLink>
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
                <Card key={id} noLink hasShadow="onCard">
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
                <Card key={id} isGrey noLink>
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
                <Card key={id} isGrey noLink hasShadow="onCard">
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
                <Card key={id} noLink>
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
                <Card key={id} noLink hasShadow="onCard">
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
                <Card key={id} isGrey noLink>
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
                <Card key={id} isGrey noLink hasShadow="onCard">
                  <Card.Video source={source} />
                  <Card.Header>{title}</Card.Header>
                </Card>
              ))}
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}
