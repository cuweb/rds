import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavAsideData } from '../../data/NavData'
import { Description } from './Description'
import { DescriptionData as descMeta } from '../../data/DescriptionData'
import { PageHeader } from '../PageHeader/PageHeader'

const meta: Meta = {
  title: 'Components/Description/Examples',
  parameters: {
    layout: 'fullscreen',
  },
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

export const LayoutExamples: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Raven Design System" link="/" />
          {/* <Nav.Menu menu={NavDataSingle} /> */}
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

      <Main maxWidth="5xl">
        <Section maxWidth="7xl">
          <PageHeader
            as="h1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Description Lists"
            size="lg"
          />
          <Description>
            {descMeta.map((item) => (
              <Description.Meta key={item?.id} term={item?.term} useColumns>
                {item?.details}
              </Description.Meta>
            ))}
          </Description>
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Description>
          {descMeta.map((item) => (
            <Description.Meta key={item?.id} term={item?.term}>
              {item?.details}
            </Description.Meta>
          ))}
        </Description>

        <Description>
          {descMeta.map((item) => (
            <Description.Meta key={item?.id} term={item?.term} useColumns>
              {item?.details}
            </Description.Meta>
          ))}
        </Description>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Description>
          {descMeta.map((item) => (
            <Description.Accordion key={item?.id} term={item?.term}>
              {item?.details}
            </Description.Accordion>
          ))}
        </Description>

        <Section maxWidth="7xl" isGrey>
          <Description>
            {descMeta.map((item) => (
              <Description.Meta key={item?.id} term={item?.term} useColumns>
                {item?.details}
              </Description.Meta>
            ))}
          </Description>
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Description>
          {descMeta.map((item) => (
            <Description.Meta key={item?.id} term={item?.term} useColumns>
              {item?.details}
            </Description.Meta>
          ))}
        </Description>

        <Section maxWidth="7xl">
          <Description>
            {descMeta.map((item) => (
              <Description.Meta key={item?.id} term={item?.term} useColumns>
                {item?.details}
              </Description.Meta>
            ))}
          </Description>
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Section maxWidth="full" isGrey>
          <Description>
            {descMeta.map((item) => (
              <Description.Meta key={item?.id} term={item?.term} useColumns>
                {item?.details}
              </Description.Meta>
            ))}
          </Description>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
