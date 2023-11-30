import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterDept } from '../../components/Footer/FooterDept/FooterDept'
import { TopBar } from '../../components/TopBar/TopBar'
import { HeroTextImage } from '../../_deprecated/HeroTextImage/HeroTextImage'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { FooterCookie } from '../../components/Footer/FooterCookie/FooterCookie'

const meta: Meta = {
  title: 'Examples/Templates',
}

export default meta
type Story = StoryObj

const SinglePara = () => {
  return (
    <>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

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
          <h3>Heading Three</h3>
          <DoublePara />

          <ul>
            <li>Donec ac suscipit nunc. Fusce egestas risus eu libero fermentum congue.</li>

            <li>
              In congue felis id mollis accumsan.
              <ul>
                <li>
                  Proin sollicitudin tellus congue venenatis semper.
                  <ul>
                    <li>Nullam mollis in velit sed pulvinar.</li>

                    <li>Curabitur fermentum nisi dui, id blandit nisi pellentesque at.</li>
                  </ul>
                </li>

                <li>Ut id felis quis mi fringilla faucibus.</li>

                <li>Curabitur elementum velit ex, eu interdum ante suscipit sit amet.</li>
              </ul>
            </li>

            <li>Vestibulum est lorem, placerat ac libero vitae, placerat suscipit augue.</li>

            <li>Etiam et convallis elit. Donec ac suscipit nunc.</li>

            <li>
              Fusce egestas risus eu libero fermentum congue.
              <ul>
                <li>
                  In congue felis id mollis accumsan.
                  <ul>
                    <li>Proin sollicitudin tellus congue venenatis semper.</li>

                    <li>
                      Nullam mollis in velit sed pulvinar.
                      <ul>
                        <li>Curabitur fermentum nisi dui, id blandit nisi pellentesque at.</li>

                        <li>Ut id felis quis mi fringilla faucibus.</li>
                      </ul>
                    </li>

                    <li>Curabitur elementum velit ex, eu interdum ante suscipit sit amet.</li>
                  </ul>
                </li>

                <li>Vestibulum est lorem, placerat ac libero vitae, placerat suscipit augue.</li>
              </ul>
            </li>

            <li>Etiam et convallis elit. Donec ac suscipit nunc.</li>

            <li>Fusce egestas risus eu libero fermentum congue.</li>
          </ul>

          <DoublePara />

          <ol>
            <li>Donec ac suscipit nunc. Fusce egestas risus eu libero fermentum congue.</li>

            <li>
              In congue felis id mollis accumsan.
              <ol>
                <li>
                  Proin sollicitudin tellus congue venenatis semper.
                  <ol>
                    <li>Nullam mollis in velit sed pulvinar.</li>

                    <li>Curabitur fermentum nisi dui, id blandit nisi pellentesque at.</li>
                  </ol>
                </li>

                <li>Ut id felis quis mi fringilla faucibus.</li>

                <li>Curabitur elementum velit ex, eu interdum ante suscipit sit amet.</li>
              </ol>
            </li>

            <li>Vestibulum est lorem, placerat ac libero vitae, placerat suscipit augue.</li>

            <li>Etiam et convallis elit. Donec ac suscipit nunc.</li>

            <li>
              Fusce egestas risus eu libero fermentum congue.
              <ol>
                <li>
                  In congue felis id mollis accumsan.
                  <ol>
                    <li>Proin sollicitudin tellus congue venenatis semper.</li>

                    <li>
                      Nullam mollis in velit sed pulvinar.
                      <ol>
                        <li>Curabitur fermentum nisi dui, id blandit nisi pellentesque at.</li>

                        <li>Ut id felis quis mi fringilla faucibus.</li>
                      </ol>
                    </li>

                    <li>Curabitur elementum velit ex, eu interdum ante suscipit sit amet.</li>
                  </ol>
                </li>

                <li>Vestibulum est lorem, placerat ac libero vitae, placerat suscipit augue.</li>
              </ol>
            </li>

            <li>Etiam et convallis elit. Donec ac suscipit nunc.</li>

            <li>Fusce egestas risus eu libero fermentum congue.</li>
          </ol>

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
