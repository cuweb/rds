import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { TopBar } from '../../components/TopBar/TopBar'
import { Heading } from '../../components/Heading/Heading'
import { TextImage } from '../../components/TextImage/TextImage'
import { Description } from '../../components/Description/Description'
import { DescriptionData } from '../../data/DescriptionData'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const DescriptionListOptions: Story = {
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
            <TextImage.Content headerType="h1" title="Description List">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>

          <Container>
            <Heading text="Descripton List: Stacked" />
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
                    Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum
                    magna vel orci vulputate, eget vulputate neque porttitor.
                  </p>
                </Description.Meta>
              ))}
            </Description>
          </Container>

          <Container>
            <Heading text="Description List: Columns" />
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
                    Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum
                    magna vel orci vulputate, eget vulputate neque porttitor.
                  </p>
                </Description.Meta>
              ))}
            </Description>
          </Container>

          <Container>
            <Heading text="Description List: Accordion" />
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
                    Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum
                    magna vel orci vulputate, eget vulputate neque porttitor.
                  </p>
                </Description.Accordion>
              ))}
            </Description>
          </Container>

          <Container isGrey>
            <Heading text="Descripton List: Stacked" />
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
                    Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum
                    magna vel orci vulputate, eget vulputate neque porttitor.
                  </p>
                </Description.Meta>
              ))}
            </Description>
          </Container>

          <Container isGrey>
            <Heading text="Description List: Columns" />
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
                    Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum
                    magna vel orci vulputate, eget vulputate neque porttitor.
                  </p>
                </Description.Meta>
              ))}
            </Description>
          </Container>

          <Container isGrey>
            <Heading text="Description List: Accordion" />
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
                    Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum
                    magna vel orci vulputate, eget vulputate neque porttitor.
                  </p>
                </Description.Accordion>
              ))}
            </Description>
          </Container>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
