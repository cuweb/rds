import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavButtonsData } from '../../data/NavData'
import { PageHeader } from './PageHeader'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

const meta: Meta = {
  title: 'Components/Page Header/Examples',
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
          <Nav.Aside>
            <Nav.Buttons menu={NavButtonsData} />
          </Nav.Aside>
        </Nav.Top>
      </Nav>

      <Main maxWidth="5xl">
        <Section maxWidth="7xl">
          <PageHeader
            as="h1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Page Header Examples"
            size="lg"
          >
            <ButtonGroup align="start" gap="5">
              <a href="#" className="cu-button cu-button--red">
                Button One
              </a>
              <a href="#" className="cu-button cu-button--dark-grey">
                Button Two
              </a>
            </ButtonGroup>
          </PageHeader>
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <PageHeader
          as="h1"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
          header="Page Header"
          size="lg"
        >
          <ButtonGroup align="start" gap="5">
            <a href="#" className="cu-button cu-button--red">
              Button One
            </a>
            <a href="#" className="cu-button cu-button--dark-grey">
              Button Two
            </a>
          </ButtonGroup>
        </PageHeader>

        <PageHeader
          as="h1"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
          header="Page Header"
          size="lg"
        >
          <ButtonGroup align="start" gap="5">
            <a href="#" className="cu-button cu-button--red">
              Button One
            </a>
            <a href="#" className="cu-button cu-button--dark-grey">
              Button Two
            </a>
          </ButtonGroup>
        </PageHeader>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <PageHeader
          as="h1"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
          header="Page Header"
          size="lg"
        >
          <ButtonGroup align="start" gap="5">
            <a href="#" className="cu-button cu-button--red">
              Button One
            </a>
            <a href="#" className="cu-button cu-button--dark-grey">
              Button Two
            </a>
          </ButtonGroup>
        </PageHeader>

        <Section maxWidth="7xl" isGrey>
          <PageHeader
            as="h1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Page Header"
            size="lg"
          >
            <ButtonGroup align="start" gap="5">
              <a href="#" className="cu-button cu-button--red">
                Button One
              </a>
              <a href="#" className="cu-button cu-button--dark-grey">
                Button Two
              </a>
            </ButtonGroup>
          </PageHeader>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
