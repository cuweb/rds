import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { Column } from '../../layouts/Column/Column'
import { Nav } from '../../components/Nav/Nav'
import { TextImage } from '../../components/TextImage/TextImage'
import { WideImage } from '../../components/WideImage/WideImage'
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup'
import { Button } from '../../components/Button/Button'
import { Card } from '../../components/Card/Card'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { NavDataSingle, NavAsideData } from '../../data/NavData'
import { NewsData } from '../../data/NewsData'

const meta: Meta = {
  title: 'Prototypes/Layouts',
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

export const BlockSpacing: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
          {/* <Nav.Menu menu={NavDataSingle} /> */}
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

      <Main>
        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Section isGrey>
          <h2>Grey Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <Section isGrey>
          <h2>Grey Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />
      </Main>

      <FooterStandard />
    </>
  ),
}
