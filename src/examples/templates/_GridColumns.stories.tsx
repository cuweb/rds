import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../../layouts/Main/Main'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Column } from '../../layouts/Column/Column'
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

export const GridColumns: Story = {
  render: () => (
    <>
      <TopNav title="Carleton University" />
      <Banner
        title="Grid Layouts and Columns"
        paragraph="This template uses the same layout configuration as the basic markup and grey section template examples and adds examples for a two and three column content layout"
      />

      <Main>
        <Section>
          <Container>
            <SinglePara />
            <h2>This is a header two</h2>

            <Column cols="2">
              <div>
                <SinglePara />
              </div>
              <div>
                <SinglePara />
              </div>
            </Column>

            <DoublePara />
          </Container>

          <Container isGrey>
            <h2>This is a header two</h2>
            <DoublePara />
            <Column cols="3">
              <div>
                <h3>Header three</h3>
                <SinglePara />
              </div>
              <div>
                <h3>Header three</h3>
                <SinglePara />
              </div>
              <div>
                <h3>Header three</h3>
                <SinglePara />
              </div>
            </Column>
          </Container>

          <Container>
            <h2>This is a header two</h2>
            <DoublePara />
            <Column cols="2">
              <div>
                <h3>Header three</h3>
                <SinglePara />
              </div>
              <div>
                <h3>Header three</h3>
                <SinglePara />
              </div>
            </Column>
            <Column cols="3">
              <div>
                <h3>Header three</h3>
                <SinglePara />
              </div>
              <div>
                <h3>Header three</h3>
                <SinglePara />
              </div>
              <div>
                <h3>Header three</h3>
                <SinglePara />
              </div>
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}
