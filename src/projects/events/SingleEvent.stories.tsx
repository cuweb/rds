import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../../layouts/Main/Main'
import { Container } from '../../layouts/Container'
import { Column } from '../../layouts/Column/Column'
import { Panel } from '../../layouts/Panel/Panel'
import { Aside } from '../../layouts/Aside/Aside'
import { Article } from '../../layouts/Article/Article'

import { TopNav } from '../../components/TopNav/TopNav'
import { Banner } from '../../components/Banner/Banner'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'
import { DetailsItem } from '../../components/Listings/DetailsItem/DetailsItem'
import { Button } from '../../components/Button/Button'

import { MapPinIcon } from '@heroicons/react/24/outline'

import { DetailsItemData as data } from '../../components/Listings/DetailsItem/DetailsItemData'

const meta: Meta = {
  title: 'Get Started/Projects/Event Calendar/Single Event',
}

export default meta
type Story = StoryObj

const EventContent = () => {
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
      <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;w=1310&amp;h=873&amp;q=80&amp;facepad=3"
        alt=""
        width="1310"
        height="873"
      />
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

export const SingleEvent: Story = {
  render: () => (
    <>
      <TopNav title="Events Calendar" />
      <Banner
        title="Single Event Post Template"
        align="left"
        maxWidth="7xl"
        isType="image"
        image="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"
      />

      <Main>
        <Container as="section">
          <Column cols="2/3" maxWidth="7xl">
            <Article>
              <EventContent />
            </Article>

            <Aside isSticky topSpace="8">
              <Column cols="1" gridGap="5">
                <Button
                  onClick={() => {
                    console.log('click')
                  }}
                  title="Remove from my events"
                />
                <Button
                  isType="grey"
                  onClick={() => {
                    console.log('click')
                  }}
                  title="Add to my events"
                />
              </Column>
              <Panel hasShadow>
                {data.map(({ title, description }) => (
                  <DetailsItem key={title}>
                    <DetailsItem.Icon icon={MapPinIcon} />
                    <DetailsItem.Content>
                      <DetailsItem.Title title={title} />
                      <DetailsItem.Description description={description} />
                    </DetailsItem.Content>
                  </DetailsItem>
                ))}
              </Panel>
            </Aside>
          </Column>
        </Container>
      </Main>

      <FooterBasic />
    </>
  ),
}
