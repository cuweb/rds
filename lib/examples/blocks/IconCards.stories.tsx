import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { Nav } from '../../components/Nav/Nav'
import { Heading } from '../../components/Heading/Heading'
import { TextImage } from '../../components/TextImage/TextImage'
import { Column } from '../../layouts/Column/Column'
import { IconData } from '../../data/IconData'
import { Card } from '../../components/Card/Card'
import { NavDataSingle, NavAsideData } from '../../data/NavData'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const IconCards: Story = {
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
            <Heading text="Icon Cards: Shadow on Static & Hover" />
            <Column cols="3">
              {IconData.slice(0, 6).map(({ id, link, title, icon }) => (
                <Card key={id} hasShadow="onCard" noHover>
                  <Card.IconThumb icon={icon} />
                  <Card.Header>{title}</Card.Header>
                  <Card.Body>
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                  </Card.Body>
                  <Card.Footer isType="button" buttonStyle="grey">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="Icon Cards: Shadow on Static & Hover with Grey Bg" />
            <Column cols="3">
              {IconData.slice(0, 6).map(({ id, link, title, icon }) => (
                <Card key={id} isGrey noHover>
                  <Card.IconThumb icon={icon} bgType="white" hasShadow />
                  <Card.Header>{title}</Card.Header>
                  <Card.Body>
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                  </Card.Body>
                  <Card.Footer isType="button" buttonType="outline" buttonStyle="dark-grey">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Icon Cards: Shadow on Static & Hover" />
            <Column cols="3">
              {IconData.slice(0, 6).map(({ id, link, title, icon }) => (
                <Card key={id} noHover>
                  <Card.IconThumb icon={icon} bgType="none" />
                  <Card.Header>{title}</Card.Header>
                  <Card.Body>
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                  </Card.Body>
                  <Card.Footer isType="button" buttonStyle="grey">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Icon Cards: Shadow on Static & Hover with Grey Bg" />
            <Column cols="3">
              {IconData.slice(0, 6).map(({ id, link, title, icon }) => (
                <Card key={id} isGrey hasShadow="onCard" noHover>
                  <Card.IconThumb icon={icon} />
                  <Card.Header>{title}</Card.Header>
                  <Card.Body>
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                  </Card.Body>
                  <Card.Footer isType="button" buttonType="outline" buttonStyle="dark-grey">
                    <a href={link}>More info</a>
                  </Card.Footer>
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
