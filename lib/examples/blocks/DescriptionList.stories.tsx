import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { Nav } from '../../components/Nav/Nav'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { TextImage } from '../../components/TextImage/TextImage'
import { Description } from '../../components/Description/Description'
import { DescriptionData } from '../../data/DescriptionData'
import { NavDataSingle, NavAsideData } from '../../data/NavData'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const DescriptionList: Story = {
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
        <Section>
          <TextImage hasBorder>
            <TextImage.Content headerType="h1" title="Description List">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>
        </Section>

        <Section>
          <PageHeader header="Descripton List: Stacked" />
          <Description>
            {DescriptionData.map(({ id, term }) => (
              <Description.Meta key={id} term={term}>
                <p>
                  Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil
                  voluptatem non.
                </p>
                <p>
                  Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis
                  nec elit ultricies, sed tempus diam dignissim.
                </p>
                <p>
                  Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna
                  vel orci vulputate, eget vulputate neque porttitor.
                </p>
              </Description.Meta>
            ))}
          </Description>
        </Section>

        <Section>
          <PageHeader header="Description List: Columns" />
          <Description>
            {DescriptionData.map(({ id, term }) => (
              <Description.Meta key={id} term={term} isSmall hasBorder useColumns>
                <p>
                  Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil
                  voluptatem non.
                </p>
                <p>
                  Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis
                  nec elit ultricies, sed tempus diam dignissim.
                </p>
                <p>
                  Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna
                  vel orci vulputate, eget vulputate neque porttitor.
                </p>
              </Description.Meta>
            ))}
          </Description>
        </Section>

        <Section>
          <PageHeader header="Description List: Accordion" />
          <Description>
            {DescriptionData.map(({ id, term }) => (
              <Description.Accordion key={id} term={term}>
                <p>
                  Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil
                  voluptatem non.
                </p>
                <p>
                  Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis
                  nec elit ultricies, sed tempus diam dignissim.
                </p>
                <p>
                  Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna
                  vel orci vulputate, eget vulputate neque porttitor.
                </p>
              </Description.Accordion>
            ))}
          </Description>
        </Section>

        <Section isGrey>
          <PageHeader header="Descripton List: Stacked" />
          <Description>
            {DescriptionData.map(({ id, term }) => (
              <Description.Meta key={id} term={term}>
                <p>
                  Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil
                  voluptatem non.
                </p>
                <p>
                  Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis
                  nec elit ultricies, sed tempus diam dignissim.
                </p>
                <p>
                  Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna
                  vel orci vulputate, eget vulputate neque porttitor.
                </p>
              </Description.Meta>
            ))}
          </Description>
        </Section>

        <Section isGrey>
          <PageHeader header="Description List: Columns" />
          <Description>
            {DescriptionData.map(({ id, term }) => (
              <Description.Meta key={id} term={term} useColumns>
                <p>
                  Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil
                  voluptatem non.
                </p>
                <p>
                  Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis
                  nec elit ultricies, sed tempus diam dignissim.
                </p>
                <p>
                  Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna
                  vel orci vulputate, eget vulputate neque porttitor.
                </p>
              </Description.Meta>
            ))}
          </Description>
        </Section>

        <Section isGrey>
          <PageHeader header="Description List: Accordion" />
          <Description>
            {DescriptionData.map(({ id, term }) => (
              <Description.Accordion key={id} term={term}>
                <p>
                  Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil
                  voluptatem non.
                </p>
                <p>
                  Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis
                  nec elit ultricies, sed tempus diam dignissim.
                </p>
                <p>
                  Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna
                  vel orci vulputate, eget vulputate neque porttitor.
                </p>
              </Description.Accordion>
            ))}
          </Description>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
