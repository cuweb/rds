import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavButtonsData } from '../../data/NavData'
import { PageHeader } from '../PageHeader/PageHeader'
import { Modal } from '../Modal/Modal'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'
import { ArticleData as contentData } from '../../data/ArticleData'

const meta: Meta = {
  title: 'Components/Modal/Examples',
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
            <Nav.Buttons menu={NavButtonsData} />
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
            <Button id="basicModal" title="Click to Open Modal" onClick={() => setBasicDialogOpen(true)} />
            <Button
              id="modalButton"
              title="Modal w/Content as Prop"
              color="dark-grey"
              onClick={() => setConfirmDialogOpen(true)}
            />
          </ButtonGroup>

          <SinglePara />
          <SinglePara />
        </Main>

        <Modal
          isOpen={BasicDialogOpen}
          setIsOpen={setBasicDialogOpen}
          ariaLabel="H2 Heading"
          ariaDescription=" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem."
        >
          <h2>H2 Heading</h2>
          <p>
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
            aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
            egestas fringilla sapien.
          </p>
          <p>
            Faucibus commodo massa rhoncus, volutpat.
            <strong>Dignissim</strong> sed <strong>eget risus enim</strong>. Mattis mauris semper sed amet vitae sed
            turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
            <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
          </p>
        </Modal>

        <Modal
          isOpen={ConfirmDialogOpen}
          content={contentData}
          setIsOpen={setConfirmDialogOpen}
          ariaLabel="H2 Heading"
          ariaDescription=" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem."
        />

        <FooterStandard />
      </>
    )
  },
}
