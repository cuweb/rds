import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavButtonsData } from '../../data/NavData'
import { Alert } from './Alert'

const meta: Meta = {
  title: 'Components/Alert/Examples',
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
        <Nav.Top>
          <Nav.Logo title="Raven Design System" link="/" />
          <Nav.Aside>
            <Nav.Buttons menu={NavButtonsData} />
          </Nav.Aside>
        </Nav.Top>
      </Nav>

      <Main maxWidth="5xl">
        <Section maxWidth="7xl">
          <Alert content="Records have been updated." size="lg" title="Alert title" type="success" />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Alert content="Records may not have been updated." size="md" title="Alert title" type="warning" />
        <Alert content="Records have not been updated." size="md" title="Alert title" type="error" />

        <SinglePara />
        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Alert content="Records may not have been updated." size="sm" title="Alert title" type="warning" />
        <Alert content="Records may not have been updated." size="md" title="Alert title" type="warning" />
        <Alert content="Records may not have been updated." size="lg" title="Alert title" type="warning" />

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Alert content="Records can be updated." size="lg" title="Alert title" type="info" />
      </Main>

      <FooterStandard />
    </>
  ),
}
