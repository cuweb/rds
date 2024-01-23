import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterDept } from '../../components/Footer/FooterDept/FooterDept'
import { Nav } from '../../components/Nav/Nav'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { FooterCookie } from '../../components/Footer/FooterCookie/FooterCookie'
import { PageHeaders } from '../../components/PageHeaders/PageHeaders'
import { Figure } from '../../components/Figure/Figure'
import { NavDataSingle, NavAsideData } from '../../data/NavData'

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

export const PeopleHeader: Story = {
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
          <PageHeaders header="Master Jedi Greely Wrinkle" pronoun="He/Him">
            <Figure size="sm" align="right" hasShadow>
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
              website="#"
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
