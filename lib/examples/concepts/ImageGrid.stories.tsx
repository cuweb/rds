import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { Nav } from '../../components/Nav/Nav'
import { TextMedia } from '../../components/TextMedia/TextMedia'
import { NavAsideData } from '../../data/NavData'

const meta: Meta = {
  title: 'Prototypes/Concepts',
}

export default meta
type Story = StoryObj

const inlineImageStyles = `background-image: url("https://picsum.photos/id/431/600/460"); background-position: 50% 50%; transform: scale(1)`

export const GridImages: Story = {
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

          <TextMedia>
            <TextMedia.Content headerType="h1" title="News Listing">
              <p>
                Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus.
              </p>
            </TextMedia.Content>
          </TextMedia>

          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>

          <Section as="div">
            <div className="grid grid-cols-4 gap-5">
              <div className="aspect-[3/4] bg-green-500 bg-cover bg-center bg-[url('https://picsum.photos/id/431/600/460')] col-span-2 row-span-2"></div>
              <div className="aspect-[3/4] bg-green-500 bg-cover bg-center bg-[url('https://picsum.photos/id/431/600/460')]"></div>
              <div className="aspect-[3/4] bg-green-500 bg-cover bg-center bg-[url('https://picsum.photos/id/431/600/460')]"></div>
              <div className="aspect-[3/4] bg-green-500 bg-cover bg-center bg-[url('https://picsum.photos/id/431/600/460')]"></div>
              <div className="aspect-[3/4] bg-green-500 bg-cover bg-center bg-[url('https://picsum.photos/id/431/600/460')]"></div>
              <div className="aspect-[3/4] bg-green-500 bg-cover bg-center bg-[url('https://picsum.photos/id/431/600/460')]"></div>
              <div className="aspect-[3/4] bg-green-500 bg-cover bg-center bg-[url('https://picsum.photos/id/431/600/460')]"></div>
              <div className="aspect-[3/4] bg-green-500 bg-cover bg-center bg-[url('https://picsum.photos/id/431/600/460')]"></div>
              <div className="aspect-[3/4] bg-green-500 bg-cover bg-center bg-[url('https://picsum.photos/id/431/600/460')]"></div>
            </div>
          </Section>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor.
          </p>
          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor.
          </p>
          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor.
          </p>
          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Nobis voluptatem dolorum et eum doloremque cupiditate
            velit. Praesentium architecto a distinctio aut reprehenderit ducimus.
          </p>
          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
