import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { Nav } from '../../components/Nav/Nav'
import { Column } from '../../layouts/Column/Column'
import { TextMedia } from '../../components/TextMedia/TextMedia'
import { BadgeGroup } from '../../components/BadgeGroup/BadgeGroup'
import { Badge } from '../../components/Badge/Badge'
import { Card } from '../../components/Card/Card'
import { NavAsideData } from '../../data/NavData'

const meta: Meta = {
  title: 'Prototypes/Concepts',
}

export default meta
type Story = StoryObj

export const NewsBadges: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

      <Main>
        <Section>
          <TextMedia>
            <TextMedia.Content headerType="h1" title="News Listing" />
          </TextMedia>

          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>

          <Section>
            <Column cols="3">
              <Card>
                <Card.Figure>
                  <BadgeGroup gap="2" isAbsolute top={10} left={10}>
                    <Badge color="black80" text="News" rounded="lg" />
                  </BadgeGroup>
                  <img alt="Image alt text" height="300" src="https://picsum.photos/id/15/600/400" width="400" />
                </Card.Figure>
                <Card.Header
                  date="2022-12-23 10:27:31"
                  title="End-of-Year Reflections and Resolutions for Our Web Services Team"
                />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                </Card.Body>
                <Card.Footer>
                  <a className="cu-button cu-button--red cu-button--small" href="#">
                    Read more
                  </a>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Figure>
                  <img alt="Image alt text" height="300" src="https://picsum.photos/id/42/600/400" width="400" />
                </Card.Figure>
                <Card.Header date="2022-12-14 10:27:31" title="How to Write for the Web" />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                </Card.Body>
                <Card.Footer>
                  <a className="cu-button cu-button--red cu-button--small" href="#">
                    Read more
                  </a>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Figure>
                  <img alt="Image alt text" height="300" src="https://picsum.photos/id/40/600/400" width="400" />
                </Card.Figure>
                <Card.Header date="2022-11-25 10:27:31" title="Captivating Captions: Why We Use Captions on Videos" />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                </Card.Body>
                <Card.Footer>
                  <a className="cu-button cu-button--red cu-button--small" href="#">
                    Read more
                  </a>
                </Card.Footer>
              </Card>
            </Column>
          </Section>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
