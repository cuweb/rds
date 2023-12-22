import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'
import { TopBar } from '../../components/TopBar/TopBar'
import { Column } from '../../layouts/Column/Column'
import { Heading } from '../../components/Heading/Heading'
import { TextImage } from '../../components/TextImage/TextImage'
import { Card } from './Card'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const CardRefactor: Story = {
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
            <TextImage.Content headerType="h1" title="Card Refactor">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>

          <Container>
            <Heading text="People Cards" />
            <Column cols="3">
              <Card hasShadow="onCard" isCenter>
                <Card.Figure isRound>
                  <img src="./sample-imgs/news-img.jpg" alt="News post example" width="400" height="266" />
                </Card.Figure>
                <Card.Header date="2022-12-16">How to Write for the Web</Card.Header>
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                </Card.Body>
                <Card.Footer>
                  <a href="https://carleton.ca">More Info</a>
                </Card.Footer>
              </Card>
            </Column>
          </Container>

          <Container>
            <Heading text="News Cards" />
            <Column cols="3">
              <Card hasShadow="onCard">
                <Card.Figure>
                  <img src="./sample-imgs/news-img.jpg" alt="News post example" width="400" height="266" />
                </Card.Figure>
                <Card.Header date="2022-12-16">How to Write for the Web</Card.Header>
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                </Card.Body>
                <Card.Footer>
                  <a href="https://carleton.ca">More Info</a>
                </Card.Footer>
              </Card>

              <Card hasShadow="onHover" isGrey>
                <Card.Figure>
                  <img src="./sample-imgs/news-img.jpg" alt="News post example" width="400" height="266" />
                </Card.Figure>
                <Card.Header>
                  <a href="https://carleton.ca">Captivating Captions: Why We Use Captions on Videos</a>
                </Card.Header>
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                </Card.Body>
              </Card>

              <Card hasShadow="onCard">
                <a href="https://carleton.ca">
                  <Card.Figure>
                    <img src="./sample-imgs/news-img.jpg" alt="News post example" width="400" height="266" />
                  </Card.Figure>
                  <Card.Header date="2022-12-16">
                    End-of-Year Reflections and Resolutions for Our Web Services Team
                  </Card.Header>
                </a>
                <Card.Footer>
                  <a href="https://carleton.ca">More Info</a>
                </Card.Footer>
              </Card>

              <Card hasShadow="onHover" isGrey>
                <Card.Header date="2022-12-16">How to Write for the Web</Card.Header>
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                </Card.Body>
                <Card.Footer>
                  <a href="https://carleton.ca">More Info</a>
                </Card.Footer>
              </Card>

              <Card hasShadow="onCard">
                <Card.Header>
                  <a href="https://carleton.ca">Captivating Captions: Why We Use Captions on Videos</a>
                </Card.Header>
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                </Card.Body>
              </Card>

              <Card hasShadow="onHover" isGrey>
                <a href="https://carleton.ca">
                  <Card.Header date="2022-12-16">
                    End-of-Year Reflections and Resolutions for Our Web Services Team
                  </Card.Header>
                </a>
                <Card.Footer>
                  <a href="https://carleton.ca">More Info</a>
                </Card.Footer>
              </Card>
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}
