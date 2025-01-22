import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavButtonsData } from '../../data/NavData'
import { Login } from './Login'
import { PageHeader } from '../PageHeader/PageHeader'

const meta: Meta = {
  title: 'Components/Login/Examples',
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
        <PageHeader
          as="h1"
          header="Login Page Example"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
          size="lg"
        />
        <Login
          onClickHandler={{
            default: () => {},
            google: () => {},
            linkedIn: () => {},
            twitter: () => {},
          }}
          useSocial
        />

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />
      </Main>

      <FooterStandard />
    </>
  ),
}
