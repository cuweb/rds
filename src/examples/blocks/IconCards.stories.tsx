import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'
import { TopBar } from '../../components/TopBar/TopBar'
import { Heading } from '../../components/Heading/Heading'
import { TextImage } from '../../components/TextImage/TextImage'
import { Column } from '../../layouts/Column/Column'
import { NewsData } from '../../data/NewsData'
import { Card } from '../../components/Card/Card'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const IconCardOptions: Story = {
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
          <TextImage>
            <TextImage.Content headerType="h1" title="Icon Cards">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>

          <Container>
            <Heading text="Heading" />
            <Column cols="3">
              {NewsData.slice(0, 3).map(({ id, link, title }) => (
                <Card key={id} hasShadow="onCard">
                  <a href={link}>
                    {/* <Card.Figure>
                      <img src={image} alt={alt} width="400" height="266" />
                    </Card.Figure> */}
                    <Card.Content>
                      <Card.Header text={title} />
                      <Card.Description
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst."
                        buttonText="Read More"
                        buttonLink="#"
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="Heading" />
            <Column cols="2">
              {NewsData.slice(0, 2).map(({ id, link, title }) => (
                <Card key={id} hasShadow="onCard">
                  <a href={link}>
                    {/* <Card.Figure>
                      <img src={image} alt={alt} width="400" height="266" />
                    </Card.Figure> */}
                    <Card.Content>
                      <Card.Header text={title} />
                      <Card.Description
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst."
                        buttonText="Read More"
                        buttonLink="#"
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="Heading" maxWidth="7xl" />
            <Column cols="4" maxWidth="7xl">
              {NewsData.slice(0, 4).map(({ id, link, title }) => (
                <Card key={id} hasShadow="onCard">
                  <a href={link}>
                    {/* <Card.Figure>
                      <img src={image} alt={alt} width="400" height="266" />
                    </Card.Figure> */}
                    <Card.Content>
                      <Card.Header text={title} />
                      <Card.Description
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst."
                        buttonText="Read More"
                        buttonLink="#"
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="Heading" />
          </Container>

          <Container isGrey>
            <Heading text="Heading" />
          </Container>

          <Container isGrey>
            <Heading text="Heading" />
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}