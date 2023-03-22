import { Meta, StoryObj } from '@storybook/react'

import { Main } from '../../../layouts/Main/Main'
import { Container } from '../../../layouts/Container'
import { StackedList } from '../../../layouts/StackedList/StackedList'

import { TopNav } from '../../../components/TopNav/TopNav'
import { Banner } from '../../../components/Banner/Banner'
import { FooterBasic } from '../../../components/Footer/FooterBasic/FooterBasic'
import { NewsItemData as data } from '../../../components/Listings/NewsItem/NewsItemData'
import { NewsItem } from '../../../components/Listings/NewsItem/NewsItem'

const meta: Meta = {
  title: 'Examples/Projects/cutheme/News Listing Blocks',
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

export const NewsListingBlocks: Story = {
  render: () => (
    <>
      <TopNav title="Carleton University" />
      <Banner title="cutheme news card testing" isType="dark-wave" align="left" />

      <Main>
        <Container as="section" hasProse>
          <DoublePara />

          <h2>News Listing Block</h2>
          <SinglePara />

          <Container as="div" bgColor="white" maxWidth="7xl" hasProse>
            <StackedList hasBorder hasShadow>
              {data.map(({ id, title, link, image, alt, date, excerpt }) => (
                <NewsItem key={id} image={image} alt={alt} title={title} link={link} date={date} excerpt={excerpt} />
              ))}
            </StackedList>
          </Container>

          <DoublePara />

          <h2>News Listing Block with Grey Bg</h2>
          <SinglePara />

          <Container as="div" bgColor="grey" hasProse>
            <StackedList hasBorder hasShadow>
              {data.map(({ id, title, link, image, alt, date, excerpt }) => (
                <NewsItem key={id} image={image} alt={alt} title={title} link={link} date={date} excerpt={excerpt} />
              ))}
            </StackedList>
          </Container>

          <h2>Consecutive News Listing Block</h2>
          <SinglePara />

          <Container as="div" bgColor="white" hasProse>
            <StackedList hasBorder hasShadow>
              {data.map(({ id, title, link, image, alt, date, excerpt }) => (
                <NewsItem key={id} image={image} alt={alt} title={title} link={link} date={date} excerpt={excerpt} />
              ))}
            </StackedList>
          </Container>

          <Container as="div" bgColor="white" hasProse>
            <StackedList hasBorder hasShadow>
              {data.map(({ id, title, link, image, alt, date, excerpt }) => (
                <NewsItem key={id} image={image} alt={alt} title={title} link={link} date={date} excerpt={excerpt} />
              ))}
            </StackedList>
          </Container>

          <h2>Consecutive News Listing Block with Grey Bg</h2>
          <SinglePara />

          <Container as="div" bgColor="grey" hasProse>
            <StackedList hasBorder hasShadow>
              {data.map(({ id, title, link, image, alt, date, excerpt }) => (
                <NewsItem key={id} image={image} alt={alt} title={title} link={link} date={date} excerpt={excerpt} />
              ))}
            </StackedList>
          </Container>

          <Container as="div" bgColor="grey" hasProse>
            <StackedList hasBorder hasShadow>
              {data.map(({ id, title, link, image, alt, date, excerpt }) => (
                <NewsItem key={id} image={image} alt={alt} title={title} link={link} date={date} excerpt={excerpt} />
              ))}
            </StackedList>
          </Container>
        </Container>
      </Main>

      <FooterBasic />
    </>
  ),
}
