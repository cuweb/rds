import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { TopNav } from '../../components/TopNav/TopNav'
import { Banner } from '../../_deprecated/Banner/Banner'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'

const meta: Meta = {
  title: 'Examples/Templates/Layouts',
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

export const WithContainers: Story = {
  render: () => (
    <>
      <TopNav title="Carleton University" />
      <Banner title="With Containers" align="left" />

      <Main>
        <Section hasProse>
          <h2>Heading Two</h2>
          <DoublePara />
          <h3>Heading Three</h3>
          <SinglePara />

          <Container isGrey>
            <h2>Heading Two</h2>
            <DoublePara />
          </Container>

          <Container isGrey>
            <h2>Heading Two</h2>
            <DoublePara />
          </Container>

          <h2>Heading Two</h2>
          <DoublePara />

          <Container isGrey>
            <h3>Heading Three</h3>
            <DoublePara />
          </Container>

          <Container>
            <h3>Heading Three</h3>
            <DoublePara />
          </Container>

          <Container>
            <h3>Heading Three</h3>
            <DoublePara />
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}
