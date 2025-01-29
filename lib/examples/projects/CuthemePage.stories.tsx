import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../../layouts/Main/Main'
import { FooterDept } from '../../components/Footer/FooterDept/FooterDept'
import { Nav } from '../../components/Nav/Nav'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { FooterCookie } from '../../components/Footer/FooterCookie/FooterCookie'
import { Section } from '../../layouts/Section/Section'
import { StackedList } from '../../layouts/StackedList/StackedList'
import { TextMedia } from '../../components/TextMedia/TextMedia'
import { Quote } from '../../components/Quote/Quote'
import { Column } from '../../layouts/Column/Column'
import { NavButtonsData, NavDataSingle } from '../../data/NavData'

const meta: Meta = {
  title: 'Prototypes/Projects',
  parameters: {
    layout: 'fullscreen',
  },
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

const ToC = () => {
  return (
    <>
      <ul>
        <li>
          <a href="http://carleton.ca">Lorem ipsum dolor</a>
        </li>
        <li>
          <a href="http://carleton.ca">Nunc viverra lorem arcu</a>
        </li>
        <li>
          <a href="http://carleton.ca">Consectetur elit</a>
          <ul>
            <li>
              <a href="http://carleton.ca">Suspendisse risus.</a>
            </li>
            <li>
              <a href="http://carleton.ca">Nullam ut nunc</a>
            </li>
            <li>
              <a href="http://carleton.ca">Integer mattis</a>
              <ul>
                <li>
                  <a href="http://carleton.ca">Phasellus porttitor</a>
                </li>
                <li>
                  <a href="http://carleton.ca">Praesent ante massa</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="http://carleton.ca">Etiam non convallis</a>
            </li>
            <li>
              <a href="http://carleton.ca">Vestibulum</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="http://carleton.ca">Turpis placerat</a>
        </li>
        <li>
          <a href="http://carleton.ca">Consectetur elit</a>
          <ul>
            <li>
              <a href="http://carleton.ca">Mauris feugiat interdum</a>
            </li>
            <li>
              <a href="http://carleton.ca">Etiam non convallis</a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export const CuthemePage: Story = {
  render: () => {
    return (
      <>
        <Nav>
          <Nav.Top>
            <Nav.Logo
              title="Max and Tessie Zelikovitz Centre for Jewish Studies"
              link="https://carleton.ca/webservices"
            />
            <Nav.Buttons menu={NavButtonsData} isSearch onClickSearch={() => {}} />
          </Nav.Top>
          <Nav.Bottom>
            <Nav.Menu menu={NavDataSingle} />
            <Nav.Buttons menu={NavButtonsData} isSearch onClickSearch={() => {}} />
          </Nav.Bottom>
        </Nav>

        <Main>
          <TextMedia>
            <TextMedia.Content headerType="h1" title="Basic Markup" width={100} isLight>
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextMedia.Content>
          </TextMedia>

          <SinglePara />

          <Section>
            <Column cols="2">
              <Column.Content>
                <SinglePara />
              </Column.Content>
              <Column.Content>
                <SinglePara />
              </Column.Content>
            </Column>
          </Section>

          <SinglePara />

          <Section isGrey>
            <Column cols="2">
              <Column.Content>
                <SinglePara />
              </Column.Content>
              <Column.Content>
                <SinglePara />
              </Column.Content>
            </Column>
          </Section>

          <p>
            Nobis voluptatem dolorum et eum <code>doloremque cupiditate</code> velit. Praesentium architecto a
            distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
            dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor.
          </p>

          <Section maxWidth="2xl">
            <StackedList header="Table of Contents" as="div" cols="1" listType="toc">
              <ToC />
            </StackedList>
          </Section>

          <SinglePara />

          <SinglePara />

          <h3>Heading Three</h3>
          <SinglePara />

          <h4>Heading Four</h4>
          <DoublePara />

          <Column cols="2">
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
    )
  },
}
