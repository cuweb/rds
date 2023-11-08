import { Meta, StoryObj } from '@storybook/react'

import { Main } from '../../../layouts/Main/Main'
import { Section } from '../../../layouts/Section/Section'

import { TopBar } from '../../../components/TopBar/TopBar'
import { FooterBasic } from '../../../components/Footer/FooterBasic/FooterBasic'
import { TopBarDataSingle } from '../../../data/TopBarData'
import { TextImage } from '../../../components/TextImage/TextImage'

const meta: Meta = {
  title: 'Examples/Projects/cutheme',
}

export default meta
type Story = StoryObj

const DoublePara = () => {
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
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

export const EventDetails: Story = {
  render: () => (
    <>
      <TopBar>
        <TopBar.Primary>
          <TopBar.Logo title="Raven Design System" link="https://carleton.ca/webservices">
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
        <TopBar.Secondary>
          <TopBar.Menu>
            {TopBarDataSingle.map((topBarLink, i) => (
              <>
                {!topBarLink.submenu && (
                  <a key={i} href={topBarLink.href} className="cu-topbar--parent-link">
                    {topBarLink.title}
                  </a>
                )}
                {topBarLink.submenu && (
                  <TopBar.SubMenu label={topBarLink.title}>
                    {topBarLink.submenu.map((topBarSubLink, s) => (
                      <a key={s} href={topBarSubLink.href} className="cu-topbar--more-nav">
                        {topBarSubLink.title}
                      </a>
                    ))}
                  </TopBar.SubMenu>
                )}
              </>
            ))}
          </TopBar.Menu>
        </TopBar.Secondary>
      </TopBar>

      <Main>
        <Section hasProse>
          <TextImage flexRow="md" flipYsm>
            <TextImage.Event
              title="Capital Hoops Classic"
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
            >
              <img
                src="https://cu-production.s3.amazonaws.com/rds/sample-imgs/event-img.jpg"
                alt="Event supporting graphic"
                width="350"
                height="153"
              />
            </TextImage.Event>
          </TextImage>

          <DoublePara />
          <DoublePara />
          <DoublePara />
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}
