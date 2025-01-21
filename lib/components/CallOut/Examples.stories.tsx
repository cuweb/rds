import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavButtonsData } from '../../data/NavData'
import { CallOut } from './CallOut'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'

const meta: Meta = {
  title: 'Components/Call Out/Examples',
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
          {/* <Nav.Menu menu={NavDataSingle} /> */}
          <Nav.Buttons menu={NavButtonsData} />
        </Nav.Top>
      </Nav>

      <Main maxWidth="5xl">
        <Section maxWidth="7xl">
          <CallOut justify="center" maxWidth="4xl" title="Open House">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
              mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
            </p>
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="grey" title="Request Information" />
            </ButtonGroup>
          </CallOut>
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <CallOut justify="center" maxWidth="4xl" title="Open House">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
            mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
          </p>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button color="grey" title="Request Information" />
          </ButtonGroup>
        </CallOut>

        <CallOut justify="center" maxWidth="4xl" title="Open House">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
            mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
          </p>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button color="grey" title="Request Information" />
          </ButtonGroup>
        </CallOut>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <CallOut justify="center" maxWidth="4xl" title="Open House">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
            mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
          </p>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button color="grey" title="Request Information" />
          </ButtonGroup>
        </CallOut>

        <Section maxWidth="7xl">
          <CallOut justify="center" maxWidth="4xl" title="Open House">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
              mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
            </p>
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="grey" title="Request Information" />
            </ButtonGroup>
          </CallOut>
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <CallOut justify="center" maxWidth="4xl" title="Open House">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
            mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
          </p>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button color="grey" title="Request Information" />
          </ButtonGroup>
        </CallOut>

        <Section maxWidth="7xl">
          <CallOut justify="center" maxWidth="4xl" title="Open House">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
              mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
            </p>
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="grey" title="Request Information" />
            </ButtonGroup>
          </CallOut>
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Section maxWidth="full">
          <CallOut justify="center" maxWidth="4xl" title="Open House">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
              mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
            </p>
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="grey" title="Request Information" />
            </ButtonGroup>
          </CallOut>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
