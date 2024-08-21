import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterDept } from '../../components/Footer/FooterDept/FooterDept'
import { Nav } from '../../components/Nav/Nav'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { FooterCookie } from '../../components/Footer/FooterCookie/FooterCookie'
import { TextImage } from '../../components/TextImage/TextImage'
import { Quote } from '../../components/Quote/Quote'
import { Column } from '../../layouts/Column/Column'
import { NavAsideData } from '../../data/NavData'

const meta: Meta = {
  title: 'Prototypes/Layouts',
}

export default meta
type Story = StoryObj

const SinglePara = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
        vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies,{' '}
        <a href="https://carleton.ca">sed tempus diam dignissim</a>. Suspendisse condimentum magna vel orci vulputate,
        eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in
        vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget
        suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
      </p>
    </>
  )
}

const DoublePara = () => {
  return (
    <>
      <p>
        Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna. Nobis
        voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit
        ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis
        ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget
        suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
      </p>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

export const BasicMarkupLight: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

      <Main>
        <Section proseType="light">
          <TextImage>
            <TextImage.Content headerType="h1" title="Basic Markup (Prose Light)">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>

          <h2>Heading Two</h2>
          <DoublePara />

          <h3>Heading Three</h3>
          <SinglePara />

          <h4>Heading Four</h4>
          <DoublePara />

          <Column maxWidth="5xl" cols="2" gridGap="10">
            <Column.Content>
              <SinglePara />
              <h2>Header Two</h2>
              <SinglePara />
              <h3>Header Three</h3>
              <SinglePara />
              <h4>Header Four</h4>
              <SinglePara />
            </Column.Content>
            <Column.Content>
              <SinglePara />
              <h2>Header Two</h2>
              <SinglePara />
              <h3>Header Three</h3>
              <SinglePara />
              <h4>Header Four</h4>
              <SinglePara />
            </Column.Content>
          </Column>

          <DoublePara />

          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere
              tellus vitae, sagittis justo.
            </li>
            <li>
              Suspendisse <a href="https://cuweb.github.io/rds/">velit eget suscipit tincidunt</a> vel orci vulputate,
              eget vulputate neque porttitor.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <ul>
                <li>Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.</li>
                <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                <li>
                  Aenean sit amet tortor <a href="https://cuweb.github.io/rds/">velit eget suscipit tincidunt</a> vitae,
                  sagittis justo.
                  <ul>
                    <li>Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.</li>
                    <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                    <li>Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.</li>
                    <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                  </ul>
                </li>
                <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                <li>Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.</li>
              </ul>
            </li>
            <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
            <li>Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor.</li>
            <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
          </ul>

          <DoublePara />

          <ol>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere
              tellus vitae, sagittis justo.
            </li>
            <li>Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor.</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <ol>
                <li>Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.</li>
                <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                <li>
                  Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.
                  <ol>
                    <li>Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.</li>
                    <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                    <li>Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.</li>
                    <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                  </ol>
                </li>
                <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                <li>Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.</li>
              </ol>
            </li>
            <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
            <li>Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor.</li>
            <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
          </ol>

          <DoublePara />

          <Quote cite="John Doe">
            <p>
              Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus.
            </p>
          </Quote>

          <DoublePara />

          <Quote cite="John Doe" graphic="quote">
            <p>
              Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus.
            </p>
          </Quote>

          <DoublePara />

          <Quote cite="John Doe" isCenter>
            <p>
              Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus.
            </p>
          </Quote>

          <DoublePara />

          <Quote cite="John Doe" graphic="quote" isCenter>
            <p>
              Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus.
            </p>
          </Quote>

          <DoublePara />
        </Section>
      </Main>

      <FooterDept
        buildingName="Pigiarvik (ᐱᒋᐊᕐᕕᒃ)"
        deptName="Information Technology Services"
        email="noreply@carleton.ca"
        footerButtons={[
          {
            id: 1,
            title: 'Contact support',
            url: '#',
          },
          {
            id: 2,
            title: 'Recent alerts',
            url: '#',
          },
        ]}
        officeNumber="400"
        phone="613-520-2600"
      />

      <FooterStandard />
      <FooterCookie />
    </>
  ),
}
