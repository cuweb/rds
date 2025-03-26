import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
// import { Column } from '../../layouts/Column/Column'
import { Nav } from '../Nav/Nav'
// import { Carleton360 } from './Carleton360'
// import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
// import { Button } from '../Button/Button'
import { NavButtonsData } from '../../data/NavData'

const meta: Meta = {
  title: 'Components/Carleton360/Examples',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

// const SinglePara = () => {
//   return (
//     <>
//       <p>
//         Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
//         reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
//         Praesent quis ligula quis nulla malesuada tempor.
//       </p>
//     </>
//   )
// }

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
        <Section maxWidth="max">
          <p>POOOOP</p>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
