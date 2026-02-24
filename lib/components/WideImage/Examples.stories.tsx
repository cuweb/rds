import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Column } from '../../layouts/Column/Column'
import { Nav } from '../Nav/Nav'
import { WideImage } from './WideImage'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'
import { NavButtonsData } from '../../data/NavData'

const meta: Meta = {
  title: 'Components/Wide Image/Examples',
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
        <Section maxWidth="max">
          <WideImage
            headerType="h1"
            image="https://picsum.photos/id/381/600/400"
            isType="image"
            title="Wide Image Examples"
            hasWave
          >
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
              accusamus in. Praesent quis ligula quis nulla malesuada tempor.
            </p>
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="dark-grey" title="Request Information" />
            </ButtonGroup>
          </WideImage>
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <WideImage isType="light" title="Wide Image" />
        <WideImage isType="light" title="Wide Image" />

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <WideImage isType="light" title="Wide Image">
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button color="dark-grey" title="Request Information" />
          </ButtonGroup>
        </WideImage>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <WideImage image="https://picsum.photos/id/381/600/400" isType="light" opacity={30} title="Wide Image">
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non.
          </p>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button color="dark-grey" title="Request Information" />
          </ButtonGroup>
        </WideImage>

        <Section maxWidth="7xl">
          <WideImage
            focalPointX={0}
            focalPointY={0}
            image="https://picsum.photos/id/381/600/400"
            isType="image"
            opacity={80}
            title="Wide Image"
          >
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="dark-grey" title="Request Information" />
            </ButtonGroup>
          </WideImage>
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <WideImage isType="light" title="Wide Image">
          <WideImage.Signup />
        </WideImage>

        <WideImage isType="dark" title="Wide Image">
          <WideImage.Signup />
        </WideImage>

        <Section maxWidth="7xl">
          <WideImage title="Wide Image" image="https://picsum.photos/id/381/600/400" isType="image">
            <WideImage.Signup />
          </WideImage>
        </Section>

        <Column cols="2" maxWidth="5xl">
          <Column.Content>
            <p>
              Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra
              in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada
              metus, et tristique dolor. Suspendisse vestibulum hendrerit.
            </p>
          </Column.Content>
          <Column.Content>
            <p>
              Right. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
              viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
              malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
            </p>
          </Column.Content>
        </Column>

        <Section maxWidth="full">
          <WideImage image="https://picsum.photos/id/381/600/400" isType="image" title="Wide Image Examples">
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
              accusamus in. Praesent quis ligula quis nulla malesuada tempor.
            </p>
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="dark-grey" title="Request Information" />
            </ButtonGroup>
          </WideImage>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
