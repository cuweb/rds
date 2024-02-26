import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { Column } from '../../layouts/Column/Column'
import { Nav } from '../../components/Nav/Nav'
import { Heading } from '../../components/Heading/Heading'
import { Card } from '../../components/Card/Card'
import { StatData } from '../../data/StatData'
import { TextImage } from '../../components/TextImage/TextImage'
import { NavDataSingle, NavAsideData } from '../../data/NavData'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const StatCards: Story = {
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
            <TextImage.Content headerType="h1" title="Stat Cards">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>

          <Container>
            <Heading text="Stat Cards: Default" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({ id, stat, desc }) => (
                <Card key={id} hasRedBorder noHover>
                  <Card.Stats stat={stat} desc={desc} />
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="Stat Cards: Shadow on Static" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({ id, stat, desc }) => (
                <Card key={id} hasRedBorder noHover hasShadow="onCard">
                  <Card.Stats stat={stat} desc={desc} />
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="Stat Cards: Default with Grey Bg" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({ id, stat, desc }) => (
                <Card key={id} isGrey hasRedBorder noHover>
                  <Card.Stats stat={stat} desc={desc} />
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="Stat Cards: Shadow on Static" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({ id, stat, desc }) => (
                <Card key={id} isGrey hasRedBorder noHover hasShadow="onCard">
                  <Card.Stats stat={stat} desc={desc} />
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Stat Cards: Default" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({ id, stat, desc }) => (
                <Card key={id} hasRedBorder noHover>
                  <Card.Stats stat={stat} desc={desc} />
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Stat Cards: Shadow on Static" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({ id, stat, desc }) => (
                <Card key={id} hasRedBorder noHover hasShadow="onCard">
                  <Card.Stats stat={stat} desc={desc} />
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Stat Cards: Default with Grey Bg" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({ id, stat, desc }) => (
                <Card key={id} isGrey hasRedBorder noHover>
                  <Card.Stats stat={stat} desc={desc} />
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Stat Cards: Shadow on Static" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({ id, stat, desc }) => (
                <Card key={id} isGrey hasRedBorder noHover hasShadow="onCard">
                  <Card.Stats stat={stat} desc={desc} />
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
