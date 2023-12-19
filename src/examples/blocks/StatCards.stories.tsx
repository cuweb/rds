import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'
import { Column } from '../../layouts/Column/Column'
import { TopBar } from '../../components/TopBar/TopBar'
import { HeroTextImage } from '../../_deprecated/HeroTextImage/HeroTextImage'
import { Heading } from '../../components/Heading/Heading'
import { Card } from '../../components/Card/Card'
import { StatData } from '../../data/StatData'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const StatCardOptions: Story = {
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
          <HeroTextImage maxWidth="5xl" hasBorder>
            <HeroTextImage.Content title="Stat Card Options" headerType="h1" />
          </HeroTextImage>

          <Container>
            <Heading text="Video Cards: Default" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({ id, stat, desc }) => (
                <Card key={id} hasRedBorder noLink>
                  <Card.Content>
                    <Card.Stats stat={stat} desc={desc} />
                  </Card.Content>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="Video Cards: Shadow on Static" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({ id, stat, desc }) => (
                <Card key={id} hasRedBorder noLink hasShadow="onCard">
                  <Card.Content>
                    <Card.Stats stat={stat} desc={desc} />
                  </Card.Content>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="Video Cards: Default with Grey Bg" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({ id, stat, desc }) => (
                <Card key={id} isGrey hasRedBorder noLink>
                  <Card.Content>
                    <Card.Stats stat={stat} desc={desc} />
                  </Card.Content>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="Video Cards: Shadow on Static" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({ id, stat, desc }) => (
                <Card key={id} isGrey hasRedBorder noLink hasShadow="onCard">
                  <Card.Content>
                    <Card.Stats stat={stat} desc={desc} />
                  </Card.Content>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Video Cards: Default" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({ id, stat, desc }) => (
                <Card key={id} hasRedBorder noLink>
                  <Card.Content>
                    <Card.Stats stat={stat} desc={desc} />
                  </Card.Content>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Video Cards: Shadow on Static" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({ id, stat, desc }) => (
                <Card key={id} hasRedBorder noLink hasShadow="onCard">
                  <Card.Content>
                    <Card.Stats stat={stat} desc={desc} />
                  </Card.Content>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Video Cards: Default with Grey Bg" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({ id, stat, desc }) => (
                <Card key={id} isGrey hasRedBorder noLink>
                  <Card.Content>
                    <Card.Stats stat={stat} desc={desc} />
                  </Card.Content>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Video Cards: Shadow on Static" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({ id, stat, desc }) => (
                <Card key={id} isGrey hasRedBorder noLink hasShadow="onCard">
                  <Card.Content>
                    <Card.Stats stat={stat} desc={desc} />
                  </Card.Content>
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
