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
import { PeopleData } from '../../data/PeopleData'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const PeopleCardOptions: Story = {
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
            <HeroTextImage.Content title="All the Cards" headerType="h1" />
          </HeroTextImage>

          <Container>
            <Heading text="People Cards: Default" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map((item) => (
                <Card key={item?.id} isCenter>
                  <a href={item?.link}>
                    <Card.Figure isRound>
                      <img src={item?.image} alt={item?.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
                      <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="People Cards: Shadow on Hover" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map((item) => (
                <Card key={item?.id} isCenter hasShadow="onHover">
                  <a href={item?.link}>
                    <Card.Figure isRound>
                      <img src={item?.image} alt={item?.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
                      <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="People Cards: Shadow on Static & Hover" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map((item) => (
                <Card key={item?.id} isCenter hasShadow="onCard">
                  <a href={item?.link}>
                    <Card.Figure isRound>
                      <img src={item?.image} alt={item?.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
                      <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="People Cards: Default with Grey Bg" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey isCenter>
                  <a href={item?.link}>
                    <Card.Figure isRound>
                      <img src={item?.image} alt={item?.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
                      <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="People Cards: Shadow on Hover with Grey Bg" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey isCenter hasShadow="onHover">
                  <a href={item?.link}>
                    <Card.Figure isRound>
                      <img src={item?.image} alt={item?.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
                      <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="People Cards: Shadow on Static & Hover with Grey Bg" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey isCenter hasShadow="onCard">
                  <a href={item?.link}>
                    <Card.Figure isRound>
                      <img src={item?.image} alt={item?.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
                      <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="People Cards: Default" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map((item) => (
                <Card key={item?.id} isCenter>
                  <a href={item?.link}>
                    <Card.Figure isRound>
                      <img src={item?.image} alt={item?.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
                      <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="People Cards: Shadow on Hover" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map((item) => (
                <Card key={item?.id} isCenter hasShadow="onHover">
                  <a href={item?.link}>
                    <Card.Figure isRound>
                      <img src={item?.image} alt={item?.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
                      <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="People Cards: Shadow on Static & Hover" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map((item) => (
                <Card key={item?.id} isCenter hasShadow="onCard">
                  <a href={item?.link}>
                    <Card.Figure isRound>
                      <img src={item?.image} alt={item?.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
                      <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="People Cards: Default with Grey Bg" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey isCenter>
                  <a href={item?.link}>
                    <Card.Figure isRound>
                      <img src={item?.image} alt={item?.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
                      <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="People Cards: Shadow on Hover with Grey Bg" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey isCenter hasShadow="onHover">
                  <a href={item?.link}>
                    <Card.Figure isRound>
                      <img src={item?.image} alt={item?.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
                      <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="People Cards: Shadow on Static & Hover with Grey Bg" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey isCenter hasShadow="onCard">
                  <a href={item?.link}>
                    <Card.Figure isRound>
                      <img src={item?.image} alt={item?.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
                      <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
                    </Card.Content>
                  </a>
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
