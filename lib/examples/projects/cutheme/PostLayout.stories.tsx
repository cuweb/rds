import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../../../layouts/Main/Main'
import { FooterDept } from '../../../components/Footer/FooterDept/FooterDept'
import { Nav } from '../../../components/Nav/Nav'
import { FooterStandard } from '../../../components/Footer/FooterStandard/FooterStandard'
import { FooterCookie } from '../../../components/Footer/FooterCookie/FooterCookie'
import { TextImage } from '../../../components/TextImage/TextImage'
import { BadgeGroup } from '../../../components/BadgeGroup/BadgeGroup'
import { Badge } from '../../../components/Badge/Badge'
import { Quote } from '../../../components/Quote/Quote'
import { Icon } from '../../../components/Icon/Icon'
import { NavButtonsData } from '../../../data/NavData'

const meta: Meta = {
  title: 'Projects/cutheme',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const PostLayout: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Top>
          <Nav.Logo title="Raven Design System" link="/" />
          <Nav.Aside>
            <Nav.Buttons menu={NavButtonsData} />
          </Nav.Aside>
        </Nav.Top>
      </Nav>

      <Main>
        <TextImage>
          <TextImage.Content
            headerType="h1"
            title="New Post Example"
            metaData={
              <>
                <div className="flex flex-row gap-4 md:gap-8 w-full">
                  <p className="flex flex-row items-center">
                    <Icon name="calendar-lines-pen" size={26} color="#f48c90" className="flex-shrink-0 mr-2" />
                    Published on September 3, 2025
                  </p>

                  <p className="flex flex-row items-center">
                    <Icon name="clock" size={22} color="#f48c90" className="flex-shrink-0 mr-2" /> Time to read: 5
                    minutes
                  </p>
                </div>

                <BadgeGroup bottom={0} gap="2" left={0} right={0} top={0}>
                  <Badge color="grey" rounded="lg" link="#" text="Design" />
                  <Badge color="grey" rounded="lg" link="#" text="Component Library" />
                  <Badge color="grey" rounded="lg" link="#" text="React" />
                </BadgeGroup>
              </>
            }
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lacus consectetur, molestie urna
              at, posuere erat. Nullam quis lobortis lorem. Donec semper turpis eros, sit amet tempus ligula rutrum
              vitae. Quisque tincidunt, enim a porta ultricies, nisl libero mattis augue, vitae auctor turpis libero sit
              amet augue. Vestibulum elementum enim sed ante mollis dictum.
            </p>
          </TextImage.Content>
        </TextImage>
        <h2>Heading Two</h2>
        <p>
          Ut iaculis non orci maximus luctus. Maecenas tincidunt condimentum dui vitae tempor. Sed ultricies velit sed
          tellus varius faucibus. Duis volutpat luctus felis a dictum. Integer tempus diam at condimentum blandit.
          Curabitur ornare arcu tempor, scelerisque purus vitae, blandit lacus. Duis ligula magna, euismod a quam et,
          gravida rhoncus felis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lacus consectetur, molestie urna at,
          posuere erat. Nullam quis lobortis lorem. Donec semper turpis eros, sit amet tempus ligula rutrum vitae.
          Quisque tincidunt, enim a porta ultricies, nisl libero mattis augue, vitae auctor turpis libero sit amet
          augue. Vestibulum elementum enim sed ante mollis dictum. Fusce at lectus vitae orci sodales finibus. Quisque
          congue odio lectus, sit amet fringilla mi hendrerit accumsan. Cras semper arcu eu mi tincidunt fermentum. In
          vitae leo quis dui malesuada tincidunt sit amet eget velit. Aliquam in urna nec diam mattis maximus
          ullamcorper venenatis eros.
        </p>
        <p>
          Sed erat eros, convallis in nulla mattis, feugiat iaculis est. Integer condimentum mauris at felis scelerisque
          iaculis. Donec sit amet arcu auctor, lobortis urna eu, hendrerit dolor. Pellentesque eu ante mi. Cras dictum
          dolor a fringilla gravida. Maecenas nec tellus commodo, placerat elit sed, accumsan ante. Quisque in sem urna.
          Sed nibh mi, congue nec lacinia ut, ullamcorper sed eros.
        </p>
        <Quote cite="John Doe">
          <p>
            Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus.
          </p>
        </Quote>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lacus consectetur, molestie urna at,
          posuere erat. Nullam quis lobortis lorem. Donec semper turpis eros, sit amet tempus ligula rutrum vitae.
          Quisque tincidunt, enim a porta ultricies, nisl libero mattis augue, vitae auctor turpis libero sit amet
          augue. Vestibulum elementum enim sed ante mollis dictum. Fusce at lectus vitae orci sodales finibus. Quisque
          congue odio lectus, sit amet fringilla mi hendrerit accumsan. Cras semper arcu eu mi tincidunt fermentum. In
          vitae leo quis dui malesuada tincidunt sit amet eget velit. Aliquam in urna nec diam mattis maximus
          ullamcorper venenatis eros.
        </p>
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
