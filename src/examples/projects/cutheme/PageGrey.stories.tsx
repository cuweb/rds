import { Meta, StoryObj } from '@storybook/react'

import { Main } from '../../../layouts/Main/Main'
import { Section } from '../../../layouts/Section/Section'
import { Container } from '../../../layouts/Container/Container'
import { Column } from '../../../layouts/Column/Column'

import { TopNav } from '../../../components/TopNav/TopNav'
import { Banner } from '../../../components/Banner/Banner'
import { FooterBasic } from '../../../components/Footer/FooterBasic/FooterBasic'
import { NewsCard } from '../../../components/Cards/NewsCard/NewsCard'

import { NewsCardData as data } from '../../../components/Cards/NewsCard/NewsCardData'

const meta: Meta = {
  title: 'Examples/Projects/cutheme',
  tags: ['autodocs'],
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

export const GreyContainer: Story = {
  render: () => (
    <>
      <TopNav title="Carleton University" />
      <Banner
        title="cutheme layout testing"
        isType="dark-wave"
        align="left"
        paragraph="This is an example page that starts with a container component with a grey background"
      />

      <Main>
        <Section hasProse>
          <Container bgColor="grey">
            <h2>News Card Grid</h2>
            <p>Uses Container, Column and NewsCard components.</p>
            <Column cols="3">
              {data.map((item) => (
                <NewsCard
                  key={item.id}
                  title={item?.title}
                  link={item?.link}
                  image={item?.image}
                  date={item?.date}
                  excerpt={item?.excerpt}
                  tags={item?.tags}
                />
              ))}
            </Column>
          </Container>

          <h2>This is a header 2</h2>
          <SinglePara />

          <h3>This is a header 3</h3>
          <SinglePara />

          <h4>This is a header 4</h4>
          <DoublePara />

          <Container bgColor="white">
            <h2>News Card Grid</h2>
            <p>Uses Container, Column and NewsCard components.</p>
            <Column cols="3">
              {data.map((item) => (
                <NewsCard
                  key={item.id}
                  title={item?.title}
                  link={item?.link}
                  image={item?.image}
                  date={item?.date}
                  excerpt={item?.excerpt}
                  tags={item?.tags}
                />
              ))}
            </Column>
          </Container>

          <DoublePara />

          <h2>This is a header 2</h2>
          <SinglePara />

          <Container bgColor="grey">
            <h2>News Card Grid</h2>
            <p>Uses Container, Column and NewsCard components.</p>
            <Column cols="3">
              {data.map((item) => (
                <NewsCard
                  key={item.id}
                  title={item?.title}
                  link={item?.link}
                  image={item?.image}
                  date={item?.date}
                  excerpt={item?.excerpt}
                  tags={item?.tags}
                />
              ))}
            </Column>
          </Container>

          <Container bgColor="grey" maxWidth="5xl">
            <h2>News Card Grid</h2>
            <p>Uses Container, Column and NewsCard components.</p>
            <Column cols="3" maxWidth="7xl">
              {data.map((item) => (
                <NewsCard
                  key={item.id}
                  title={item?.title}
                  link={item?.link}
                  image={item?.image}
                  date={item?.date}
                  excerpt={item?.excerpt}
                  tags={item?.tags}
                />
              ))}
            </Column>
          </Container>

          <DoublePara />

          <h2>This is a header 2</h2>
          <SinglePara />

          <Container bgColor="white">
            <h2>News Card Grid</h2>
            <p>Uses Container, Column and NewsCard components.</p>
            <Column cols="3">
              {data.map((item) => (
                <NewsCard
                  key={item.id}
                  title={item?.title}
                  link={item?.link}
                  image={item?.image}
                  date={item?.date}
                  excerpt={item?.excerpt}
                  tags={item?.tags}
                />
              ))}
            </Column>
          </Container>

          <Container bgColor="white" maxWidth="5xl">
            <h2>News Card Grid</h2>
            <p>Uses Container, Column and NewsCard components.</p>
            <Column cols="3" maxWidth="7xl">
              {data.map((item) => (
                <NewsCard
                  key={item.id}
                  title={item?.title}
                  link={item?.link}
                  image={item?.image}
                  date={item?.date}
                  excerpt={item?.excerpt}
                  tags={item?.tags}
                />
              ))}
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}
