import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterDept } from '../../components/Footer/FooterDept/FooterDept'
import { TopBar } from '../../components/TopBar/TopBar'
import { HeroTextImage } from '../../_deprecated/HeroTextImage/HeroTextImage'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { FooterCookie } from '../../components/Footer/FooterCookie/FooterCookie'
import { StackedList } from '../../layouts/StackedList/StackedList'

const meta: Meta = {
  title: 'Examples/Layouts',
}

export default meta
type Story = StoryObj

const SinglePara = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
        vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
        condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida
        volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et
        malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus
        sapien in urna.
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

export const BasicMarkup: Story = {
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
          <HeroTextImage maxWidth="5xl">
            <HeroTextImage.Content title="Basic Markup" headerType="h1" />
          </HeroTextImage>
          <h2>Heading Two</h2>
          <SinglePara />

          <StackedList header="Table of Contents" as="div" cols="1" listType="toc" offset="right" hasShadow>
            <ToC />
          </StackedList>

          <h3>Heading Three</h3>
          <SinglePara />
          <DoublePara />

          <h3>Heading Four</h3>
          <SinglePara />
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
