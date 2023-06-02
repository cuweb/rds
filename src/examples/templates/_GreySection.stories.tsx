import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../../layouts/Main/Main'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { TopNav } from '../../components/TopNav/TopNav'
import { Banner } from '../../components/Banner/Banner'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'

const meta: Meta = {
  title: 'Examples/Templates/Page Layouts',
}

export default meta
type Story = StoryObj

const SinglePara = () => {
  return (
    <>
      <p>
        <strong>Single Paragraph:</strong> Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium
        architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non.
        Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

const DoublePara = () => {
  return (
    <>
      <p>
        <strong>Double Paragraph:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet
        tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed
        tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor.
        Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra
        est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus
        turpis, quis pulvinar metus sapien in urna.
      </p>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

export const GreySection: Story = {
  render: () => (
    <>
      <TopNav title="Carleton University" />
      <Banner
        title="Grey Section Container"
        paragraph="This template replicates the basic markup template by using simple headings and paragraphs but is modifying the section container to feature a grey background that extends to the full width of the browser"
      />

      <Main>
        <Section>
          <Container isGrey>
            <SinglePara />
            <h2>This is a header two</h2>
            <DoublePara />
            <h3>This is a header three</h3>
            <SinglePara />
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}
