import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterDept } from '../../components/Footer/FooterDept/FooterDept'
import { TopBar } from '../../components/TopBar/TopBar'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { FooterCookie } from '../../components/Footer/FooterCookie/FooterCookie'
import { PageHeaders } from '../../components/PageHeaders/PageHeaders'
import { Figure } from '../../components/Figure/Figure'

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

export const PageHeadersTest: Story = {
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
          {/* <PageHeaders header="Event About a Thing">
            <Figure size="medium" align="right">
              <img src="./sample-imgs/event-img.jpg" alt="Required alt text" width="200" height="133" />
            </Figure>
            <PageHeaders.Event
              eventType="Hybrid"
              virtualType="Teams"
              virtualUrl="https://events.carleton.ca"
              startDate="March 21st, 2023 at 6:00pm"
              location="Raven's Nest, 1125 Colonel By Drive"
              cost="$20 per adult, $15 for youth/senior"
              contactName="John Doe"
              contactEmail="johndoe@test.com"
              contactPhone="613-520-2600 x1234"
              primaryButtonUrl="https://carleton.ca"
              secondaryButtonUrl="https://carleton.ca/webservices"
              secondaryButtonText="More Information"
            />
          </PageHeaders>

          <br />
          <br />
          <br /> */}

          <PageHeaders header="Master Jedi Greely Wrinkle" pronoun="He/Him">
            <Figure size="sm" align="right" isRound hasShadow>
              <img
                src="https://fastly.picsum.photos/id/1062/400/400.jpg?hmac=zaTGri35k94fGnPFBesQ7tRVfjy6BUCtXDFQdWQ3r-k"
                alt="Required alt text"
                width="200"
                height="133"
              />
            </Figure>
            <PageHeaders.People
              jobTitle="Jedi Master & Jedi Council Member"
              degrees="Certificate, Padawan Academy of Jedi Arts"
              building="Onraed"
              room="Sector A29"
              email="greely@thejediyouseek.com"
              phone="613-520-2600"
              phoneExt="1234"
              resume="#"
              linkedin="#"
              twitter="#"
              facebook="#"
            />
          </PageHeaders>

          <DoublePara />
          <SinglePara />
          <DoublePara />

          <h2>Heading Two</h2>
          <SinglePara />
          <h3>Heading Three</h3>
          <SinglePara />
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
