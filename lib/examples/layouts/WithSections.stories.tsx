import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { Nav } from '../../components/Nav/Nav'
import { Column } from '../../layouts/Column/Column'
import { TextImage } from '../../components/TextImage/TextImage'
import { WideImage } from '../../components/WideImage/WideImage'
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

export const WithSections: Story = {
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
        <Section>
          <TextImage>
            <TextImage.Content headerType="h1" title="Grey and White Sections">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>
        </Section>

        <h2>Outside Section H2</h2>
        <DoublePara />

        <WideImage as="section" isType="dark" title="Wide image with dark bg">
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus.
          </p>
        </WideImage>

        <h3>Outside Section H3</h3>
        <SinglePara />
        <Column cols="2">
          <Column.Content>
            <SinglePara />
          </Column.Content>
          <Column.Content>
            <SinglePara />
          </Column.Content>
        </Column>
        <Column cols="2">
          <Column.Content>
            <SinglePara />
          </Column.Content>
          <Column.Content>
            <SinglePara />
          </Column.Content>
        </Column>

        <Section isGrey>
          <h2>Inside Section H2</h2>
          <DoublePara />
          <WideImage isType="dark" title="Wide image with dark bg">
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus.
            </p>
          </WideImage>
          <DoublePara />
          <Column cols="2">
            <Column.Content>
              <SinglePara />
            </Column.Content>
            <Column.Content>
              <SinglePara />
            </Column.Content>
          </Column>
        </Section>

        <Section isGrey>
          <h2>Inside Section H2</h2>
          <DoublePara />
          <Column cols="2">
            <Column.Content>
              <SinglePara />
            </Column.Content>
            <Column.Content>
              <SinglePara />
            </Column.Content>
          </Column>
        </Section>

        <WideImage as="section" isType="dark" title="Wide image with dark bg">
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus.
          </p>
        </WideImage>

        <Section isGrey>
          <h2>Inside Section H2</h2>
          <DoublePara />
        </Section>

        <Section>
          <h2>Inside Section H2</h2>
          <DoublePara />
          <Column cols="2">
            <Column.Content>
              <SinglePara />
            </Column.Content>
            <Column.Content>
              <SinglePara />
            </Column.Content>
          </Column>
        </Section>

        <Section>
          <h2>Inside Section H2</h2>
          <DoublePara />
        </Section>

        <WideImage as="section" isType="dark" title="Wide image with dark bg">
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus.
          </p>
        </WideImage>

        <Section>
          <h2>Inside Section H2</h2>
          <DoublePara />
        </Section>

        <Section isGrey>
          <h2>Inside Section H2</h2>
          <DoublePara />
        </Section>
        <DoublePara />

        <Column cols="2">
          <Column.Content>
            <SinglePara />
          </Column.Content>
          <Column.Content>
            <SinglePara />
          </Column.Content>
        </Column>
        <Column cols="2">
          <Column.Content>
            <SinglePara />
          </Column.Content>
          <Column.Content>
            <SinglePara />
          </Column.Content>
        </Column>

        <h2>Outside Section H2</h2>
        <DoublePara />
      </Main>

      <FooterStandard />
    </>
  ),
}
