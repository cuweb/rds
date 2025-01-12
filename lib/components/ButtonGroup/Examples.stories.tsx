import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavAsideData } from '../../data/NavData'
import { ButtonGroup } from './ButtonGroup'
import { Button } from '../Button/Button'

const meta: Meta = {
  title: 'Components/Button Group/Examples',
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
        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <ButtonGroup align="start" gap="5">
          <Button title="Primary Red" />
          <Button color="dark-grey" title="Dark Grey" />
          <Button color="grey" title="Light Grey" />
        </ButtonGroup>

        <SinglePara />
        <SinglePara />

        <ButtonGroup align="start" gap="5">
          <Button title="Primary Red" />
          <Button color="dark-grey" title="Dark Grey" />
          <Button color="grey" title="Light Grey" />
        </ButtonGroup>

        <ButtonGroup align="start" gap="5">
          <Button title="Primary Red" />
          <Button color="dark-grey" title="Dark Grey" />
          <Button color="grey" title="Light Grey" />
        </ButtonGroup>

        <SinglePara />
        <SinglePara />

        <Section maxWidth="7xl" isGrey>
          <ButtonGroup align="center" gap="5">
            <Button title="Primary Red" />
            <Button color="dark-grey" title="Dark Grey" />
            <Button color="white" title="Light Grey" />
          </ButtonGroup>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
