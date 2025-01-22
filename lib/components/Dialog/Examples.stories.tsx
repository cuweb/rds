import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { PageHeader } from '../PageHeader/PageHeader'
import { Dialog } from './Dialog'
import { Nav } from '../Nav/Nav'
import { NavButtonsData } from '../../data/NavData'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

const meta: Meta = {
  title: 'Components/Dialog/Examples',
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
  render: () => {
    const [BasicDialogOpen, setBasicDialogOpen] = useState(false)
    const [ConfirmDialogOpen, setConfirmDialogOpen] = useState(false)

    return (
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
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Dialog Examples"
            size="lg"
          />
          <SinglePara />

          <ButtonGroup>
            <Button id="basicModal" title="Open Basic Dialog" onClick={() => setBasicDialogOpen(true)} />
            <Button
              id="modalButton"
              title="Dialog with Close"
              color="dark-grey"
              onClick={() => setConfirmDialogOpen(true)}
            />
          </ButtonGroup>

          <SinglePara />
          <SinglePara />
        </Main>

        <Dialog title="Click to Open Dialog" isOpen={BasicDialogOpen} setIsOpen={setBasicDialogOpen} />

        <Dialog
          title="Click to Open Dialog"
          description="Description inside the dialog box"
          isOpen={ConfirmDialogOpen}
          setIsOpen={setConfirmDialogOpen}
        >
          <Button isSmall title="Confirm" />
        </Dialog>

        <FooterStandard />
      </>
    )
  },
}
